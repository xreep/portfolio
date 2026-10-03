// GET /api/heat-index?tempC=38&humidity=62&aqi=160
// Public, read-only demo of Raksha's heat-stress engine (same code the site runs in the browser).
// Deterministic and side-effect free: responses are cacheable at the edge, nothing is stored.
const engine = require('../assets/js/raksha-engine.js');

const PER_MIN = 30;
const hits = new Map();

function send(res, code, obj, cache) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Access-Control-Allow-Origin', '*');           // read-only public demo, try it with curl
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', cache ? 'public, max-age=300, s-maxage=86400' : 'no-store');
  res.status(code).send(JSON.stringify(obj, null, 2));
}

module.exports = (req, res) => {
  const t0 = process.hrtime.bigint();
  if (req.method === 'OPTIONS') return send(res, 204, {});
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET, OPTIONS'); return send(res, 405, { error: 'method_not_allowed' }); }

  const ip = String(req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || 'unknown').split(',')[0].trim();
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < 60_000);
  if (list.length >= PER_MIN) { res.setHeader('Retry-After', '60'); return send(res, 429, { error: 'rate_limited', retryAfterSeconds: 60 }); }
  list.push(now); hits.set(ip, list); if (hits.size > 5000) hits.clear();

  const q = req.query || {};
  const pick = (k) => (Array.isArray(q[k]) ? q[k][0] : q[k]);
  const { status, body } = engine.assess({ tempC: pick('tempC'), humidity: pick('humidity'), aqi: pick('aqi') });
  const ms = Number(process.hrtime.bigint() - t0) / 1e6;
  res.setHeader('Server-Timing', `engine;dur=${ms.toFixed(3)}`);
  return send(res, status, status === 200 ? { ...body, meta: { servedBy: 'vercel-function', computeMs: Number(ms.toFixed(3)) } } : body, status === 200);
};
