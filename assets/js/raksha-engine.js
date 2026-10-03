/* Raksha heat-stress engine (browser + Node).
 * Ported from xreep/raksha src/risk/heat-index.ts and src/risk/aqi-bands.ts (commit ca5db28).
 * NOAA/NWS Rothfusz regression with both humidity adjustments; bands classified in °F
 * against 80/90/103/125 (never rounded Celsius). US EPA AQI bands. Pure functions, no I/O. */
(function (root) {
  const ENGINE = { name: 'raksha-heat-engine', version: '1.0.0', source: 'github.com/xreep/raksha/blob/main/src/risk/heat-index.ts', commit: 'ca5db28' };
  const BAND_MIN_F = { caution: 80, extremeCaution: 90, danger: 103, extremeDanger: 125 };
  const LEVEL = { Normal: 'green', Caution: 'green', 'Extreme Caution': 'amber', Danger: 'red', 'Extreme Danger': 'red' };
  const ADVICE = {
    Normal: 'No heat-stress concern at these conditions.',
    Caution: 'Fatigue is possible with prolonged exposure and activity. Drink water regularly.',
    'Extreme Caution': 'Heat cramps and exhaustion are possible. Take breaks in the shade and stay hydrated.',
    Danger: 'Heat exhaustion is likely; heat stroke is possible with long exposure. Limit outdoor activity.',
    'Extreme Danger': 'Heat stroke is highly likely. Stay indoors in a cool place and check on vulnerable people.',
  };
  const c2f = (c) => (c * 9) / 5 + 32;
  const f2c = (f) => ((f - 32) * 5) / 9;
  const bad = (v) => v === undefined || v === null || !Number.isFinite(v);

  function rothfusz(t, r) {
    return -42.379 + 2.04901523 * t + 10.14333127 * r - 0.22475541 * t * r - 0.00683783 * t * t
      - 0.05481717 * r * r + 0.00122874 * t * t * r + 0.00085282 * t * r * r - 0.00000199 * t * t * r * r;
  }
  function heatIndexF(tempF, rh) {
    if (bad(tempF) || bad(rh) || rh < 0 || rh > 100) return null;
    const simple = 0.5 * (tempF + 61 + (tempF - 68) * 1.2 + rh * 0.094);
    const screen = (simple + tempF) / 2;
    if (screen < 80) return { value: screen, formula: 'simple' };
    let hi = rothfusz(tempF, rh), adj = null;
    if (rh < 13 && tempF >= 80 && tempF <= 112) { hi -= ((13 - rh) / 4) * Math.sqrt((17 - Math.abs(tempF - 95)) / 17); adj = 'low-humidity'; }
    else if (rh > 85 && tempF >= 80 && tempF <= 87) { hi += ((rh - 85) / 10) * ((87 - tempF) / 5); adj = 'high-humidity'; }
    return { value: hi, formula: 'rothfusz', adjustment: adj };
  }
  function bandForF(f) {
    const label = bad(f) ? 'Normal' : f >= 125 ? 'Extreme Danger' : f >= 103 ? 'Danger' : f >= 90 ? 'Extreme Caution' : f >= 80 ? 'Caution' : 'Normal';
    return { label, level: LEVEL[label] };
  }
  function aqiBand(aqi) {
    if (bad(aqi)) return null;
    const label = aqi <= 50 ? 'Good' : aqi <= 100 ? 'Moderate' : aqi <= 150 ? 'Unhealthy for Sensitive Groups' : aqi <= 200 ? 'Unhealthy' : aqi <= 300 ? 'Very Unhealthy' : 'Hazardous';
    const level = aqi <= 100 ? 'green' : aqi <= 200 ? 'amber' : 'red';
    return { label, level };
  }
  const round = (v, d = 1) => Math.round(v * 10 ** d) / 10 ** d;

  /** Validate + assess. Returns { status, body } so the API and the browser share one contract. */
  function assess(input) {
    const tempC = Number(input.tempC), humidity = Number(input.humidity);
    const hasAqi = input.aqi !== undefined && input.aqi !== null && input.aqi !== '';
    const aqi = hasAqi ? Number(input.aqi) : null;
    const errors = [];
    if (!Number.isFinite(tempC) || tempC < -40 || tempC > 60) errors.push('tempC must be a number between -40 and 60');
    if (!Number.isFinite(humidity) || humidity < 0 || humidity > 100) errors.push('humidity must be a percentage between 0 and 100');
    if (hasAqi && (!Number.isFinite(aqi) || aqi < 0 || aqi > 500)) errors.push('aqi must be a number between 0 and 500');
    if (errors.length) return { status: 400, body: { error: 'invalid_input', details: errors } };
    const tf = c2f(tempC), hi = heatIndexF(tf, humidity), band = bandForF(hi.value);
    const body = {
      input: { tempC, humidity, ...(hasAqi ? { aqi } : {}) },
      heatIndex: { c: round(f2c(hi.value)), f: round(hi.value), formula: hi.formula, adjustment: hi.adjustment || null },
      band: { ...band, advice: ADVICE[band.label] },
      heatStressFlag: hi.value >= BAND_MIN_F.danger,
      outOfDomain: tf > 110,
      ...(hasAqi ? { airQuality: aqiBand(aqi) } : {}),
      engine: ENGINE,
      disclaimer: 'Research prototype, not medical advice.',
    };
    return { status: 200, body };
  }
  const api = { assess, heatIndexF, bandForF, aqiBand, c2f, f2c, ENGINE, BAND_MIN_F };
  if (typeof module !== 'undefined' && module.exports) module.exports = api; else root.RakshaEngine = api;
})(typeof self !== 'undefined' ? self : this);

