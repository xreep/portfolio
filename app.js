/* ===== security: Trusted Types default policy (defence in depth for every innerHTML) ===== */
(function(){if(!(window.trustedTypes&&trustedTypes.createPolicy))return;try{trustedTypes.createPolicy('default',{
  createHTML:s=>String(s).replace(/<script[\s\S]*?<\/script\s*>/gi,'').replace(/<(iframe|object|embed|base|meta|link)\b[^>]*>/gi,'').replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi,'').replace(/((?:href|src|xlink:href|action|formaction)\s*=\s*["']?)\s*(?:javascript|vbscript|data:text\/html)[^"'\s>]*/gi,'$1#'),
  createScriptURL:s=>{const u=new URL(s,location.href);if(u.origin===location.origin)return u.href;throw new TypeError('Blocked script URL')},
  createScript:()=>{throw new TypeError('Blocked dynamic script')}})}catch(e){}})();
/* email is assembled at runtime so simple scrapers can't harvest it from the HTML */
const EMAIL=['aditya8251358','gmail.com'].join('@');
document.addEventListener('DOMContentLoaded',()=>{});
const IC={"react":{"t":"React","h":"61DAFB","p":"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},"nodedotjs":{"t":"Node.js","h":"5FA04E","p":"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},"mongodb":{"t":"MongoDB","h":"47A248","p":"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},"javascript":{"t":"JavaScript","h":"F7DF1E","p":"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},"typescript":{"t":"TypeScript","h":"3178C6","p":"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},"html5":{"t":"HTML5","h":"E34F26","p":"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"},"css":{"t":"CSS","h":"8E5BE0","p":"M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"},"expo":{"t":"Expo","h":"F5F2E3","p":"M0 20.084c.043.53.23 1.063.718 1.778.58.849 1.576 1.315 2.303.567.49-.505 5.794-9.776 8.35-13.29a.761.761 0 011.248 0c2.556 3.514 7.86 12.785 8.35 13.29.727.748 1.723.282 2.303-.567.57-.835.728-1.42.728-2.046 0-.426-8.26-15.798-9.092-17.078-.8-1.23-1.044-1.498-2.397-1.542h-1.032c-1.353.044-1.597.311-2.398 1.542C8.267 3.991.33 18.758 0 19.77Z"},"openjdk":{"t":"OpenJDK","h":"E76F00","p":"M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942zM8.685 7.983a3.515 3.515 0 0 0-.145.997c0 1.951 1.6 3.55 3.55 3.55 1.95 0 3.55-1.598 3.55-3.55 0-.329-.046-.648-.132-.951.334.095.64.208.915.336a42.699 42.699 0 0 1 2.042 5.829c.678 2.545 1.01 4.92.846 6.607-.082.844-.29 1.51-.606 1.94-.315.431-.713.651-1.315.651-.593 0-.932-.27-1.673-.61-.741-.338-1.825-.694-3.792-.758-1.974-.064-3.073.293-3.821.669-.375.188-.659.373-.911.5s-.466.2-.752.2c-.53 0-.876-.209-1.16-.64-.285-.43-.474-1.101-.545-1.948-.141-1.693.176-4.069.823-6.614a43.155 43.155 0 0 1 1.934-5.783c.348-.167.749-.31 1.192-.425zm-3.382 4.362a.216.216 0 0 1 .13.031c-.166.56-.323 1.116-.463 1.665a33.849 33.849 0 0 0-.547 2.555 3.9 3.9 0 0 0-.2-.39c-.58-1.012-.914-1.642-1.16-2.08.315-.24 1.679-1.755 2.24-1.781zm13.394.01c.562.027 1.926 1.543 2.24 1.783-.246.438-.58 1.068-1.16 2.08a4.428 4.428 0 0 0-.163.309 32.354 32.354 0 0 0-.562-2.49 40.579 40.579 0 0 0-.482-1.652.216.216 0 0 1 .127-.03z"},"python":{"t":"Python","h":"3776AB","p":"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},"espressif":{"t":"Espressif","h":"E7352C","p":"M12.926 19.324a7.6 7.6 0 00-2.983-6.754 7.44 7.44 0 00-3.828-1.554.697.697 0 01-.606-.731.674.674 0 01.743-.617 8.97 8.97 0 018 9.805 7.828 7.828 0 01-.298 1.542l1.989.56a11.039 11.039 0 001.714-.651 12.159 12.159 0 00.217-2.343A12.57 12.57 0 007.212 6.171a5.53 5.53 0 00-2 0 4.354 4.354 0 00-2.16 1.337 4.274 4.274 0 001.909 6.856 9.896 9.896 0 001.074.195 4.011 4.011 0 013.337 3.954 3.965 3.965 0 01-.64 2.16l1.371.88a10.182 10.182 0 002.057.342 7.52 7.52 0 00.754-2.628m.16 4.73A13.073 13.073 0 01.001 10.983 12.982 12.982 0 013.83 1.737l.743.697a12.067 12.067 0 000 17.141 12.067 12.067 0 0017.141 0l.697.697a12.97 12.97 0 01-9.336 3.726M24 10.993A10.993 10.993 0 0012.949 0c-.389 0-.766 0-1.143.057l-.252.732a18.912 18.912 0 0111.588 11.576l.731-.263c0-.366.069-.732.069-1.143m-1.269 5.165A17.53 17.53 0 007.818 1.27a11.119 11.119 0 00-2.457 1.77v1.635A13.919 13.919 0 0119.268 18.57h1.634a11.713 11.713 0 001.771-2.446M7.92 17.884a1.691 1.691 0 11-1.69-1.691 1.691 1.691 0 011.69 1.691"},"git":{"t":"Git","h":"F03C2E","p":"M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"},"github":{"t":"GitHub","h":"F5F2E3","p":"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},"githubactions":{"t":"GitHub Actions","h":"F5F2E3","p":"M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z"},"leetcode":{"t":"LeetCode","h":"FFA116","p":"M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"},"gmail":{"t":"Gmail","h":"EA4335","p":"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"},"claude":{"t":"Claude","h":"D97757","p":"m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"},"linkedin":{"t":"LinkedIn","h":"0A66C2","p":"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"},"express":{"t":"Express","h":"F5F2E3","p":"M12.262 16.666h1.146l6.975-9.325H19.22zm9.778 1.441v.004l-4.334-5.706-.557.74 4.873 6.682H.945V4.173h9.505l5.026 6.7.574-.772-4.374-5.928h.003l-.719-.945H0v17.544h24zM10.917 8.705a3.8 3.8 0 0 0-1.292-1.183q-.796-.45-1.916-.45c-.746 0-1.37.14-1.906.424a3.76 3.76 0 0 0-1.31 1.12 4.9 4.9 0 0 0-.75 1.581 7.17 7.17 0 0 0 0 3.696c.148.567.402 1.101.75 1.573a3.5 3.5 0 0 0 1.31 1.066q.803.39 1.906.389 1.77 0 2.739-.868.966-.867 1.328-2.457h-1.139q-.271 1.084-.977 1.734-.704.651-1.952.65-.812 0-1.392-.342a3.1 3.1 0 0 1-.957-.869 3.5 3.5 0 0 1-.551-1.182 5 5 0 0 1-.17-1.133 9 9 0 0 0-.015-.286 4.5 4.5 0 0 1 .015-.829c.047-.418.147-.83.296-1.223A3.7 3.7 0 0 1 5.54 9.05a2.9 2.9 0 0 1 .922-.742q.541-.28 1.246-.28c.47 0 .869.093 1.23.28q.541.281.922.742.379.461.587 1.057t.225 1.246H5.625l.004.957h6.182a7.3 7.3 0 0 0-.18-1.924 4.9 4.9 0 0 0-.715-1.68z"},"bootstrap":{"t":"Bootstrap","h":"7952B3","p":"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"},"cloudflare":{"t":"Cloudflare","h":"F38020","p":"M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727"}};
const icFill=k=>{const h=IC[k].h.toUpperCase();return(h==='F5F2E3'||h==='FFFFFF'||h==='000000')?'currentColor':'#'+h};
const si=(k,c)=>`<svg viewBox="0 0 24 24" role="img" aria-label="${IC[k].t}"><path fill="${c||icFill(k)}" d="${IC[k].p}"/></svg>`;

document.querySelectorAll('.socials a').forEach(a=>{a.innerHTML=`<svg viewBox="0 0 24 24"><path d="${IC[a.dataset.i].p}"/></svg>`});
document.querySelectorAll('[data-f]').forEach(i=>{i.innerHTML=`<svg viewBox="0 0 24 24"><path d="${IC[i.dataset.f].p}"/></svg>`});

/* what I do */
const cards=[
 ['Full-Stack Development','var(--purple)','Responsive web and mobile apps with React, React Native, Node.js and Express, wired to REST APIs and MongoDB.','<path d="M8 6 2 12l6 6M16 6l6 6-6 6M14 4l-4 16"/>'],
 ['AI & Automation','var(--teal)','On-device risk scoring, live weather and air-quality data from REST APIs, and AI-assisted development.','<rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 8V5M9 13h.01M15 13h.01M9.5 16h5"/><circle cx="12" cy="4" r="1"/>'],
 ['IoT & Hardware','var(--pink)','Hardware concepts like Raksha Band: a small ESP32-C3 wrist pod with heart-rate, skin-temperature and motion sensors.','<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'],
 ['Design & Branding','var(--orange)','Promotional creatives, brand kits and event posters as Graphics Design Lead for E-Cell, SBU, plus clean UI for everything I ship.','<path d="m4 20 4-1 11-11-3-3L5 16z"/><path d="m14 7 3 3M15 4l5 5"/>']
];
document.getElementById('cards').innerHTML=cards.map(c=>`<div class="card rv"><canvas></canvas><div class="in"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="${c[1]}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${c[3]}</svg><h3 style="color:${c[1]}">${c[0]}</h3><p>${c[2]}</p></div></div>`).join('');

/* skills */
const S=[
 ['Engineering','var(--purple)','Full-stack web and mobile builds with JavaScript, Node.js and React, scoped to ship and demo for real.',['JavaScript','TypeScript','React.js','React Native','Node.js','Express.js','MongoDB','REST APIs','HTML','CSS','Bootstrap']],
 ['AI','var(--gold)','AI-assisted development with Claude and coding agents, and rule-based risk scoring that runs on the device.',['Prompt Engineering','Generative AI','AI-Assisted Development','On-device Risk Scoring']],
 ['Hardware','var(--teal)','Raksha Band, a wrist-wearable concept designed around the XIAO ESP32-C3 and small health sensors.',['ESP32-C3','MAX30101','MAX30205','MPU6050','SHT40','BLE']],
 ['DSA','var(--pink)','LeetCode contest regular who writes Java and loves squeezing a solution down to its shortest form.',['Java','Graphs / Dijkstra','Sparse Tables','Bit Manipulation','DSA','Python']]
];
document.getElementById('srows').innerHTML=S.map((s,i)=>`<div class="srow rv"><div class="nm"><small>0${i+1}</small><h3 style="color:${s[1]}">${s[0]}</h3></div><p>${s[2]}</p><div class="chips">${s[3].map(x=>`<span class="chip">${x}</span>`).join('')}</div></div>`).join('');

const AVATAR="<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"> <defs>  <clipPath id=\"ac\"><circle cx=\"100\" cy=\"100\" r=\"100\"/></clipPath>  <linearGradient id=\"hood\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#8b5cf0\"/><stop offset=\"1\" stop-color=\"#6a3fd6\"/></linearGradient>  <linearGradient id=\"skin\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#c98a5e\"/><stop offset=\"1\" stop-color=\"#b8784d\"/></linearGradient> </defs> <g clip-path=\"url(#ac)\">  <rect width=\"200\" height=\"200\" fill=\"#fbf8e4\"/>  <path d=\"M28 210c4-44 34-64 72-64s68 20 72 64z\" fill=\"url(#hood)\"/>  <path d=\"M78 150l22 22 22-22\" fill=\"none\" stroke=\"#fbf8e4\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>  <circle cx=\"86\" cy=\"176\" r=\"3\" fill=\"#fbf8e4\"/><circle cx=\"114\" cy=\"176\" r=\"3\" fill=\"#fbf8e4\"/>  <rect x=\"86\" y=\"122\" width=\"28\" height=\"30\" rx=\"10\" fill=\"#b0714a\"/>  <ellipse cx=\"57\" cy=\"98\" rx=\"9\" ry=\"12\" fill=\"#b8784d\"/>  <ellipse cx=\"143\" cy=\"98\" rx=\"9\" ry=\"12\" fill=\"#b8784d\"/>  <rect x=\"56\" y=\"48\" width=\"88\" height=\"94\" rx=\"42\" fill=\"url(#skin)\"/>  <path d=\"M52 92c-6-34 12-58 46-60 26-2 46 8 52 26 4 12 2 24-2 34-3-14-8-22-16-28-14 6-36 8-58 4-10 6-16 14-22 24z\" fill=\"#1c1715\"/>  <path d=\"M70 46c10-16 40-20 58-8-10-2-22 0-30 4\" fill=\"#2a221e\"/>  <rect x=\"64\" y=\"86\" width=\"30\" height=\"22\" rx=\"8\" fill=\"#ffffff22\" stroke=\"#141516\" stroke-width=\"3.5\"/>  <rect x=\"106\" y=\"86\" width=\"30\" height=\"22\" rx=\"8\" fill=\"#ffffff22\" stroke=\"#141516\" stroke-width=\"3.5\"/>  <path d=\"M94 95h12\" stroke=\"#141516\" stroke-width=\"3.5\"/>  <circle cx=\"80\" cy=\"97\" r=\"4.2\" fill=\"#141516\"/><circle cx=\"121\" cy=\"97\" r=\"4.2\" fill=\"#141516\"/>  <circle cx=\"81.5\" cy=\"95.5\" r=\"1.3\" fill=\"#fff\"/><circle cx=\"122.5\" cy=\"95.5\" r=\"1.3\" fill=\"#fff\"/>  <path d=\"M70 80c6-4 14-4 20-1M110 79c6-3 14-3 20 1\" stroke=\"#1c1715\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>  <path d=\"M98 104c-2 6-3 9 2 10\" stroke=\"#9a5e3a\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\"/>  <path d=\"M86 122c8 7 20 7 28 0\" stroke=\"#5a2e1c\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>  <circle cx=\"70\" cy=\"114\" r=\"6\" fill=\"#e0866a\" opacity=\".35\"/><circle cx=\"130\" cy=\"114\" r=\"6\" fill=\"#e0866a\" opacity=\".35\"/> </g></svg>";
const SHOTS={"dash": "assets/raksha-dashboard.webp", "risk": "assets/raksha-risk-sos.webp", "env": "assets/raksha-preparedness.webp"};
const ARW='<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const CASES=[
 {s:'raksha',t:'Raksha — Offline Health Guardian',tag:'Mobile + Hardware Case Study · Health Tech',k:'6',kl:'Risk Categories, On-device',
  ds:'An Android app that reads vitals on the phone, weighs them against local weather and air quality, and warns before it becomes an emergency. No account, no server, and no vitals leave the device.',
  st:[['On-device','Risk scoring'],['7-day','Local history'],['1,457','Tests passing']],
  m:['Team 404hunt_06','SIH 2026 · Qualcomm PS 26181','Research prototype'],
  stats:[['6','Rule-based risk categories'],['30 s','SOS cancel window'],['1,457','Tests across 63 suites'],['0','Accounts or servers needed']],
  ov:['Raksha is our answer to Smart India Hackathon problem statement 26181 from Qualcomm: a secure, AI-powered personal health companion for disaster resilience in India.','It started as a 12-hour React prototype and grew into a React Native app. It now reads heart rate and SpO₂ from Health Connect and has been validated on an Android 15 device.'],
  pr:['In a heat wave, 110 bpm on a cool morning and 110 bpm at a heat index of 40 °C mean very different things. The people most at risk are often elderly, alone and offline, and most health apps assume a working network and a cloud account. Raksha combines vitals and local conditions on the phone itself, so it keeps working when the network does not.'],
  built:['On-device rule engine with six categories: heat stress (NOAA heat index), respiratory, cardiovascular, falls, dehydration and fatigue. Each returns a level, a plain-language recommendation and a 0–100 score.','Live temperature, humidity and air quality for a coarse location, cached so the last reading still informs the score offline.','Heat-index bands, an AQI advisory, and static flood and cyclone preparedness guidance.','Emergency SOS: a critical reading starts a 30-second cancel window, then sends vitals and a location link through a Cloudflare Worker relay to Telegram, or opens a pre-filled SMS when there is no data.','Seven days of local history with 24-hour and 7-day trends, erasable with one control.','Privacy by design: no account, no server, no analytics.'],
  layers:[['XIAO ESP32-C3','Microcontroller and BLE radio'],['MAX30101 + MAX30205','Heart rate and skin temperature on the skin side'],['MPU6050','Motion and fall detection'],['SHT40','Air temperature and humidity under a vent on top']],
  flow:['Critical reading','30 s cancel window','Relay over data → Telegram','No data → one-tap SMS'],
  stack:['React Native 0.86','Expo SDK 57','TypeScript','Expo Router','Health Connect','expo-sqlite','Cloudflare Workers','Jest','Vitest'],
  nx:'Done and validated on one device: Health Connect ingestion, the rule engine on live data, AQI advisory, notifications, SMS fallback and the Telegram relay. Next on the roadmap: background sensing, Raksha Band firmware and BLE, encrypted storage, a caregiver role, seven-day baselines and a Hindi interface. Raksha is a research prototype, not a medical device.',l:'https://github.com/xreep/raksha'}
];
const PROJ=[
 {n:'Raksha',y:'2026',st:'React Native, Expo, TypeScript, Health Connect, Cloudflare Workers',c:'var(--teal)',tg:'Offline health guardian for heat waves, floods and smog',ic:['expo','react','typescript'],l:'https://github.com/xreep/raksha',
  b:['Android app built for SIH 2026 (Qualcomm PS 26181) with team 404hunt_06.','Reads heart rate and SpO₂ from Health Connect and scores six risk categories on the phone, including heat stress from the NOAA heat index.','Live weather and air-quality context, cached so it still works offline.','SOS with a 30-second cancel window, then a Cloudflare Worker relay to Telegram, or a pre-filled SMS when there is no data.','Validated on an Android 15 device; 1,457 tests across 63 suites run in CI.','Raksha Band, a planned wrist wearable, is shown below as an interactive 3D concept model.']},
];
const TL=[
 ['Oct 2026<br>— Now','GDG Group Member','Google Developer Group on Campus – SBU','Part-time · Ranchi, Jharkhand · On-site',['Member of the Google Developer Group on Campus at Sarala Birla University.'],['Community','Developer Events']],
 ['Sep 2026<br>— Now','Graphics Design Lead','E-Cell, SBU','Part-time · E-Cell, Institution\'s Innovation Council · Sarala Birla University, Ranchi · On-site',['Leading graphic design for the E-Cell: visual communication, promotional creatives and branding, under the theme "From Ideas to Impact".','Designed the E-Cell logo concepts, brand kit and the Grand Opening event poster for the 18 September 2026 inauguration.'],['Graphic Design','Team Leadership','Community Outreach','Communication']],
 ['May 2026<br>— Now','Full-Stack Web Development Intern','Unified Mentor','Unified Mentor Private Limited · Internship · Gurugram, Haryana · Remote',['Built responsive web and mobile interfaces with React and React Native.','Integrated third-party REST APIs (weather, air quality) for live data features.','Implemented client-side logic for risk scoring, alerts and data visualization.','Designed privacy-focused features: on-device processing and user consent controls.','Used Git and GitHub for version control and code reviews.'],['React','React Native','JavaScript','Node.js','Express.js','MongoDB','REST APIs','Git & GitHub']],
 ['2026','Hardware Track','SIH 2026','Team 404hunt_06 · Qualcomm PS 26181',['Building Raksha, an offline health guardian app with on-device risk scoring and an SOS relay, plus a concept wrist band.','Pitched through the SIH idea presentation, backed by a 100-second demo film.'],['React Native','Hardware','Health Tech']],
 ['Sep 2024<br>— Now','Bachelor of Computer Applications','Sarala Birla University','SBU, Ranchi · Grade: 7.5 CGPA',['Studying computer applications while shipping projects, practising DSA in LeetCode contests and taking part in campus tech communities.'],['BCA','DSA','Data Visualization']]
];
const CERTS=[
 {t:'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',by:'Oracle',d:'Aug 2025',id:'322001347OCI25AICFA',img:'oracle-oci-ai-foundations',feat:1},
 {t:'CCNA: Introduction to Networks',by:'Cisco Networking Academy',d:'Apr 2026',id:'1dd6d81a-9961-4d18-943b-9d20002080c2',img:'cisco-ccna-itn',grp:'cisco'},
 {t:'CCNA: Enterprise Networking, Security, and Automation',by:'Cisco Networking Academy',d:'Jun 2026',id:'bdae32ec-0261-470a-a5e4-1855751b8680',img:'cisco-ccna-ensa',grp:'cisco'},
 {t:'Python Essentials 1',by:'Cisco Networking Academy',d:'Jun 2026',note:'with OpenEDG Python Institute',id:'a56b6d66-858f-4f41-836e-ba79b712cffb',img:'cisco-python-1',grp:'cisco'},
 {t:'Python Essentials 2',by:'Cisco Networking Academy',d:'Jun 2026',note:'with OpenEDG Python Institute',id:'84006773-0f42-43d5-a055-12deada7b8bb',img:'cisco-python-2',grp:'cisco'},
 {t:'Introduction to Modern AI',by:'Cisco Networking Academy',d:'Jun 2026',id:'a565f85b-443f-496d-ab84-7ddca4bd4e15',img:'cisco-modern-ai',grp:'cisco'},
 {t:'Apply AI: Analyze Customer Reviews',by:'Cisco Networking Academy',d:'Jun 2026',id:'1193ecac-d7a8-49c3-947b-36d601154246',img:'cisco-apply-ai',grp:'cisco'},
 {t:'Data Analytics Essentials',by:'Cisco Networking Academy',d:'Jun 2026',id:'3a0d05b2-0add-4528-a138-dca2f6ddbad2',img:'cisco-data-analytics',grp:'cisco'},
 {t:'Introduction to Data Science',by:'Cisco Networking Academy',d:'Jun 2026',id:'df5e72cb-0f17-4f7b-9d0d-cf6d3fe61a04',img:'cisco-data-science',grp:'cisco'},
 {t:'Getting Started with Generative AI',by:'IBM SkillsBuild'},
 {t:'IIRS Outreach Programme – Merit Certificate',by:'Indian Institute of Remote Sensing (IIRS), ISRO'},
 {t:'HTML and CSS Certifications',by:'Dilwado.com'}
];
const TK=[
 ['Web Development','var(--teal)',['JavaScript','TypeScript','HTML','CSS','Bootstrap','React.js','Node.js','Express.js','MongoDB','REST APIs'],1],
 ['Mobile','var(--purple)',['React Native','Expo','Expo Router','Health Connect','SQLite'],0],
 ['Tools','var(--gold)',['Git','GitHub','Version Control','Jest','Cloudflare Workers'],0],
 ['Languages','var(--blue)',['JavaScript','TypeScript','Java','Python'],0],
 ['Networking & Data','var(--teal)',['Networking Fundamentals','CCNA Coursework','Data Analytics','Data Science Basics'],0],
 ['AI','var(--pink)',['OCI AI Foundations','Generative AI','Prompt Engineering','AI-Assisted Development'],0],
 ['Design','var(--orange)',['Graphic Design','Logo Design','Brand Kits','Posters','Canva'],0],
 ['Interpersonal','var(--green)',['Team Leadership','Leadership','Communication','Community Outreach','Problem Solving','Strategy'],0]
];
const RK_SCREENS=`<div class="shot rk"><div class="chrome"><i></i><i></i><i></i><em>github.com/xreep/raksha</em></div><div class="stage"><div class="orb"></div><figure class="phone"><figcaption>Dashboard</figcaption><img src="${SHOTS.dash}" alt="Raksha dashboard showing heart rate, SpO2 and skin temperature" loading="lazy"></figure><figure class="phone mid"><figcaption>Risk overview + SOS</figcaption><img src="${SHOTS.risk}" alt="Raksha risk cards and Emergency SOS button" loading="lazy"></figure><figure class="phone"><figcaption>Preparedness guides</figcaption><img src="${SHOTS.env}" alt="Raksha flood and cyclone preparedness guides" loading="lazy"></figure></div></div><p class="simnote">Screens captured from the Raksha app build. Vitals are simulated for demonstration.</p>`;
const RK_BAND=`<div class="band"><div class="bh"><b>Raksha Band · interactive 3D model</b><span>Drag to turn · tap a part · try a scenario</span></div><div class="ld" data-band>Loading 3D model…</div></div>`;
const chips=a=>`<div class="chips">${a.map(x=>`<span class="chip">${x}</span>`).join('')}</div>`;
document.getElementById('ccards').innerHTML=CASES.map(c=>`<a class="cc rv" href="#/case/${c.s}"><div class="top"><span class="tagp">${c.tag}</span><div class="kk"><b>${c.k}</b><small>${c.kl}</small></div></div><h2>${c.t}</h2><p class="ds">${c.ds}</p><div class="stats">${c.st.map(s=>`<div><b>${s[0]}</b><small>${s[1]}</small></div>`).join('')}</div><div class="bot"><div class="meta3">${c.m.map(x=>`<span>${x}</span>`).join('')}</div><span class="readm">Read case study ${ARW}</span></div></a>`).join('');
const PROJ_SHOW=PROJ.filter(p=>p.n==='Raksha');
document.getElementById('pcards').innerHTML=PROJ_SHOW.map(p=>`<article class="pc rv">${p.n==='Raksha'?RK_SCREENS:`<div class="shot"><div class="chrome"><i></i><i></i><i></i><em>${p.l.replace(/^https?:\/\//,'').replace(/^mailto:.*/,'xreep / design')}</em></div><div class="canvas"><div class="orb" style="background:${p.c}"></div><div><div class="ttl" style="color:${p.c}">${p.n}</div><div class="tg">${p.tg}</div><div class="icons">${p.ic.map(k=>si(k)).join('')}</div></div></div></div>`}<div class="hd2"><div><h2>${p.n}</h2><div class="st">${p.st}</div></div><span class="yr">${p.y}</span></div><ul>${p.b.map(x=>`<li>${x}</li>`).join('')}</ul>${p.n==='Raksha'?RK_BAND+'<div class="labcta"><a class="btn" href="#/lab">Try Raksha\'s engine live <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>':''}<a class="visit" href="${p.l}" ${p.l.startsWith('http')?'target="_blank" rel="noopener"':''}>${p.l.startsWith('mailto')?'Ask for files':'Visit'}</a></article>`).join('');
document.getElementById('tl').innerHTML=TL.map(t=>`<div class="ti rv"><div class="yr">${t[0]}</div><div><h3>${t[1]} <span>· ${t[2]}</span></h3><div class="mt">${t[3]}</div>${t[4].map(x=>`<p>${x}</p>`).join('')}${chips(t[5])}</div></div>`).join('');
document.getElementById('tkg').innerHTML=TK.map(t=>`<div class="rv${t[3]?' wide':''}"><h4 style="color:${t[1]}">${t[0]}</h4>${chips(t[2])}</div>`).join('');
function caseHTML(c){const i=CASES.indexOf(c),n=CASES[(i+1)%CASES.length];
 const sec=(h,b)=>`<div class="cds rv"><h3>${h}</h3><div>${b}</div></div>`;
 return `<div class="ph" style="padding-bottom:0"><a class="back" href="#/case-studies"><svg viewBox="0 0 24 24"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>All case studies</a><div><span class="tagp">${c.tag}</span></div><h1 class="rv" style="font-size:clamp(38px,5.4vw,72px);margin-top:18px;font-weight:600">${c.t}</h1><p class="intro2 rv" style="margin-top:18px">${c.ds}</p><div class="meta3" style="margin:22px 0 30px">${c.m.map(x=>`<span>${x}</span>`).join('')}</div></div>
 <div class="cd-stats rv">${c.stats.map(s=>`<div><b>${s[0]}</b><small>${s[1]}</small></div>`).join('')}</div>
 ${sec('Overview',c.ov.map(x=>`<p>${x}</p>`).join(''))}
 ${sec('The problem',c.pr.map(x=>`<p>${x}</p>`).join(''))}
 ${sec('What I built',`<ul>${c.built.map(x=>`<li>${x}</li>`).join('')}</ul>`)}
 ${c.s==='raksha'?sec('App screens',RK_SCREENS)+sec('Raksha Band',RK_BAND)+sec('Live API','<p>The heat-stress engine from the app runs as a public endpoint. Send it real conditions and read the JSON it returns.</p><a class="btn" href="#/lab">Open the API Lab <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>'):''}
 ${c.layers?sec(c.s==='raksha'?'Band hardware (planned)':'Architecture',`<div class="layers">${c.layers.map(l=>`<div class="layer"><b>${l[0]}</b><span>${l[1]}</span></div>`).join('')}</div>`):''}
 ${c.flow?sec('How SOS works',`<div class="flow">${c.flow.map(x=>`<span class="chip">${x}</span>`).join('<i>→</i>')}</div>`):''}
 ${sec('Tech stack',chips(c.stack).replace('class="chips"','class="chips" style="justify-content:flex-start"'))}
 ${sec('Status',`<p>${c.nx}</p><a class="btn" style="margin-top:10px" href="${c.l}" target="_blank" rel="noopener">View on GitHub ${ARW}</a>`)}
 ${CASES.length>1?`<a class="nextc" href="#/case/${n.s}"><div><small>Next case study</small><b>${n.t}</b></div><span class="btn">${ARW}</span></a>`:`<a class="nextc" href="#/projects"><div><small>See it in action</small><b>Raksha screens and the 3D band</b></div><span class="btn">${ARW}</span></a>`}`}

/* band 3d loader */
const bio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const f=document.createElement('iframe');f.title='Raksha Band interactive 3D model';f.src='assets/band-3d.html';e.target.replaceWith(f);bio.unobserve(e.target)}}),{rootMargin:'200px'});
function watchBand(root){root.querySelectorAll('[data-band]').forEach(el=>bio.observe(el))}
watchBand(document);

/* home lists */
document.getElementById('cases').innerHTML=CASES.map(c=>`<div class="row rv"><a href="#/case/${c.s}"><div><div class="t">${c.t}</div><div class="m">${c.m.join(' · ')}</div></div><div class="r"><div class="k">${c.k}</div><div class="kl">${c.kl}</div></div></a></div>`).join('');
document.getElementById('plist').innerHTML=`<a class="homeshot rv" href="#/projects" aria-label="See Raksha screens and the 3D band">${RK_SCREENS}</a>`;
/* tech marquee */
const T=['javascript','typescript','react','nodedotjs','express','mongodb','html5','css','bootstrap','expo','python','openjdk','git','github','githubactions','cloudflare','espressif','claude'];
const one=T.map(k=>`<span title="${IC[k].t}">${si(k)}</span>`).join('');
document.getElementById('track').innerHTML=one+one.replace(/role="img"/g,'aria-hidden="true"');

/* dot grid canvases */
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const cvs=[...document.querySelectorAll('.card canvas')];
const dots=cvs.map(()=>[]);
function sizeC(){cvs.forEach((c,i)=>{const r=c.getBoundingClientRect(),d=devicePixelRatio||1;c.width=r.width*d;c.height=r.height*d;const a=[];const gx=Math.max(8,Math.floor(r.width/18)),gy=6;for(let y=0;y<gy;y++)for(let x=0;x<gx;x++)a.push({x:(x+.5)*r.width/gx*d,y:(y*26+30)*d,p:Math.random()*6.28,lit:Math.random()<.08});dots[i]=a})}
let cardsOn=true;try{new IntersectionObserver(e=>{cardsOn=e[0].isIntersecting}).observe(document.getElementById('cards'))}catch(e){}
function draw(t){if(!cardsOn||document.hidden||!document.getElementById('p-home').classList.contains('show')){if(!reduce)requestAnimationFrame(draw);return}const col=getComputedStyle(document.documentElement).getPropertyValue('--purple').trim();const dim=getComputedStyle(document.documentElement).getPropertyValue('--dim').trim();cvs.forEach((c,i)=>{const g=c.getContext('2d');g.clearRect(0,0,c.width,c.height);const d=devicePixelRatio||1;dots[i].forEach(o=>{if(o.lit){const a=.4+.6*Math.abs(Math.sin(t/900+o.p));g.globalAlpha=a;g.fillStyle=col;g.shadowColor=col;g.shadowBlur=8*d;g.beginPath();g.arc(o.x,o.y,1.6*d,0,6.28);g.fill();g.shadowBlur=0}else{g.globalAlpha=.55;g.fillStyle=dim;g.fillRect(o.x,o.y,1*d,1*d)}});g.globalAlpha=1});if(Math.random()<.02){const L=dots[Math.floor(Math.random()*dots.length)];if(L.length){L[Math.floor(Math.random()*L.length)].lit^=1}}if(!reduce)requestAnimationFrame(draw)}
sizeC();addEventListener('resize',sizeC);requestAnimationFrame(draw);
try{const mq=document.querySelector('.marq');new IntersectionObserver(e=>mq.classList.toggle('paused',!e[0].isIntersecting)).observe(mq)}catch(e){}

/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:0});
function observe(root){root.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el))}

/* router */
const pages={home:'p-home',cases:'p-cases',case:'p-case',projects:'p-projects',about:'p-about',play:'p-play',lab:'p-lab',changelog:'p-changelog'};
const titles={home:'Aditya Raj — Full-Stack Developer',cases:'Case Studies — Aditya Raj',projects:'My Projects — Aditya Raj',about:'About Aditya Raj — Full-Stack Developer',play:'Playground — Aditya Raj',lab:'API Lab — Aditya Raj',changelog:'Changelog — Aditya Raj'};
const navs=[...document.querySelectorAll('nav.main a')];
function route(){
  const h=location.hash;
  if(h&&!h.startsWith('#/'))return; /* in-page anchors like #contact */
  const parts=h.replace(/^#\/?/,'').split('/');
  let key={'':'home','case-studies':'cases','projects':'projects','about':'about','case':'case','play':'play','lab':'lab','changelog':'changelog'}[parts[0]]||'home';
  if(key==='case'){const c=CASES.find(x=>x.s===parts[1]);if(!c){key='cases'}else{document.getElementById('casebody').innerHTML=caseHTML(c);document.title=c.t.split(' — ')[0]+' Case Study — Aditya Raj'}}
  Object.entries(pages).forEach(([k,id])=>document.getElementById(id).classList.toggle('show',k===key));
  if(key!=='case')document.title=titles[key];
  const navKey=key==='case'?'cases':key==='lab'?'projects':key;
  navs.forEach(a=>a.classList.toggle('on',a.dataset.s===navKey));
  window.scrollTo(0,0);
  observe(document.getElementById(pages[key]));
  if(key==='home')sizeC();
  setTimeout(()=>typeof sweep==='function'&&sweep(),1000);
  watchBand(document.getElementById(pages[key]));
}
document.getElementById('smav').innerHTML=AVATAR;
addEventListener('hashchange',route);route();observe(document);

/* scroll progress */
const prog=document.getElementById('prog');
let sweepT;function sweep(){document.querySelectorAll('.page.show .rv:not(.in)').forEach(el=>{if(el.getBoundingClientRect().top<innerHeight){el.classList.add('in');io.unobserve(el)}})}
function onScroll(){clearTimeout(sweepT);sweepT=setTimeout(sweep,150);const h=document.documentElement.scrollHeight-innerHeight;const p=h>0?scrollY/h:0;prog.style.transform=`translateY(${p*(innerHeight-150)}px)`}
addEventListener('scroll',onScroll,{passive:true});onScroll();

/* ask about me: API (Vercel) -> claude.ai sample -> local profile answers */
(function(){
const $=id=>document.getElementById(id);
const fab=$('askFab'),panel=$('askPanel'),out=$('askOut'),sug=$('askSug'),form=$('askForm'),qi=$('askQ'),mode=$('askMode');
if(!fab)return;
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
let KN=null,busy=false,asked=new Set(),sampleP=null;
$('askAv').innerHTML=AVATAR;
async function kn(){if(KN)return KN;if(window.__KN)return KN=window.__KN;try{KN=await (await fetch('knowledge.json',{cache:'no-cache'})).json()}catch(e){KN={faq:[],suggested:[],fallback:'I could not load Aditya\'s profile. You can email him at '+EMAIL+'.'}}return KN}
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function fmt(s){
  const h=esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>')
    .replace(/([\w.+-]+@[\w-]+\.[\w.]+[a-z])/gi,'<a href="mailto:$1">$1</a>')
    .replace(/(^|[\s(])((?:github\.com|linkedin\.com|leetcode\.com)\/[\w\/.-]*[\w\/])/gi,'$1<a href="https://$2" target="_blank" rel="noopener">$2</a>');
  let html='',list=false;
  for(const l of h.split('\n')){const m=l.match(/^\s*(?:[-•*]|\d+\.)\s+(.*)/);
    if(m){if(!list){html+='<ul>';list=true}html+='<li>'+m[1]+'</li>'}
    else{if(list){html+='</ul>';list=false}if(l.trim())html+='<p>'+l+'</p>'}}
  return list?html+'</ul>':html}
function local(q,K){const s=' '+q.toLowerCase()+' ';let best=null,score=0;
  for(const f of K.faq){let sc=0;for(const k of f.k)if(s.includes(k))sc+=k.length>4?2:1;if(sc>score){score=sc;best=f}}
  if(!score)return K.fallback;
  if(best.id==='skills'){const stop=new Set('does he know have any experience with his what skills skill stack tech technologies technology use uses using used is the a an in of and or can aditya work works worked languages language frameworks framework tools tool good at how about which do you tell me familiar knows does'.split(' '));
    const prof=K.profile.toLowerCase();const miss=(q.toLowerCase().match(/[a-z][a-z.+#-]{2,}/g)||[]).filter(w=>!stop.has(w)&&!prof.includes(w));
    if(miss.length)return 'I don\'t see '+miss.slice(0,2).join(' or ')+' in his profile. '+best.a}
  return best.a}
async function viaApi(q){if(location.protocol==='file:')return null;
  try{const c=new AbortController(),t=setTimeout(()=>c.abort(),20000);
    const r=await fetch('/api/ask',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({q}),signal:c.signal});
    clearTimeout(t);if(!r.ok)return null;const ct=r.headers.get('content-type')||'';if(!ct.includes('json'))return null;
    const j=await r.json();return typeof j.answer==='string'&&j.answer.trim()?j.answer.trim():null}catch(e){return null}}
async function viaSample(q,K,onText){if(!(window.claude&&typeof window.claude.use==='function'))return null;
  try{sampleP=sampleP||window.claude.use('sample');const s=await sampleP;if(!s)return null;
    const r=await s(K.system+'\n\n<profile>\n'+K.profile+'\n</profile>\n\nVisitor question: '+q,{cache:false,modelTier:'quick',onText:({text})=>onText(text)});
    return r&&r.text?r.text.trim():null}catch(e){return null}}
async function typeOut(el,text){if(RM){el.innerHTML=fmt(text);return}
  for(let i=0;i<=text.length;i+=4){el.textContent=text.slice(0,i);out.scrollTop=out.scrollHeight;await new Promise(r=>requestAnimationFrame(r))}
  el.innerHTML=fmt(text)}
function chips(K){const list=K.suggested.filter(x=>!asked.has(x)).slice(0,3);
  sug.innerHTML='';list.forEach(t=>{const b=document.createElement('button');b.type='button';b.textContent=t;b.onclick=()=>ask(t);sug.appendChild(b)})}
async function ask(q){q=q.trim().slice(0,300);if(!q||busy)return;busy=true;asked.add(q);
  const K=await kn();qi.value='';form.querySelector('button').disabled=true;sug.innerHTML='';
  out.innerHTML='<p class="ask-q"></p><div class="ask-a"><span class="ask-wait"><i></i><i></i><i></i></span></div>';
  out.querySelector('.ask-q').textContent=q;const a=out.querySelector('.ask-a');
  let text=await viaApi(q),src='ai';
  if(!text){let streamed=false;text=await viaSample(q,K,t=>{streamed=true;a.innerHTML=fmt(t)});if(text&&streamed){a.innerHTML=fmt(text)}else if(text){await typeOut(a,text)}}
  else await typeOut(a,text);
  if(!text){text=local(q,K);src='profile';await typeOut(a,text)}
  mode.textContent=src==='ai'?'AI answers, grounded in his profile':'Answers come only from his profile';
  busy=false;form.querySelector('button').disabled=false;chips(K)}
function open(focus){panel.hidden=false;fab.setAttribute('aria-expanded','true');kn().then(chips);if(focus!==false)setTimeout(()=>qi.focus(),50)}
function close(){panel.hidden=true;fab.setAttribute('aria-expanded','false');fab.focus()}
fab.addEventListener('click',()=>open());
try{const hf=document.querySelector('.hfoot');new IntersectionObserver(e=>document.getElementById('ask').classList.toggle('hide-fab',e[0].isIntersecting&&document.getElementById('p-home').classList.contains('show'))).observe(hf);addEventListener('hashchange',()=>{if(!document.getElementById('p-home').classList.contains('show'))document.getElementById('ask').classList.remove('hide-fab')})}catch(e){}
$('askClose').addEventListener('click',close);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)close()});
form.addEventListener('submit',e=>{e.preventDefault();ask(qi.value)});
document.addEventListener('click',e=>{const t=e.target.closest('[data-ask]');if(t){e.preventDefault();open()}});
})();

/* ===== site features: theme, copy email, résumé, transitions, certificates ===== */
(function(){
const root=document.documentElement,RMQ=matchMedia('(prefers-reduced-motion: reduce)');
const $=id=>document.getElementById(id);
/* toast */
let tt;function toast(msg){const t=$('toast');if(!t)return;t.textContent=msg;t.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('on'),2200)}
window.siteToast=toast;
/* theme toggle */
const sysDark=matchMedia('(prefers-color-scheme: dark)');
const cur=()=>root.dataset.theme||(sysDark.matches?'dark':'light');
function paintTheme(){const t=cur();const b=$('themeBtn');if(b){b.setAttribute('aria-label',t==='dark'?'Switch to light theme':'Switch to dark theme');b.title=b.getAttribute('aria-label')}
  const m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==='dark'?'#0e1011':'#f5f3ea'}
const tb=$('themeBtn');
if(tb)tb.addEventListener('click',()=>{const next=cur()==='dark'?'light':'dark';
  root.classList.add('theming');root.dataset.theme=next;try{localStorage.setItem('xr_theme',next)}catch(e){}
  paintTheme();setTimeout(()=>root.classList.remove('theming'),400)});
sysDark.addEventListener('change',paintTheme);paintTheme();
/* copy email */
async function copy(text){try{await navigator.clipboard.writeText(text);return true}catch(e){}
  try{const a=document.createElement('textarea');a.value=text;a.setAttribute('readonly','');a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();const ok=document.execCommand('copy');a.remove();return ok}catch(e){return false}}
document.addEventListener('click',async e=>{const b=e.target.closest('[data-copy]');if(!b)return;e.preventDefault();
  if(await copy(b.dataset.copy))toast('Email copied: '+b.dataset.copy);else location.href='mailto:'+b.dataset.copy});
/* résumé download */
const RES_NAME='Aditya_Raj_Resume.pdf';
document.addEventListener('click',async e=>{const a=e.target.closest('[data-resume]');if(!a||!window.__RESUME)return;e.preventDefault();
  const bytes=Uint8Array.from(atob(window.__RESUME),c=>c.charCodeAt(0));const blob=new Blob([bytes],{type:'application/pdf'});
  try{if(window.claude&&typeof window.claude.use==='function'){const dl=await window.claude.use('downloads');if(dl){await dl.save({filename:RES_NAME,data:blob});return}}}
  catch(err){if(err&&(err.code==='declined'||err.code==='rate_limited'))return}
  const u=URL.createObjectURL(blob),x=document.createElement('a');x.href=u;x.download=RES_NAME;document.body.appendChild(x);x.click();x.remove();setTimeout(()=>URL.revokeObjectURL(u),4000)});
/* smooth page transitions (wraps the router) */
if(typeof route==='function'){removeEventListener('hashchange',route);
  addEventListener('hashchange',()=>{const h=location.hash;if(h&&!h.startsWith('#/'))return;
    if(RMQ.matches)return route();
    if(document.startViewTransition&&!document.hidden){try{const vt=document.startViewTransition(()=>route());['ready','finished','updateCallbackDone'].forEach(k=>vt[k]&&vt[k].catch(()=>{}))}catch(e){route()}}
    else{route();const p=document.querySelector('.page.show');if(p){p.classList.remove('pg-in');void p.offsetWidth;p.classList.add('pg-in')}}})}
/* certificates */
const certSrc=k=>(window.__CERTIMG&&window.__CERTIMG[k])||('assets/certs/'+k+'.webp');
const dlg=$('certDlg');
function openCert(c){if(!dlg)return;$('certDlgImg').src=certSrc(c.img);$('certDlgImg').alt='Certificate: '+c.t;$('certDlgT').textContent=c.t;
  $('certDlgM').textContent=c.by+' · '+c.d+(c.id?' · ID '+c.id:'');if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','')}
if(dlg){$('certDlgX').onclick=()=>dlg.close();dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()})}
const VIEW=(i)=>`<button class="cview" type="button" data-cert="${i}">View</button>`;
const box=$('certs');
if(box&&typeof CERTS!=='undefined'){
  const feat=CERTS.map((c,i)=>[c,i]).filter(([c])=>c.feat),cis=CERTS.map((c,i)=>[c,i]).filter(([c])=>c.grp==='cisco'),oth=CERTS.map((c,i)=>[c,i]).filter(([c])=>!c.feat&&!c.grp);
  box.innerHTML=feat.map(([c,i])=>`<div class="cfeat rv"><div class="cbadge"><svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5"/></svg></div><div class="ctxt"><span class="ctag">Certification</span><b>${c.t}</b><span class="cmeta">${c.by} · ${c.d}</span><span class="cid">Credential ID ${c.id}</span></div>${VIEW(i)}</div>`).join('')
   +`<div class="cgroup rv"><h4>Cisco Networking Academy</h4><small>Course completions through Sarala Birla University, 2026</small>${cis.map(([c,i])=>`<div class="crow"><div class="ctxt"><b>${c.t}</b><span class="cmeta">${c.d}${c.note?' · '+c.note:''}</span></div>${VIEW(i)}</div>`).join('')}</div>`
   +oth.map(([c])=>`<div class="cmini rv"><b>${c.t}</b><span class="cmeta">${c.by}</span></div>`).join('');
  box.addEventListener('click',e=>{const b=e.target.closest('[data-cert]');if(b)openCert(CERTS[+b.dataset.cert])});
}
})();

/* ===== Playground: Stack Snake + Bug Hunt ===== */
(function(){
const $=id=>document.getElementById(id);
const cv=$('gcv');if(!cv)return;
const ctx=cv.getContext('2d'),over=$('gover'),startBtn=$('gstart');
const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const store={get(k){try{return +localStorage.getItem(k)||0}catch(e){return 0}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const DIRS={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]};
let game='snake',G=null,raf=0,active=false;
function size(){const w=Math.min(600,cv.parentElement.clientWidth||600),d=Math.min(devicePixelRatio||1,2);const ar=game==='bugs'?15/19:(GAMES[game]&&GAMES[game].ar)||1;
  cv.width=Math.round(w*d);cv.height=Math.round(w*ar*d);cv.style.aspectRatio=(1/ar).toFixed(4)}
function setStats(){if(!G)return;$('gscore').textContent=G.score;$('gbest').textContent=store.get('xr_best_'+game);
  $('glivesw').hidden=game==='snake'||game==='dash';$('gsl1').textContent='Score';$('gsl2').textContent='Best';$('gsl3').textContent=game==='whack'?'Time':'Lives';if(game==='breakout')$('glives').textContent=G.lives;
  if(game==='bugs')$('glives').textContent=G.lives;if(game==='whack')$('glives').textContent=G.left==null?30:G.left}
function stat(a,b,c,la,lb,lc){$('gscore').textContent=a;$('gbest').textContent=b;$('gsl1').textContent=la;$('gsl2').textContent=lb;$('glivesw').hidden=c==null;if(c!=null){$('glives').textContent=c;$('gsl3').textContent=lc}}
let overlayAt=0;function overlay(title,msg,label){overlayAt=performance.now();$('gtitle').textContent=title;$('gmsg').textContent=msg;startBtn.textContent=label;over.hidden=false}
function stop(){cancelAnimationFrame(raf);raf=0}
function loop(t){raf=requestAnimationFrame(loop);try{if(!G||G.paused||G.done)return draw(t);G.tick(t);draw(t)}catch(err){if(G&&!G.done){G.done=true;overlay('Something glitched','Sorry about that. Press Enter or tap to start a fresh round.','Play again')}if(window.console)console.warn('game error',err)}}
function draw(t){if(G)G.draw(t)}
/* ---------- Stack Snake ---------- */
function Snake(){
  const N=20,FOODS=['javascript','react','nodedotjs','typescript','mongodb','express','html5','css','python','git'];
  const s={score:0,paused:false,done:false,dir:'right',q:[],body:[{x:6,y:10},{x:5,y:10},{x:4,y:10}],speed:150,last:0,food:null,eaten:0,bonus:null,pops:[]};
  const occ=p=>s.body.some(b=>b.x===p.x&&b.y===p.y)||(s.food&&s.food.x===p.x&&s.food.y===p.y)||(s.bonus&&s.bonus.x===p.x&&s.bonus.y===p.y);
  const free=()=>{let p;do p={x:Math.floor(Math.random()*N),y:Math.floor(Math.random()*N)};while(occ(p));return p};
  const newFood=()=>{s.food=null;s.food=Object.assign(free(),{k:FOODS[Math.floor(Math.random()*FOODS.length)]})};newFood();
  s.turn=d=>{const last=s.q.length?s.q[s.q.length-1]:s.dir;const [a,b]=DIRS[d],[c,e]=DIRS[last];if(a===-c&&b===-e||d===last)return;if(s.q.length<3)s.q.push(d)};
  s.tick=t=>{if(!s.last)s.last=t;if(s.bonus&&t>s.bonus.until)s.bonus=null;if(t-s.last<s.speed)return;s.last=t;if(s.q.length)s.dir=s.q.shift();
    const [dx,dy]=DIRS[s.dir],h={x:(s.body[0].x+dx+N)%N,y:(s.body[0].y+dy+N)%N};
    const ate=s.food&&h.x===s.food.x&&h.y===s.food.y,gold=s.bonus&&h.x===s.bonus.x&&h.y===s.bonus.y;
    const hitSelf=s.body.slice(0,ate?s.body.length:s.body.length-1).some(b=>b.x===h.x&&b.y===h.y);
    if(hitSelf)return end();
    s.body.unshift(h);
    if(ate){s.score+=10;s.eaten++;s.speed=Math.max(80,s.speed-2);s.pops.push({x:h.x,y:h.y,t,txt:'+10'});newFood();
      if(s.eaten%4===0&&!s.bonus)s.bonus=Object.assign(free(),{until:t+6000,start:t});setStats()}
    else s.body.pop();
    if(gold){s.score+=50;s.pops.push({x:h.x,y:h.y,t,txt:'+50'});s.bonus=null;if(s.body.length>4)s.body.pop();setStats()}};
  function end(){s.done=true;const best=store.get('xr_best_snake');if(s.score>best)store.set('xr_best_snake',s.score);setStats();
    overlay(s.score>best&&s.score>0?'New best: '+s.score:'Game over','You scored '+s.score+'. Press Enter or tap to play again.','Play again')}
  s.draw=t=>{const W=cv.width,c=W/N,P=css('--purple'),T=css('--teal'),bg=css('--bg2'),ln=css('--line2');
    ctx.fillStyle=bg;ctx.fillRect(0,0,W,W);ctx.fillStyle=ln;for(let i=1;i<N;i++)for(let j=1;j<N;j++){ctx.fillRect(i*c-1,j*c-1,2,2)}
    ctx.strokeStyle=css('--teal');ctx.globalAlpha=.25+.15*Math.sin(t/400);ctx.lineWidth=Math.max(2,c*.08);ctx.setLineDash([c*.4,c*.3]);ctx.strokeRect(1,1,W-2,W-2);ctx.setLineDash([]);ctx.globalAlpha=1;
    if(s.food&&IC[s.food.k]){const f=s.food,pulse=1+.06*Math.sin(t/180);ctx.save();ctx.translate((f.x+.5)*c,(f.y+.5)*c);ctx.scale(c/24*.78*pulse,c/24*.78*pulse);ctx.translate(-12,-12);ctx.fillStyle=icol(f.k);ctx.fill(new Path2D(IC[f.k].p));ctx.restore()}
    if(s.bonus){const b=s.bonus,left=Math.max(0,(b.until-t)/6000),cx=(b.x+.5)*c,cy=(b.y+.5)*c;
      ctx.strokeStyle=css('--gold');ctx.lineWidth=Math.max(2,c*.08);ctx.beginPath();ctx.arc(cx,cy,c*.48,-Math.PI/2,-Math.PI/2+left*Math.PI*2);ctx.stroke();
      ctx.fillStyle=css('--gold');ctx.save();ctx.translate(cx,cy);ctx.rotate(t/500);star(c*.32);ctx.restore()}
    const n=s.body.length;s.body.forEach((b,i)=>{ctx.fillStyle=mix(P,T,i/Math.max(1,n-1));const pad=i===0?c*.06:c*.12;rr(b.x*c+pad,b.y*c+pad,c-2*pad,c-2*pad,c*.28);ctx.fill()});
    const h=s.body[0],[dx,dy]=DIRS[s.dir];ctx.fillStyle=css('--bg');[[-1],[1]].forEach(([k])=>{ctx.beginPath();ctx.arc((h.x+.5+dx*.18+(-dy)*k*.2)*c,(h.y+.5+dy*.18+dx*k*.2)*c,c*.08,0,7);ctx.fill()});
    s.pops=s.pops.filter(p=>t-p.t<700);s.pops.forEach(p=>{const a=1-(t-p.t)/700;ctx.globalAlpha=a;ctx.fillStyle=css(p.txt==='+50'?'--gold':'--green');ctx.font=`800 ${Math.round(c*.7)}px ui-monospace,monospace`;ctx.textAlign='center';ctx.fillText(p.txt,(p.x+.5)*c,(p.y+.2)*c-(1-a)*c);ctx.textAlign='start';ctx.globalAlpha=1})};
  return s}
/* ---------- Bug Hunt ---------- */
const MAZE=["###################","#o.......#.......o#","#.##.###.#.###.##.#","#.................#","#.##.#.#####.#.##.#","#....#...#...#....#","####.###.#.###.####","#......B B B......#","####.#.#####.#.####","#........#........#","#.##.###.#.###.##.#","#o.#.....P.....#.o#","##.#.#.#####.#.#.##","#....#...#...#....#","###################"];
function Bugs(level,carry){
  const W=19,H=15,wall=(x,y)=>x<0||y<0||x>=W||y>=H||MAZE[y][x]==='#';
  const s={score:carry?carry.score:0,lives:carry?carry.lives:3,level:level||1,paused:false,done:false,dots:new Set(),pow:new Set(),bugs:[],fright:0,last:0,blast:0};
  let px,py;MAZE.forEach((r,y)=>[...r].forEach((ch,x)=>{if(ch==='.')s.dots.add(x+','+y);if(ch==='o')s.pow.add(x+','+y);if(ch==='P'){px=x;py=y}if(ch==='B')s.bugs.push({sx:x,sy:y,x,y,px:x,py:y,d:'up',dead:0,wake:0})}));
  const cols=['--magenta','--orange','--teal'];s.bugs.forEach((b,i)=>{b.col=cols[i%3];b.wake=i*2500});if(s.level===1)s.bugs.pop();s.start=0;s.grace=0;s.combo=0;s.pops=[];
  s.p={x:px,y:py,px,py,d:'left',want:'left',sx:px,sy:py};
  const stepP=Math.max(115,145-s.level*6),stepB=()=>s.fright?300:Math.max(150,230-s.level*14);
  s.turn=d=>{s.p.want=d};
  const opts=(x,y)=>Object.keys(DIRS).filter(d=>!wall(x+DIRS[d][0],y+DIRS[d][1]));
  const rev={up:'down',down:'up',left:'right',right:'left'};
  function resetPos(){s.p.x=s.p.px=s.p.sx;s.p.y=s.p.py=s.p.sy;s.p.d=s.p.want='left';s.bugs.forEach(b=>{b.x=b.px=b.sx;b.y=b.py=b.sy;b.dead=0});s.fright=0;s.grace=performance.now()+1500}
  s.tick=t=>{if(!s.last){s.last=t;s.lb=t}if(!s.start)s.start=t;
    if(s.fright&&t>s.fright){s.fright=0;s.combo=0}
    if(t-s.last>=stepP){s.last=t;const p=s.p;p.px=p.x;p.py=p.y;
      if(!wall(p.x+DIRS[p.want][0],p.y+DIRS[p.want][1]))p.d=p.want;
      if(!wall(p.x+DIRS[p.d][0],p.y+DIRS[p.d][1])){p.x+=DIRS[p.d][0];p.y+=DIRS[p.d][1]}
      const k=p.x+','+p.y;if(s.dots.delete(k))s.score+=10;if(s.pow.delete(k)){s.score+=50;s.fright=t+8500;s.combo=0}
      setStats();hit(t);if(!s.dots.size&&!s.pow.size)return win()}
    if(t<s.grace)return;
    if(t-s.lb>=stepB()){s.lb=t;s.bugs.forEach(b=>{if(b.dead&&t<b.dead)return;if(t-s.start<b.wake)return;b.dead=0;b.px=b.x;b.py=b.y;
      let o=opts(b.x,b.y).filter(d=>d!==rev[b.d]);if(!o.length)o=[rev[b.d]];
      const tx=s.p.x,ty=s.p.y,score=d=>{const nx=b.x+DIRS[d][0],ny=b.y+DIRS[d][1];return Math.abs(nx-tx)+Math.abs(ny-ty)};
      let d;if(Math.random()<.35)d=o[Math.floor(Math.random()*o.length)];else{o.sort((a,c)=>s.fright?score(c)-score(a):score(a)-score(c));d=o[0]}
      b.d=d;b.x+=DIRS[d][0];b.y+=DIRS[d][1]});hit(t)}};
  function hit(t){for(const b of s.bugs){if(b.dead)continue;const same=b.x===s.p.x&&b.y===s.p.y,swap=b.x===s.p.px&&b.y===s.p.py&&b.px===s.p.x&&b.py===s.p.y;
    if(!same&&!swap)continue;
    if(s.fright){s.combo++;const pts=100*Math.pow(2,s.combo-1);s.score+=pts;s.pops.push({x:b.x,y:b.y,t,txt:'+'+pts});b.x=b.px=b.sx;b.y=b.py=b.sy;b.dead=t+3000;setStats()}
    else{s.lives--;setStats();if(s.lives<=0)return end();resetPos();s.paused=true;overlay('Caught by a bug','Lives left: '+s.lives+'. Press Enter or tap to continue.','Continue');return}}}
  function win(){s.done=true;const nxt=s.level+1;s.nextLevel=()=>Bugs(nxt,{score:s.score,lives:s.lives});s.lives=Math.min(5,s.lives+1);setStats();overlay('Level '+s.level+' cleared','Score '+s.score+'. Bonus life! The next maze adds a bug and they get a bit faster.','Next level')}
  function end(){s.done=true;const best=store.get('xr_best_bugs');if(s.score>best)store.set('xr_best_bugs',s.score);setStats();
    overlay(s.score>best&&s.score>0?'New best: '+s.score:'Game over','You scored '+s.score+'. Press Enter or tap to play again.','Play again')}
  s.draw=t=>{const c=cv.width/W,bg=css('--bg2'),wl=css('--line2'),P=css('--purple'),G=css('--gold'),O=css('--orange');
    ctx.fillStyle=bg;ctx.fillRect(0,0,cv.width,cv.height);
    for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(MAZE[y][x]==='#'){ctx.fillStyle=wl;rr(x*c+c*.08,y*c+c*.08,c*.84,c*.84,c*.22);ctx.fill()}
    ctx.fillStyle=G;s.dots.forEach(k=>{const [x,y]=k.split(',').map(Number);ctx.beginPath();ctx.arc((x+.5)*c,(y+.5)*c,c*.09,0,7);ctx.fill()});
    s.pow.forEach(k=>{const [x,y]=k.split(',').map(Number);cup((x+.5)*c,(y+.55)*c,c*.36,O,t)});
    const now=performance.now(),fp=s.paused||s.done?1:Math.min(1,(now-s.last)/stepP),fb=s.paused||s.done?1:Math.min(1,(now-s.lb)/stepB());
    s.bugs.forEach(b=>{if(b.dead&&now<b.dead)return;const x=b.px+(b.x-b.px)*fb,y=b.py+(b.y-b.py)*fb;
      const col=s.fright?(s.fright-now<1500&&Math.floor(now/180)%2?css('--ink'):css('--blue')):css(b.col);bug((x+.5)*c,(y+.5)*c,c*.36,col,b.d,now)});
    const p=s.p,x=p.px+(p.x-p.px)*fp,y=p.py+(p.y-p.py)*fp;if(!(now<s.grace&&Math.floor(now/120)%2))cursor((x+.5)*c,(y+.5)*c,c*.42,P,p.d);
    s.pops=s.pops.filter(q=>now-q.t<900);s.pops.forEach(q=>{const a=1-(now-q.t)/900;ctx.globalAlpha=a;ctx.fillStyle=css('--gold');ctx.font=`800 ${Math.round(c*.6)}px ui-monospace,monospace`;ctx.textAlign='center';ctx.fillText(q.txt,(q.x+.5)*c,(q.y+.3)*c-(1-a)*c);ctx.textAlign='start';ctx.globalAlpha=1})};
  return s}
/* ---------- Whack-a-Bug ---------- */
function Whack(){
  const DUR=30000,s={score:0,paused:false,done:false,holes:Array.from({length:9},()=>({t:0,until:0,kind:0,hit:0})),end:0,spawn:0,left:30,el:0,lt:0,combo:0,miss:0,extra:0};
  s.tick=t=>{if(!s.lt)s.lt=t;s.el+=Math.min(100,t-s.lt);s.lt=t;const el=s.el;if(el>=DUR+s.extra)return finish();
    const left=Math.ceil((DUR+s.extra-el)/1000);if(left!==s.left){s.left=left;setStats()}
    if(el>s.spawn){const rate=Math.max(420,950-el/50);s.spawn=el+rate*(.55+Math.random()*.6);
      const free=s.holes.filter(h=>el>h.until+120);if(free.length){const h=free[Math.floor(Math.random()*free.length)];h.t=el;h.until=el+Math.max(850,1500-el/40);h.kind=Math.random()<.14?2:Math.random()<.06?3:1;h.hit=0}}};
  s.click=i=>{const h=s.holes[i],el=s.el;if(!h||!h.kind||el>h.until||h.hit){s.combo=0;s.miss=el;return}h.hit=el;
    if(h.kind===3){s.extra+=3000;s.left=Math.ceil((DUR+s.extra-s.el)/1000);h.pts='+3s';h.until=el+260;setStats();return}
    s.combo++;const mult=s.combo>=10?3:s.combo>=5?2:1;h.pts='+'+(h.kind===2?30:10)*mult;s.score+=(h.kind===2?30:10)*mult;h.until=el+260;setStats()};
  function finish(){s.done=true;const best=store.get('xr_best_whack');if(s.score>best)store.set('xr_best_whack',s.score);s.left=0;setStats();
    overlay(s.score>best&&s.score>0?'New best: '+s.score:'Time\'s up','You squashed '+s.score+' points of bugs. Press Enter or tap to play again.','Play again')}
  s.draw=t=>{const Wd=cv.width,c=Wd/3,pad=c*.08,bg=css('--bg2'),card=css('--card'),ln=css('--line2'),el=s.el;
    ctx.fillStyle=bg;ctx.fillRect(0,0,Wd,Wd);
    s.holes.forEach((h,i)=>{const x=(i%3)*c+pad,y=Math.floor(i/3)*c+pad,w=c-2*pad;
      ctx.fillStyle=card;rr(x,y,w,w,w*.08);ctx.fill();ctx.strokeStyle=ln;ctx.lineWidth=Math.max(1,w*.012);ctx.stroke();
      ctx.fillStyle=ln;[0,1,2].forEach(k=>{ctx.beginPath();ctx.arc(x+w*.1+k*w*.08,y+w*.1,w*.025,0,7);ctx.fill()});
      ctx.fillStyle=css('--dim');ctx.font=`600 ${Math.round(w*.08)}px ui-monospace,monospace`;ctx.fillText('$ ',x+w*.08,y+w*.88);
      const live=h.kind&&el<=h.until;
      if(live&&!h.hit){const k=Math.min(1,(el-h.t)/140),out=Math.min(1,(h.until-el)/140),sc=Math.max(0,Math.min(k,out));if(sc<=0.01)return;
        if(h.kind===3){ctx.save();ctx.translate(x+w/2,y+w*.56);ctx.scale(sc,sc);cup(0,0,w*.24,css('--green'),t);ctx.restore()}else bug(x+w/2,y+w*.56,w*.26*sc,h.kind===2?css('--gold'):css(['--magenta','--orange','--teal'][i%3]),'up',t)}
      else if(h.hit&&el-h.hit<260){const a=1-(el-h.hit)/260;ctx.globalAlpha=a;ctx.fillStyle=css('--green');ctx.font=`700 ${Math.round(w*.14)}px ui-monospace,monospace`;ctx.textAlign='center';ctx.fillText(h.pts||'+10',x+w/2,y+w*.55-(1-a)*w*.12);ctx.textAlign='start';ctx.globalAlpha=1}
      ctx.fillStyle=css('--dim');ctx.font=`600 ${Math.round(w*.07)}px ui-monospace,monospace`;ctx.fillText(String(i+1),x+w*.86,y+w*.13)});
    if(s.combo>=5){ctx.fillStyle=css(s.combo>=10?'--gold':'--teal');ctx.font=`800 ${Math.round(Wd*.05)}px ui-monospace,monospace`;ctx.textAlign='center';ctx.fillText('COMBO x'+(s.combo>=10?3:2)+'  ('+s.combo+')',Wd/2,Wd*.985);ctx.textAlign='start'}};
  return s}
/* ---------- Stack Memory (DOM) ---------- */
function Memory(el){
  const K=['javascript','react','nodedotjs','typescript','mongodb','express','python','git'];
  const deck=[...K,...K].map(k=>[k,Math.random()]).sort((a,b)=>a[1]-b[1]).map(x=>x[0]);
  el.innerHTML=`<div class="mem">${deck.map((k,i)=>`<button class="mcard" type="button" data-i="${i}" aria-label="Hidden card ${i+1}"><span class="mf mback"></span><span class="mf mfront">${si(k)}</span></button>`).join('')}</div><div class="gdbar"><span id="memMsg">Memorise the cards, then find the 8 pairs in as few moves as you can.</span><span style="display:flex;gap:8px"><button class="btn" type="button" id="memPeek">Peek (+2 moves)</button><button class="btn" type="button" id="memNew">New game</button></span></div>`;
  let open=[],moves=0,found=0,lock=true;const best=()=>store.get('xr_best_memory')||'–';
  const cards=()=>[...el.querySelectorAll('.mcard')];
  function peek(ms){lock=true;cards().forEach(c=>c.classList.add('up'));setTimeout(()=>{cards().forEach(c=>{if(!c.classList.contains('done')&&!open.includes(c))c.classList.remove('up')});lock=false},ms)}
  setTimeout(()=>peek(1600),250);
  const upd=()=>stat(moves,best(),found,'Moves','Best','Pairs');upd();
  el.querySelector('.mem').addEventListener('click',e=>{const b=e.target.closest('.mcard');if(!b||lock||b.classList.contains('up'))return;
    const i=+b.dataset.i;b.classList.add('up');b.setAttribute('aria-label',IC[deck[i]].t);open.push(b);
    if(open.length===2){moves++;const [x,y]=open;if(deck[x.dataset.i]===deck[y.dataset.i]){x.classList.add('done');y.classList.add('done');open=[];found++;
        if(found===8){const bs=store.get('xr_best_memory');if(!bs||moves<bs)store.set('xr_best_memory',moves);$('memMsg').textContent='All pairs found in '+moves+' moves'+(!bs||moves<bs?', a new best!':'.')}}
      else{lock=true;setTimeout(()=>{x.classList.remove('up');y.classList.remove('up');x.setAttribute('aria-label','Hidden card');y.setAttribute('aria-label','Hidden card');open=[];lock=false},750)}
      upd()}});
  $('memNew').onclick=()=>Memory(el);$('memPeek').onclick=()=>{if(lock||found===8)return;moves+=2;upd();peek(900)}}
/* ---------- Code Typing (DOM) ---------- */
const SNIPS=['const dev = { name: "Aditya", stack: ["React", "Node.js"] };','app.get("/api/health", (req, res) => res.json({ ok: true }));','const risk = vitals.map(v => score(v)).reduce((a, b) => a + b, 0);','if (heatIndex > 40) notify("Stay hydrated and find shade");','export default function Hello() { return <h1>Hello, recruiter!</h1>; }','git commit -m "ship it" && git push origin main','const data = await fetch(url).then(res => res.json());','for (let i = 0; i < 3; i++) console.log("keep building");'];
function Typing(el){
  const snip=SNIPS[Math.floor(Math.random()*SNIPS.length)];let t0=0,keys=0,errs=0,done=false;
  el.innerHTML=`<div class="typ"><div class="tsnip" id="tsnip" aria-hidden="true"></div><textarea id="tin" rows="2" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off" aria-label="Type this code: ${snip.replace(/"/g,'&quot;')}" placeholder="Start typing here. The timer starts on your first key."></textarea><div class="gdbar"><span id="tinfo">Type the line exactly, including spaces and symbols.</span><button class="btn" type="button" id="tnew">New snippet</button></div></div>`;
  const sn=$('tsnip'),tin=$('tin'),info=$('tinfo'),esc=c=>c.replace(/[&<>]/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[x]));
  const best=()=>store.get('xr_best_typing')||'–';
  function render(v){let h='';for(let i=0;i<snip.length;i++){const ch=esc(snip[i]);if(i<v.length)h+=`<span class="${v[i]===snip[i]?'ok':'bad'}">${ch}</span>`;else if(i===v.length)h+=`<span class="cur">${ch}</span>`;else h+=ch}sn.innerHTML=h}
  render('');stat(0,best(),100,'WPM','Best WPM','Accuracy %');
  tin.addEventListener('paste',e=>e.preventDefault());
  tin.addEventListener('beforeinput',e=>{if(done){e.preventDefault();return}if(e.inputType==='insertText'||e.inputType==='insertLineBreak'){const pos=tin.selectionStart;keys++;if((e.data||'\n')!==snip[pos])errs++}});
  tin.addEventListener('input',()=>{if(done)return;let v=tin.value.replace(/\n/g,'');if(v.length>snip.length)v=v.slice(0,snip.length);if(v!==tin.value)tin.value=v;
    if(!t0&&v.length)t0=performance.now();render(v);const mins=t0?(performance.now()-t0)/60000:0,correct=[...v].filter((c,i)=>c===snip[i]).length;
    const wpm=mins>0?Math.round(correct/5/mins):0,acc=keys?Math.max(0,Math.round((keys-errs)/keys*100)):100;stat(wpm,best(),acc,'WPM','Best WPM','Accuracy %');
    if(v===snip){done=true;const bs=store.get('xr_best_typing');if(wpm>bs)store.set('xr_best_typing',wpm);stat(wpm,best(),acc,'WPM','Best WPM','Accuracy %');
      info.textContent=wpm+' WPM at '+acc+'% accuracy'+(wpm>bs?', a new best!':'.')+' Try another snippet.'}});
  $('tnew').onclick=()=>{Typing(el);$('tin').focus()}}
/* ---------- Breakout: Firewall ---------- */
function Breakout(level,carry){
  const LW=800,LH=600,COLS=8,ROWS=5,lv=level||1;
  const s={score:carry?carry.score:0,lives:carry?carry.lives:4,level:lv,paused:false,done:false,lt:0,px:LW/2,pw:150,wideUntil:0,drops:[],keys:{left:0,right:0},
    ball:{x:LW/2,y:LH-62,vx:0,vy:0,r:9,stuck:true},bricks:[],ar:.75};
  const cols=['--purple','--pink','--gold','--teal','--blue'],bw=(LW-60)/COLS;
  for(let r=0;r<ROWS;r++)for(let c=0;c<COLS;c++)s.bricks.push({x:30+c*bw+3,y:70+r*34,w:bw-6,h:26,hp:r<Math.min(3,Math.floor(lv/2)+1)-1?2:1,col:cols[r]});
  const speed=()=>5+lv*.45;
  s.ptr=fx=>{s.px=Math.max(s.pw/2,Math.min(LW-s.pw/2,fx*LW))};
  s.action=()=>{const b=s.ball;if(!b.stuck)return;b.stuck=false;const sp=speed(),a=-Math.PI/2+(Math.random()-.5)*.8;b.vx=Math.cos(a)*sp;b.vy=Math.sin(a)*sp};
  s.keyset=(d,on)=>{if(d==='left'||d==='right')s.keys[d]=on};
  s.tick=t=>{if(!s.lt)s.lt=t;const dt=Math.min(40,t-s.lt)/16.67;s.lt=t;s.pw=t<s.wideUntil?220:150;
    s.drops.forEach(d=>{d.y+=3.2*dt;if(d.y>LH-50&&d.y<LH-26&&Math.abs(d.x-s.px)<s.pw/2+14){d.got=true;if(d.k==='wide')s.wideUntil=t+12000;else{s.lives=Math.min(6,s.lives+1);setStats()}}});s.drops=s.drops.filter(d=>!d.got&&d.y<LH+30);
    s.px=Math.max(s.pw/2,Math.min(LW-s.pw/2,s.px+(s.keys.right-s.keys.left)*10*dt));const b=s.ball;
    if(b.stuck){b.x=s.px;b.y=LH-62;return}
    for(let k=0;k<3;k++){b.x+=b.vx*dt/3;b.y+=b.vy*dt/3;
      if(b.x<b.r){b.x=b.r;b.vx=Math.abs(b.vx)}if(b.x>LW-b.r){b.x=LW-b.r;b.vx=-Math.abs(b.vx)}if(b.y<b.r){b.y=b.r;b.vy=Math.abs(b.vy)}
      const py=LH-44;if(b.vy>0&&b.y+b.r>=py&&b.y+b.r<=py+16&&Math.abs(b.x-s.px)<=s.pw/2+b.r){const off=(b.x-s.px)/(s.pw/2),sp=Math.hypot(b.vx,b.vy),a=off*1.05;b.vx=Math.sin(a)*sp;b.vy=-Math.cos(a)*sp;b.y=py-b.r}
      for(const br of s.bricks){if(br.hp<=0)continue;const cx=Math.max(br.x,Math.min(b.x,br.x+br.w)),cy=Math.max(br.y,Math.min(b.y,br.y+br.h)),dx=b.x-cx,dy=b.y-cy;
        if(dx*dx+dy*dy<=b.r*b.r){br.hp--;br.hit=t;s.score+=br.hp>0?5:10;if(br.hp<=0&&Math.random()<.16)s.drops.push({x:br.x+br.w/2,y:br.y+br.h,k:Math.random()<.7?'wide':'life'});if(Math.abs(dx)>Math.abs(dy))b.vx=dx>0?Math.abs(b.vx):-Math.abs(b.vx);else b.vy=dy>0?Math.abs(b.vy):-Math.abs(b.vy);setStats();break}}
      if(b.y>LH+20){s.lives--;setStats();if(s.lives<=0)return end();b.stuck=true;b.vx=b.vy=0;return}}
    if(s.bricks.every(x=>x.hp<=0))win()};
  function win(){s.done=true;s.nextLevel=()=>Breakout(lv+1,{score:s.score,lives:s.lives});overlay('Firewall '+lv+' cleared','Score '+s.score+'. The next wall is tougher and the ball is faster.','Next level')}
  function end(){s.done=true;const best=store.get('xr_best_breakout');if(s.score>best)store.set('xr_best_breakout',s.score);setStats();overlay(s.score>best&&s.score>0?'New best: '+s.score:'Firewall held','You scored '+s.score+'. Press Enter or tap to play again.','Play again')}
  s.draw=t=>{const k=cv.width/LW;ctx.save();ctx.scale(k,k);ctx.fillStyle=css('--bg2');ctx.fillRect(0,0,LW,LH);
    s.bricks.forEach(br=>{if(br.hp<=0)return;ctx.fillStyle=css(br.col);ctx.globalAlpha=br.hp>1?1:.78;rr(br.x,br.y,br.w,br.h,6);ctx.fill();
      if(br.hp>1){ctx.globalAlpha=1;ctx.strokeStyle=css('--ink');ctx.lineWidth=2;ctx.stroke()}ctx.globalAlpha=1});
    s.drops.forEach(d=>{ctx.fillStyle=css(d.k==='wide'?'--teal':'--pink');rr(d.x-22,d.y-11,44,22,11);ctx.fill();ctx.fillStyle=css('--bg');ctx.font='800 13px ui-monospace,monospace';ctx.textAlign='center';ctx.fillText(d.k==='wide'?'↔':'♥',d.x,d.y+5);ctx.textAlign='start'});
    ctx.fillStyle=css(t<s.wideUntil?'--teal':'--ink');rr(s.px-s.pw/2,LH-44,s.pw,14,7);ctx.fill();
    const b=s.ball;ctx.fillStyle=css('--teal');ctx.beginPath();ctx.arc(b.x,b.y,b.r,0,7);ctx.fill();
    if(b.stuck&&!s.paused&&!s.done){ctx.fillStyle=css('--mute');ctx.font='600 18px ui-monospace,monospace';ctx.textAlign='center';ctx.fillText('Press Space or tap to launch',LW/2,LH/2+60);ctx.textAlign='start'}
    ctx.restore()};
  return s}
/* ---------- Deploy Dash ---------- */
function Dash(){
  const LW=800,LH=600,X=210;
  const s={score:0,paused:false,done:false,lt:0,y:LH/2,vy:0,pipes:[],started:false,dist:0,ar:.75,shield:0,shieldT:0,cups:[],stars:Array.from({length:40},()=>({x:Math.random()*LW,y:Math.random()*LH,z:.3+Math.random()*.7}))};
  s.action=()=>{if(s.done)return;s.started=true;s.vy=-7.4};
  s.tick=t=>{if(!s.lt)s.lt=t;const dt=Math.min(40,t-s.lt)/16.67;s.lt=t;
    if(!s.started){s.y=LH/2+Math.sin(t/300)*10;return}
    const sp=Math.min(6.4,3.8+s.score*.06);s.vy=Math.min(10,s.vy+.36*dt);s.y+=s.vy*dt;s.dist+=sp*dt;
    s.stars.forEach(st=>{st.x-=sp*st.z*.35*dt;if(st.x<0)st.x+=LW});
    const gap=Math.max(175,240-s.score*1.8);
    if(!s.pipes.length||s.pipes[s.pipes.length-1].x<LW-300){const last=s.pipes[s.pipes.length-1];let gy=90+Math.random()*(LH-180-gap);if(last)gy=Math.max(last.gy-170,Math.min(last.gy+170,gy));s.pipes.push({x:LW+40,gy,gap,w:72,pass:false});if(s.score>=2&&Math.random()<.3)s.cups.push({x:LW+40+150,y:Math.max(60,Math.min(LH-60,gy+gap/2))})}
    s.cups.forEach(c=>{c.x-=sp*dt;if(!c.got&&Math.abs(c.x-X)<30&&Math.abs(c.y-s.y)<30){c.got=true;s.shield=1}});s.cups=s.cups.filter(c=>!c.got&&c.x>-40);
    s.pipes.forEach(p=>{p.x-=sp*dt;if(!p.pass&&p.x+p.w<X){p.pass=true;s.score++;setStats()}});s.pipes=s.pipes.filter(p=>p.x>-120);
    const r=13;if(s.y<r){s.y=r;s.vy=Math.max(0,s.vy)}if(s.y>LH-r)return crash();
    if(t<s.shieldT)return;
    for(const p of s.pipes){if(X+r>p.x&&X-r<p.x+p.w&&(s.y-r<p.gy||s.y+r>p.gy+p.gap))return crash()}};
  function crash(){if(s.shield){s.shield=0;s.shieldT=performance.now()+1200;s.vy=-6;return}end()}
  function end(){s.done=true;const best=store.get('xr_best_dash');if(s.score>best)store.set('xr_best_dash',s.score);setStats();
    overlay(s.score>best&&s.score>0?'New best: '+s.score:'Deploy failed','You shipped through '+s.score+' pipeline'+(s.score===1?'':'s')+'. Press Enter or tap to retry.','Retry')}
  s.draw=t=>{const k=cv.width/LW;ctx.save();ctx.scale(k,k);ctx.fillStyle=css('--bg2');ctx.fillRect(0,0,LW,LH);
    ctx.fillStyle=css('--dim');s.stars.forEach(st=>{ctx.globalAlpha=st.z*.6;ctx.fillRect(st.x,st.y,2*st.z+.5,2*st.z+.5)});ctx.globalAlpha=1;
    s.pipes.forEach(p=>{ctx.fillStyle=css('--line2');rr(p.x,-10,p.w,p.gy+10,10);ctx.fill();rr(p.x,p.gy+p.gap,p.w,LH-p.gy-p.gap+10,10);ctx.fill();
      ctx.fillStyle=css('--card');ctx.fillRect(p.x+10,p.gy-34,p.w-20,22);ctx.fillRect(p.x+10,p.gy+p.gap+12,p.w-20,22);
      ctx.fillStyle=css(p.pass?'--green':'--orange');[p.gy-23,p.gy+p.gap+23].forEach(yy=>{ctx.beginPath();ctx.arc(p.x+22,yy,4,0,7);ctx.fill()});
      ctx.fillStyle=css('--mute');ctx.font='700 11px ui-monospace,monospace';ctx.fillText('CI',p.x+32,p.gy-19);ctx.fillText('CD',p.x+32,p.gy+p.gap+27)});
    ctx.save();ctx.translate(X,s.y);ctx.rotate(Math.max(-.5,Math.min(.9,s.vy/14)));
    const fl=8+Math.random()*8;ctx.fillStyle=css('--orange');ctx.beginPath();ctx.moveTo(-22,-7);ctx.lineTo(-22-fl,0);ctx.lineTo(-22,7);ctx.fill();
    ctx.fillStyle=css('--ink');ctx.beginPath();ctx.moveTo(26,0);ctx.quadraticCurveTo(10,-15,-20,-11);ctx.lineTo(-20,11);ctx.quadraticCurveTo(10,15,26,0);ctx.fill();
    ctx.fillStyle=css('--purple');ctx.beginPath();ctx.moveTo(-14,-11);ctx.lineTo(-24,-20);ctx.lineTo(-6,-11);ctx.moveTo(-14,11);ctx.lineTo(-24,20);ctx.lineTo(-6,11);ctx.fill();
    ctx.fillStyle=css('--teal');ctx.beginPath();ctx.arc(6,0,5,0,7);ctx.fill();
    if(s.shield||performance.now()<s.shieldT){ctx.strokeStyle=css('--green');ctx.lineWidth=3;ctx.globalAlpha=.5+.3*Math.sin(t/120);ctx.beginPath();ctx.arc(0,0,32,0,7);ctx.stroke();ctx.globalAlpha=1}ctx.restore();
    s.cups.forEach(c=>cup(c.x,c.y,16,css('--green'),t));
    if(!s.started&&!s.paused&&!s.done){ctx.fillStyle=css('--mute');ctx.font='600 18px ui-monospace,monospace';ctx.textAlign='center';ctx.fillText('Tap, click or press Space to fly · grab ☕ for a shield',LW/2,LH-70);ctx.textAlign='start'}
    ctx.fillStyle=css('--ink');ctx.font='800 64px "Hanken Grotesk",sans-serif';ctx.textAlign='center';ctx.globalAlpha=.9;if(s.started)ctx.fillText(s.score,LW/2,96);ctx.globalAlpha=1;ctx.textAlign='start';
    ctx.restore()};
  return s}
/* ---------- Commit 2048 (DOM) ---------- */
function T2048(el){
  const N=4;let grid,score=0,id=0,over=false,won=false,hist=null,undos=3;const tiles=new Map();
  el.innerHTML=`<div class="b48" id="b48" aria-label="2048 board" role="application">${'<i></i>'.repeat(16)}</div><div class="gdbar"><span id="m48">Slide with arrow keys, WASD or swipe. Merge equal tiles to reach 2048.</span><span style="display:flex;gap:8px"><button class="btn" type="button" id="u48">Undo (3)</button><button class="btn" type="button" id="n48">New game</button></span></div>`;
  const board=$('b48'),msg=$('m48');
  const upd=()=>stat(score,store.get('xr_best_2048'),Math.max(...grid.flat().map(c=>c?c.v:0)),'Score','Best','Best tile');
  function add(){const e=[];grid.forEach((r,y)=>r.forEach((c,x)=>{if(!c)e.push([x,y])}));if(!e.length)return;const [x,y]=e[Math.floor(Math.random()*e.length)];
    const t={v:Math.random()<.9?2:4,id:++id,x,y,isNew:true};grid[y][x]=t;const d=document.createElement('div');d.className='t48 new';board.appendChild(d);tiles.set(t.id,d)}
  function paint(){grid.flat().forEach(t=>{if(!t)return;const d=tiles.get(t.id);d.textContent=t.v;d.dataset.v=t.v>2048?'big':t.v;d.style.setProperty('--x',t.x);d.style.setProperty('--y',t.y);
    if(t.merged){d.classList.remove('pop');void d.offsetWidth;d.classList.add('pop');t.merged=false}if(t.isNew){t.isNew=false;setTimeout(()=>d.classList.remove('new'),10)}})}
  const snap=()=>({g:grid.map(r=>r.map(c=>c?c.v:0)),score});
  function rebuild(st){tiles.forEach(d=>d.remove());tiles.clear();grid=st.g.map((r,y)=>r.map((v,x)=>{if(!v)return null;const t={v,id:++id,x,y};const d=document.createElement('div');d.className='t48';board.appendChild(d);tiles.set(t.id,d);return t}));score=st.score;over=false;paint();upd()}
  function undo(){if(!hist||!undos)return;undos--;rebuild(hist);hist=null;$('u48').textContent='Undo ('+undos+')';msg.textContent=undos?'Move undone.':'No undos left this game.'}
  function reset(){tiles.forEach(d=>d.remove());tiles.clear();grid=Array.from({length:N},()=>Array(N).fill(null));score=0;over=false;won=false;hist=null;undos=3;$('u48')&&($('u48').textContent='Undo (3)');add();add();paint();upd();msg.textContent='Slide with arrow keys, WASD or swipe. Merge equal tiles to reach 2048.'}
  function move(dir){if(over)return;const before=snap();const [dx,dy]=DIRS[dir];let moved=false;const xs=[0,1,2,3],ys=[0,1,2,3];if(dx>0)xs.reverse();if(dy>0)ys.reverse();const done=new Set();
    for(const y of ys)for(const x of xs){const t=grid[y][x];if(!t)continue;let nx=x,ny=y;
      while(true){const tx=nx+dx,ty=ny+dy;if(tx<0||ty<0||tx>=N||ty>=N)break;const o=grid[ty][tx];
        if(!o){nx=tx;ny=ty;continue}
        if(o.v===t.v&&!done.has(o.id)){grid[y][x]=null;t.x=tx;t.y=ty;const d=tiles.get(t.id);d.style.setProperty('--x',tx);d.style.setProperty('--y',ty);d.style.zIndex=1;
          setTimeout(()=>{d.remove()},120);tiles.delete(t.id);o.v*=2;o.merged=true;done.add(o.id);score+=o.v;moved=true;if(o.v===2048&&!won){won=true;msg.textContent='You reached 2048! Keep going for a higher score.'}nx=null;break}
        break}
      if(nx!==null&&(nx!==x||ny!==y)){grid[y][x]=null;grid[ny][nx]=t;t.x=nx;t.y=ny;moved=true}}
    if(!moved)return;hist=before;setTimeout(()=>{add();paint();if(score>store.get('xr_best_2048'))store.set('xr_best_2048',score);upd();if(!canMove()){over=true;msg.textContent='No moves left. Final score '+score+'.'}},125);paint()}
  function canMove(){for(let y=0;y<N;y++)for(let x=0;x<N;x++){const t=grid[y][x];if(!t)return true;if(x<N-1&&grid[y][x+1]&&grid[y][x+1].v===t.v)return true;if(y<N-1&&grid[y+1][x]&&grid[y+1][x].v===t.v)return true}return false}
  reset();$('n48').onclick=reset;$('u48').onclick=undo;
  let sx=0,sy=0;board.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY},{passive:true});
  board.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.max(Math.abs(dx),Math.abs(dy))<24)return;move(Math.abs(dx)>Math.abs(dy)?(dx>0?'right':'left'):(dy>0?'down':'up'))},{passive:true});
  return{key(e){const k=e.key.toLowerCase();if(k==='z'||k==='u'){undo();return true}const m={arrowup:'up',w:'up',arrowdown:'down',s:'down',arrowleft:'left',a:'left',arrowright:'right',d:'right'}[k];if(m){move(m);return true}}}}
/* ---------- Bug Sweeper (DOM) ---------- */
function Sweeper(el){
  const N=9,M=8;let cells,started=false,over=false,flagMode=false,t0=0,timer=0,flags=0;
  el.innerHTML=`<div class="swtop"><button class="btn swflag" type="button" id="swf" aria-pressed="false">🚩 Flag mode: off</button><button class="btn" type="button" id="swn">New game</button></div><div class="sw" id="sw" role="grid" aria-label="Bug sweeper board"></div><div class="gdbar"><span id="swm">Open every safe cell. Numbers count the bugs next to a cell. Right-click or long-press to flag.</span></div>`;
  const box=$('sw'),msg=$('swm');
  const nb=(x,y)=>{const r=[];for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const a=x+dx,b=y+dy;if((dx||dy)&&a>=0&&b>=0&&a<N&&b<N)r.push(cells[b*N+a])}return r};
  const best=()=>store.get('xr_best_sweeper')?store.get('xr_best_sweeper')+'s':'–';
  const upd=()=>stat(started?Math.floor((performance.now()-t0)/1000):0,best(),M-flags,'Time','Best','Bugs left');
  function reset(){clearInterval(timer);started=over=false;flags=0;cells=Array.from({length:N*N},(_,i)=>({i,x:i%N,y:Math.floor(i/N),bug:false,open:false,flag:false,n:0}));
    box.innerHTML=cells.map(c=>`<button type="button" class="sc" data-i="${c.i}" aria-label="Hidden cell"></button>`).join('');msg.textContent='Open every safe cell. Numbers count the bugs next to a cell. Right-click or long-press to flag.';upd()}
  function plant(safe){const ban=new Set([safe.i,...nb(safe.x,safe.y).map(c=>c.i)]);let k=0;while(k<M){const c=cells[Math.floor(Math.random()*N*N)];if(c.bug||ban.has(c.i))continue;c.bug=true;k++}
    cells.forEach(c=>c.n=nb(c.x,c.y).filter(o=>o.bug).length)}
  function btn(c){return box.children[c.i]}
  function show(c){const b=btn(c);b.classList.add('open');b.dataset.n=c.n;b.textContent=c.n||'';b.setAttribute('aria-label',c.n?c.n+' bugs nearby':'Empty')}
  function open(c){if(over||c.open||c.flag)return;if(!started){started=true;plant(c);t0=performance.now();timer=setInterval(upd,1000)}
    if(c.bug){over=true;clearInterval(timer);cells.forEach(o=>{if(o.bug){const b=btn(o);b.classList.add('bugcell');b.textContent='🐞'}});btn(c).classList.add('boom');msg.textContent='You hit a bug. Try again!';return}
    const q=[c];while(q.length){const o=q.pop();if(o.open||o.flag)continue;o.open=true;show(o);if(!o.n)nb(o.x,o.y).forEach(n=>{if(!n.open&&!n.bug)q.push(n)})}
    if(cells.every(o=>o.bug||o.open)){over=true;clearInterval(timer);const s=Math.max(1,Math.floor((performance.now()-t0)/1000)),bs=store.get('xr_best_sweeper');if(!bs||s<bs)store.set('xr_best_sweeper',s);
      msg.textContent='All bugs found in '+s+'s'+(!bs||s<bs?', a new best!':'.');upd()}}
  function flag(c){if(over||c.open)return;c.flag=!c.flag;flags+=c.flag?1:-1;const b=btn(c);b.classList.toggle('flag',c.flag);b.textContent=c.flag?'🚩':'';b.setAttribute('aria-label',c.flag?'Flagged':'Hidden cell');upd()}
  let lp=0,lpFired=false;
  box.addEventListener('click',e=>{const b=e.target.closest('.sc');if(!b)return;if(lpFired){lpFired=false;return}const c=cells[+b.dataset.i];(flagMode?flag:open)(c)});
  box.addEventListener('contextmenu',e=>{const b=e.target.closest('.sc');if(!b)return;e.preventDefault();flag(cells[+b.dataset.i])});
  box.addEventListener('touchstart',e=>{const b=e.target.closest('.sc');if(!b)return;lpFired=false;lp=setTimeout(()=>{lpFired=true;flag(cells[+b.dataset.i]);if(navigator.vibrate)navigator.vibrate(20)},420)},{passive:true});
  ['touchend','touchmove','touchcancel'].forEach(ev=>box.addEventListener(ev,()=>clearTimeout(lp),{passive:true}));
  $('swf').onclick=()=>{flagMode=!flagMode;$('swf').setAttribute('aria-pressed',flagMode);$('swf').textContent='🚩 Flag mode: '+(flagMode?'on':'off')};
  $('swn').onclick=reset;reset();
  return{destroy(){clearInterval(timer)}}}
/* ---------- Stackle: guess the tech word (DOM) ---------- */
const WORDS=['REACT','CACHE','ARRAY','DEBUG','MERGE','QUERY','STACK','CLASS','ASYNC','FETCH','PROXY','TOKEN','SHELL','PARSE','FRAME','MODEL','LINUX','STATE','HOOKS','ROUTE','PIXEL','REGEX','CLOUD','STORE','EVENT','BUILD','LOGIC','INDEX','CONST','FLOAT','BYTES','PRINT','SCOPE','REDIS','PATCH','FIBER','TUPLE','MUTEX','QUEUE','CRASH','DEBIT','LOOPS','NODES','PROPS','SLICE','SPLIT','TRACE','VALUE','WHILE','YIELD'];
function Stackle(el){
  const word=WORDS[Math.floor(Math.random()*WORDS.length)];let row=0,cur='',done=false;const state={};
  const KB=['QWERTYUIOP','ASDFGHJKL','⏎ZXCVBNM⌫'];
  el.innerHTML=`<div class="wd" id="wd">${Array.from({length:6},()=>`<div class="wr">${'<span class="wc"></span>'.repeat(5)}</div>`).join('')}</div><div class="kb" id="kb">${KB.map(r=>`<div>${[...r].map(ch=>`<button type="button" data-k="${ch}" class="${ch==='⏎'||ch==='⌫'?'wide':''}" aria-label="${ch==='⏎'?'Enter':ch==='⌫'?'Backspace':ch}">${ch==='⏎'?'Enter':ch}</button>`).join('')}</div>`).join('')}</div><div class="gdbar"><span id="wm">Guess the 5-letter tech word in 6 tries. Stuck? Use one hint.</span><span style="display:flex;gap:8px"><button class="btn" type="button" id="wh">Hint</button><button class="btn" type="button" id="wn">New word</button></span></div>`;
  const wins=()=>store.get('xr_best_stackle'),streak=()=>store.get('xr_streak_stackle');
  const upd=()=>stat(row+(done?0:0),wins(),streak(),'Guesses','Wins','Streak');upd();
  const rows=[...$('wd').children],msg=$('wm');
  function paintRow(){const r=rows[row];[...r.children].forEach((c,i)=>{c.textContent=cur[i]||'';c.classList.toggle('fill',!!cur[i])})}
  function submit(){if(cur.length<5){shake();msg.textContent='Five letters, please.';return}
    const res=Array(5).fill('miss'),left={};[...word].forEach((ch,i)=>{if(cur[i]===ch)res[i]='hit';else left[ch]=(left[ch]||0)+1});
    [...cur].forEach((ch,i)=>{if(res[i]!=='hit'&&left[ch]){res[i]='near';left[ch]--}});
    const r=rows[row];[...r.children].forEach((c,i)=>{setTimeout(()=>{c.classList.add('flip',res[i])},i*110)});
    [...cur].forEach((ch,i)=>{const rank={hit:3,near:2,miss:1};if(!state[ch]||rank[res[i]]>rank[state[ch]])state[ch]=res[i]});
    setTimeout(()=>{$('kb').querySelectorAll('button[data-k]').forEach(b=>{const k=b.dataset.k;b.classList.remove('hit','near','miss');if(state[k])b.classList.add(state[k])})},600);
    const guess=cur;row++;cur='';upd();
    if(guess===word){done=true;store.set('xr_best_stackle',wins()+1);store.set('xr_streak_stackle',streak()+1);setTimeout(()=>{msg.textContent='Got it in '+row+'! The word was '+word+'.';upd()},650)}
    else if(row===6){done=true;store.set('xr_streak_stackle',0);setTimeout(()=>{msg.textContent='The word was '+word+'. Try a new one.';upd()},650)}
    else msg.textContent=row+' of 6 guesses used.'}
  function shake(){const r=rows[row];r.classList.remove('shake');void r.offsetWidth;r.classList.add('shake')}
  function press(k){if(done)return;if(k==='⏎'||k==='ENTER')return submit();if(k==='⌫'||k==='BACKSPACE'){cur=cur.slice(0,-1);return paintRow()}if(/^[A-Z]$/.test(k)&&cur.length<5){cur+=k;paintRow()}}
  $('kb').addEventListener('click',e=>{const b=e.target.closest('button[data-k]');if(b)press(b.dataset.k)});
  let hinted=false;$('wh').onclick=()=>{if(done||hinted)return;hinted=true;const known=new Set();rows.slice(0,row).forEach(r=>[...r.children].forEach((c,i)=>{if(c.classList.contains('hit'))known.add(i)}));const opts=[...Array(5).keys()].filter(i=>!known.has(i));const i=opts[Math.floor(Math.random()*opts.length)];msg.textContent='Hint: letter '+(i+1)+' is '+word[i]+'.';$('wh').disabled=true};
  $('wn').onclick=()=>{DG=Stackle(el)};
  return{key(e){if(e.ctrlKey||e.metaKey||e.altKey)return false;const k=e.key.toUpperCase();if(k==='ENTER'||k==='BACKSPACE'||/^[A-Z]$/.test(k)){press(k);return true}}}}
/* ---------- drawing helpers ---------- */
function icol(k){const h=IC[k].h.toUpperCase();return(h==='F5F2E3'||h==='FFFFFF'||h==='000000')?css('--ink'):'#'+h}
function star(r){ctx.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,q=i%2?r*.45:r;ctx.lineTo(Math.cos(a)*q,Math.sin(a)*q)}ctx.closePath();ctx.fill()}
function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
function hex(c){if(c.startsWith('#')){const n=c.length===4?c.slice(1).split('').map(x=>x+x).join(''):c.slice(1);return[0,2,4].map(i=>parseInt(n.slice(i,i+2),16))}const m=c.match(/\d+/g);return m?m.slice(0,3).map(Number):[128,128,128]}
function mix(a,b,t){const A=hex(a),B=hex(b);return'rgb('+A.map((v,i)=>Math.round(v+(B[i]-v)*t)).join(',')+')'}
function cursor(cx,cy,r,col,d){if(!(r>0))return;const ang={right:0,down:Math.PI/2,left:Math.PI,up:-Math.PI/2}[d]+Math.PI*3/4+.12;
  ctx.save();ctx.translate(cx,cy);ctx.rotate(ang);ctx.scale(r/11,r/11);ctx.translate(-11,-11);ctx.fillStyle=col;ctx.fill(new Path2D('M3 2l18 8-8 3-3 8z'));ctx.restore()}
function bug(cx,cy,r,col,d,t){if(!(r>0)||!isFinite(cx)||!isFinite(cy))return;const ang={right:0,down:Math.PI/2,left:Math.PI,up:-Math.PI/2}[d];const w=Math.sin(t/90)*.25;
  ctx.save();ctx.translate(cx,cy);ctx.rotate(ang);ctx.strokeStyle=col;ctx.lineWidth=Math.max(1.5,r*.12);ctx.lineCap='round';
  for(const k of[-1,1])for(const j of[-.45,0,.45]){ctx.beginPath();ctx.moveTo(j*r,k*r*.35);ctx.lineTo(j*r+(w*k)*r*.3,k*r*.95);ctx.stroke()}
  ctx.fillStyle=col;ctx.beginPath();ctx.ellipse(-r*.1,0,r*.62,r*.42,0,0,7);ctx.fill();ctx.beginPath();ctx.arc(r*.58,0,r*.26,0,7);ctx.fill();
  ctx.fillStyle=css('--bg');ctx.beginPath();ctx.arc(r*.68,-r*.1,r*.07,0,7);ctx.arc(r*.68,r*.1,r*.07,0,7);ctx.fill();ctx.restore()}
function cup(cx,cy,r,col,t){if(!(r>0))return;ctx.save();ctx.translate(cx,cy);ctx.fillStyle=col;ctx.strokeStyle=col;ctx.lineWidth=Math.max(1.5,r*.14);
  rr(-r*.55,-r*.25,r*.9,r*.75,r*.18);ctx.fill();ctx.beginPath();ctx.arc(r*.42,r*.1,r*.22,-1.3,1.3);ctx.stroke();
  const s=Math.sin(t/300)*r*.08;ctx.globalAlpha=.7;ctx.beginPath();ctx.moveTo(-r*.2,-r*.4);ctx.quadraticCurveTo(-r*.05+s,-r*.6,-r*.2,-r*.85);ctx.moveTo(r*.12,-r*.4);ctx.quadraticCurveTo(r*.27-s,-r*.6,r*.12,-r*.85);ctx.stroke();ctx.restore()}
/* ---------- control ---------- */
const GAMES={
  snake:{n:'Stack Snake',c:'--purple',type:'c',d:'Eat the tech logos to grow. The edges wrap around, so only your own tail can stop you. Every 4th logo spawns a golden star worth 50 for a few seconds.',o:'Eat the tech logos. Don\'t hit the walls or yourself.',k:'<kbd>←</kbd><kbd>↑</kbd><kbd>↓</kbd><kbd>→</kbd> or <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> · <kbd>Space</kbd> pauses · swipe on phones',pad:1,best:'pts',
    art:'<path d="M5 17c3 0 3-5 6-5s3 5 6 5 2-4 2-6"/><circle cx="19" cy="9" r="1.3"/>'},
  bugs:{n:'Bug Hunt',c:'--magenta',type:'c',d:'Collect every dot in the maze. Grab a coffee to chase the bugs, and squash them in a row for 100, 200, 400 points. Bugs wake up one by one, and you earn a bonus life each level.',o:'Collect every dot. Coffee lets you squash the bugs.',pad:1,best:'pts',
    art:'<ellipse cx="12" cy="13" rx="5" ry="6"/><path d="M12 7V5M7 10 4 8M17 10l3-2M7 15H4M17 15h3M8 19l-2 2M16 19l2 2M12 7v12"/>'},
  whack:{n:'Whack-a-Bug',c:'--orange',type:'c',d:'Bugs pop out of the terminals. Hit them in a row to build a combo (x2 at 5, x3 at 10). Golden bugs are worth 30, and a green coffee adds 3 seconds.',o:'Squash as many bugs as you can in 30 seconds.',k:'Click or tap a bug · keys <kbd>1</kbd>–<kbd>9</kbd> match the terminals · <kbd>Space</kbd> pauses',best:'pts',
    art:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 9l3 3-3 3M12 15h5"/>'},
  breakout:{n:'Firewall',c:'--teal',type:'c',ar:.75,d:'Break the firewall one brick at a time. Outlined bricks take two hits. Catch falling power-ups: ↔ widens your paddle, ♥ gives an extra life.',o:'Clear every brick. Don\'t let the ball fall.',k:'Move the mouse, drag, or hold <kbd>←</kbd> <kbd>→</kbd> · <kbd>Space</kbd> or tap launches · <kbd>P</kbd> pauses',best:'pts',
    art:'<rect x="3" y="4" width="5" height="3" rx="1"/><rect x="10" y="4" width="5" height="3" rx="1"/><rect x="17" y="4" width="4" height="3" rx="1"/><rect x="6" y="9" width="5" height="3" rx="1"/><circle cx="13" cy="15" r="1.6"/><path d="M8 20h8"/>'},
  dash:{n:'Deploy Dash',c:'--gold',type:'c',ar:.75,d:'Fly your release through the CI/CD pipelines. Tap to boost. Grab a ☕ to get a shield that saves you from one crash.',o:'Tap or press Space to boost. Don\'t touch the pipelines.',k:'Click, tap, <kbd>Space</kbd> or <kbd>↑</kbd> to boost · <kbd>P</kbd> pauses',best:'pts',
    art:'<path d="M5 15c-1 2-1 4-1 4s2 0 4-1M9 12l3 3M14 4c3 0 6 3 6 6l-7 7-6-6 7-7z"/><circle cx="15" cy="9" r="1.5"/>'},
  memory:{n:'Stack Memory',c:'--blue',type:'d',d:'You get a quick look at all the cards first. Then flip two at a time to match the tech logos. Stuck? Peek again for 2 extra moves.',k:'Click or tap cards · <kbd>Tab</kbd> + <kbd>Enter</kbd> work too',best:'moves',
    art:'<rect x="3" y="5" width="8" height="12" rx="2"/><rect x="13" y="7" width="8" height="12" rx="2"/><path d="M7 10v2M17 12l-1 2h2l-1 2"/>'},
  typing:{n:'Code Typing',c:'--green',type:'d',d:'Type a real line of code as fast and accurately as you can. Speed is measured in words per minute.',k:'Just type · pasting is disabled',best:'wpm',
    art:'<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h1M10 10h1M14 10h1M18 10h0M7 14h10"/>'},
  g2048:{n:'Commit 2048',c:'--gold',type:'d',d:'Slide the tiles and merge equal numbers to reach 2048. You get 3 undos per game (Z or the Undo button).',k:'<kbd>←</kbd><kbd>↑</kbd><kbd>↓</kbd><kbd>→</kbd> or <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> · swipe on phones',best:'pts',
    art:'<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><path d="M15 17h4M17 15v4"/>'},
  sweeper:{n:'Bug Sweeper',c:'--pink',type:'d',d:'Clear the board without opening one of the 8 hidden bugs. Numbers count the bugs touching a cell. Your first click is always safe.',k:'Click to open · right-click or long-press to flag · or use Flag mode',best:'secs',
    art:'<path d="M6 21V4M6 4h10l-2 3 2 3H6"/><path d="M4 21h6"/>'},
  stackle:{n:'Stackle',c:'--teal',type:'d',d:'Guess the 5-letter tech word in six tries. Green is the right spot, gold is in the word, grey is not in it. One hint per word.',k:'Type letters · <kbd>Enter</kbd> to guess · <kbd>⌫</kbd> to delete',best:'wins',
    art:'<rect x="2" y="8" width="5" height="7" rx="1"/><rect x="9.5" y="8" width="5" height="7" rx="1"/><rect x="17" y="8" width="5" height="7" rx="1"/>'}
};
const ORDER=Object.keys(GAMES);let DG=null;
function bestLabel(g){const v=store.get('xr_best_'+g),u=GAMES[g].best;if(!v)return 'Not played yet';return 'Best: '+v+(u==='pts'?'':u==='secs'?'s':' '+u)}
function tiles(){const box=$('arcade');if(!box)return;box.innerHTML=ORDER.map(g=>{const G=GAMES[g];return `<button type="button" class="atile" data-game="${g}" aria-pressed="${g===game}" style="--ac:var(${G.c})"><span class="aic"><svg viewBox="0 0 24 24">${G.art}</svg></span><b>${G.n}</b><small>${bestLabel(g)}</small></button>`}).join('')}
function load(g,scroll){game=g;stop();if(DG&&DG.destroy)DG.destroy();DG=null;const M=GAMES[g];
  document.querySelectorAll('.atile').forEach(b=>b.setAttribute('aria-pressed',b.dataset.game===g));
  $('gname').textContent=M.n;$('gdesc').textContent=M.d;$('gkeys').innerHTML=M.k||GAMES.snake.k;
  const isC=M.type==='c';$('gbox').hidden=!isC;$('gdom').hidden=isC;$('dpad').style.display=M.pad?'':'none';
  if(scroll){const st=$('gstage');if(st&&st.getBoundingClientRect().top>innerHeight*.6)st.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})}
  if(!isC){G=null;$('gdom').innerHTML='';DG=({memory:Memory,typing:Typing,g2048:T2048,sweeper:Sweeper,stackle:Stackle})[g]($('gdom'))||null;return}
  $('gdom').innerHTML='';size();G=({snake:()=>Snake(),bugs:()=>Bugs(1),whack:()=>Whack(),breakout:()=>Breakout(1),dash:()=>Dash()})[g]();G.paused=true;setStats();overlay(M.n,M.o,'Start');draw(performance.now());if(active)raf=requestAnimationFrame(loop)}
function fresh(){return({snake:()=>Snake(),bugs:()=>Bugs(1),whack:()=>Whack(),breakout:()=>Breakout(1),dash:()=>Dash()})[game]()}
function fitStage(){const b=$('gbox').hidden?$('gdom'):$('gbox');const r=b.getBoundingClientRect(),hh=80;if(r.top<hh||r.bottom>innerHeight){const y=scrollY+r.top-hh-(Math.max(0,innerHeight-hh-r.height)/2);scrollTo({top:Math.max(0,y),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}}
function start(){if(!G)return;if(G.done&&performance.now()-overlayAt<600)return;fitStage();if(G.done){G=G.nextLevel?G.nextLevel():fresh();setStats()}G.paused=false;G.last=0;G.lb=0;G.lt=0;over.hidden=true}
function pause(){if(!G||G.done)return;if(G.paused){start()}else{G.paused=true;overlay('Paused','Press Space, P or tap to resume.','Resume')}}
startBtn.addEventListener('click',e=>{e.stopPropagation();start()});
document.addEventListener('click',e=>{const b=e.target.closest('.atile');if(b)load(b.dataset.game,true)});
document.querySelectorAll('.dpad button').forEach(b=>b.addEventListener('pointerdown',e=>{e.preventDefault();if(!G||!G.turn)return;if(G.paused&&!over.hidden)start();G.turn(b.dataset.dir)}));
const KM={arrowup:'up',w:'up',arrowdown:'down',s:'down',arrowleft:'left',a:'left',arrowright:'right',d:'right'};
addEventListener('keydown',e=>{if(!active||e.target.closest('input,textarea,select,[contenteditable]'))return;
  if(DG){if(DG.key&&DG.key(e))e.preventDefault();return}
  if(!G)return;const k=e.key.toLowerCase(),m=KM[k];
  if(game==='whack'&&/^[1-9]$/.test(k)){e.preventDefault();if(!G.paused&&!G.done)G.click(+k-1);return}
  if(G.action&&(k===' '||k==='arrowup'||k==='w')){e.preventDefault();if(!over.hidden){if(!G.done&&G.paused)start();else if(G.done)start();if(game==='dash')G.action();return}G.action();return}
  if(G.keyset&&m){e.preventDefault();if(G.paused&&!over.hidden&&!G.done)start();G.keyset(m,1);return}
  if(m&&G.turn){e.preventDefault();if(G.paused&&!over.hidden&&!G.done)start();G.turn(m);return}
  if(k===' '||k==='p'){e.preventDefault();pause()}else if(k==='enter'&&!over.hidden){e.preventDefault();start()}});
addEventListener('keyup',e=>{if(!active||!G||!G.keyset)return;const m=KM[e.key.toLowerCase()];if(m)G.keyset(m,0)});
let tx=0,ty=0;const gb=$('gbox');
gb.addEventListener('touchstart',e=>{tx=e.touches[0].clientX;ty=e.touches[0].clientY},{passive:true});
gb.addEventListener('touchend',e=>{if(!G||!G.turn)return;const dx=e.changedTouches[0].clientX-tx,dy=e.changedTouches[0].clientY-ty;if(Math.max(Math.abs(dx),Math.abs(dy))<24)return;
  if(G.paused&&!over.hidden)start();G.turn(Math.abs(dx)>Math.abs(dy)?(dx>0?'right':'left'):(dy>0?'down':'up'))},{passive:true});
over.addEventListener('click',e=>{if(e.target.closest('button'))return;start();if(game==='dash'&&G)G.action()});
cv.addEventListener('pointerdown',e=>{if(!G||G.paused||G.done)return;const r=cv.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
  if(game==='whack')G.click(Math.min(2,Math.floor(y*3))*3+Math.min(2,Math.floor(x*3)));
  else if(game==='breakout'){G.ptr(x);G.action()}else if(game==='dash'){e.preventDefault();G.action()}});
cv.addEventListener('pointermove',e=>{if(game!=='breakout'||!G||G.paused||G.done)return;const r=cv.getBoundingClientRect();G.ptr((e.clientX-r.left)/r.width)});
addEventListener('resize',()=>{if(active&&G){size();draw(performance.now())}});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&G&&!G.paused&&!G.done&&active)pause()});
function sync(){const on=document.getElementById('p-play').classList.contains('show');
  if(on&&!active){active=true;tiles();if(!G&&!DG)load(game);else if(G){size();raf=requestAnimationFrame(loop)}}
  else if(!on&&active){active=false;if(G&&!G.paused&&!G.done){G.paused=true;overlay('Paused','Press Space, P or tap to resume.','Resume')}stop()}}
const _ss=setStats;setStats=function(){_ss();if(active)tiles()};
new MutationObserver(sync).observe(document.getElementById('p-play'),{attributes:true,attributeFilter:['class']});setTimeout(sync,0);
})();

/* ===== visual FX: hero code symbols, roaming python, animated cursor ===== */
(function(){
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const css=n=>getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const DPR=()=>Math.min(devicePixelRatio||1,2);
const onHome=()=>{const p=document.getElementById('p-home');return p&&p.classList.contains('show')};
let mx=-9999,my=-9999;addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY},{passive:true});
addEventListener('pointerleave',()=>{mx=my=-9999});

/* ---- 1. floating code symbols behind the hero ---- */
(function(){
  const hero=document.querySelector('.hero');if(!hero)return;
  const cv=document.createElement('canvas');cv.className='hsym';cv.setAttribute('aria-hidden','true');hero.prepend(cv);
  const g=cv.getContext('2d');
  const GL=['{ }','</>','=>','( )','[ ]',';','&&','||','#','λ','01','++','!==','<div>','npm','git','fn()','::','/* */','?.','...','$','%','const','async','=== ','{…}','<App/>','.map()','</>'];
  const COL=['--purple','--gold','--teal','--pink','--dim'];
  let W=0,H=0,P=[],vis=true,raf=0,last=0;
  function init(){const r=hero.getBoundingClientRect(),d=DPR();if(r.width<2||r.height<2)return;W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;g.setTransform(d,0,0,d,0,0);
    const n=Math.round(Math.min(46,Math.max(14,W*H/26000)));
    P=Array.from({length:n},(_,i)=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.25,
      m:i%3,amp:8+Math.random()*26,f:.0006+Math.random()*.0012,ph:Math.random()*6.28,r:(Math.random()-.5)*.6,vr:(Math.random()-.5)*.003,
      s:12+Math.random()*12,c:COL[i%COL.length],a:.16+Math.random()*.22,t:GL[Math.floor(Math.random()*GL.length)],ox:0,oy:0}))}
  function tri(x){return 2*Math.abs(2*(x/6.283-Math.floor(x/6.283+.5)))-1}
  function frame(t){raf=requestAnimationFrame(frame);if(!vis||!onHome()||document.hidden){last=0;return}if(!W||cv.width<2){if(!fit())return}const dt=Math.min(50,t-(last||t));last=t;
    g.clearRect(0,0,W,H);const r=hero.getBoundingClientRect(),lx=mx-r.left,ly=my-r.top;
    for(const p of P){p.x+=p.vx*dt*.06;p.y+=p.vy*dt*.06;p.r+=p.vr*dt;
      const w=t*p.f+p.ph,ox=p.m===0?Math.sin(w)*p.amp:p.m===1?tri(w)*p.amp:Math.cos(w)*p.amp*.7,oy=p.m===2?Math.sin(w)*p.amp*.7:p.m===1?Math.sin(w*.5)*p.amp*.3:0;
      const dx=p.x+ox-lx,dy=p.y+oy-ly,d2=dx*dx+dy*dy;
      if(d2<120*120){const d=Math.sqrt(d2)||1,k=(120-d)/120;p.ox+=dx/d*k*2.2;p.oy+=dy/d*k*2.2}
      p.ox=Math.max(-80,Math.min(80,p.ox*.94));p.oy=Math.max(-80,Math.min(80,p.oy*.94));if(!isFinite(p.x)||!isFinite(p.y)){p.x=Math.random()*W;p.y=Math.random()*H}
      if(p.x<-60)p.x=W+40;if(p.x>W+60)p.x=-40;if(p.y<-40)p.y=H+30;if(p.y>H+40)p.y=-30;
      g.save();g.translate(p.x+ox+p.ox,p.y+oy+p.oy);g.rotate(p.r);g.globalAlpha=p.a;g.fillStyle=css(p.c);
      g.font=`600 ${p.s}px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace`;g.textAlign='center';g.textBaseline='middle';g.fillText(p.t,0,0);g.restore()}}
  /* re-measure only when the hero really has a size (it is display:none on other pages) */
  let pw=0,ph=0;function fit(){const r=hero.getBoundingClientRect();if(r.width<2||r.height<2)return false;if(Math.abs(r.width-pw)>1||Math.abs(r.height-ph)>40||!P.length){pw=r.width;ph=r.height;init();if(RM)drawStatic()}return true}
  fit();try{new ResizeObserver(()=>fit()).observe(hero)}catch(e){addEventListener('resize',fit)}
  new IntersectionObserver(e=>{vis=e[0].isIntersecting}).observe(hero);
  function drawStatic(){g.clearRect(0,0,W,H);for(const p of P){g.save();g.translate(p.x,p.y);g.rotate(p.r);g.globalAlpha=p.a*.8;g.fillStyle=css(p.c);g.font=`600 ${p.s}px ui-monospace,monospace`;g.textAlign='center';g.fillText(p.t,0,0);g.restore()}}
  if(RM)drawStatic();else raf=requestAnimationFrame(frame);
})();

/* ---- 2. a little python that roams the page (behind the content) ---- */
(function(){
  if(RM)return;
  const cv=document.createElement('canvas');cv.className='pyc';cv.setAttribute('aria-hidden','true');document.body.insertBefore(cv,document.body.firstChild);
  const g=cv.getContext('2d');let W=0,H=0;
  function size(){const d=DPR();W=innerWidth;H=innerHeight;cv.width=W*d;cv.height=H*d;g.setTransform(d,0,0,d,0,0)}size();addEventListener('resize',size);
  const small=()=>W<700,N=()=>small()?18:26,GAP=()=>small()?5.5:7;
  let on=true;try{on=localStorage.getItem('xr_python')!=='off'}catch(e){}
  const btn=document.getElementById('pyToggle');
  function paint(){cv.style.display=on?'':'none';if(btn){btn.textContent=on?'Hide the python':'Bring back the python';btn.setAttribute('aria-pressed',on)}}
  if(btn)btn.addEventListener('click',()=>{on=!on;try{localStorage.setItem('xr_python',on?'on':'off')}catch(e){}paint()});paint();
  let hx=W*.15,hy=H*.75,ang=-.4,turn=0,tx=W*.6,ty=H*.4,nextT=0,tongue=0;const pts=[];for(let i=0;i<40;i++)pts.push({x:hx-i*7,y:hy});
  const playing=()=>{const p=document.getElementById('p-play');return p&&p.classList.contains('show')};let hid=false;
  function frame(t){requestAnimationFrame(frame);const pl=playing();if(pl!==hid){hid=pl;cv.style.opacity=pl?'0':''}if(!on||document.hidden||pl)return;
    if(t>nextT){tx=60+Math.random()*(W-120);ty=90+Math.random()*(H-160);nextT=t+4000+Math.random()*5000}
    let gx=tx,gy=ty;const cd=Math.hypot(mx-hx,my-hy);if(cd<220&&cd>40){gx=mx;gy=my}
    const want=Math.atan2(gy-hy,gx-hx);let da=((want-ang+Math.PI*3)%(Math.PI*2))-Math.PI;
    turn+=(Math.random()-.5)*.02;turn*=.96;ang+=Math.max(-.035,Math.min(.035,da*.02))+turn*.15+Math.sin(t/420)*.012;
    const sp=small()?.9:1.25;hx+=Math.cos(ang)*sp;hy+=Math.sin(ang)*sp;
    if(hx<20||hx>W-20||hy<70||hy>H-20){ang+=.08;hx=Math.max(20,Math.min(W-20,hx));hy=Math.max(70,Math.min(H-20,hy))}
    pts[0].x=hx;pts[0].y=hy;const gap=GAP();
    for(let i=1;i<pts.length;i++){const a=pts[i-1],b=pts[i],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1;b.x=a.x+dx/d*gap;b.y=a.y+dy/d*gap}
    g.clearRect(0,0,W,H);const n=N(),wMax=small()?7:9;
    g.lineCap='round';g.lineJoin='round';
    for(let i=n-1;i>0;i--){const k=i/n,w=wMax*(1-k*.75)*(i<3?.92:1);const c1=[55,118,171],c2=[255,212,59];
      g.strokeStyle=`rgba(${Math.round(c1[0]+(c2[0]-c1[0])*k)},${Math.round(c1[1]+(c2[1]-c1[1])*k)},${Math.round(c1[2]+(c2[2]-c1[2])*k)},.9)`;
      g.lineWidth=w;g.beginPath();g.moveTo(pts[i].x,pts[i].y);g.lineTo(pts[i-1].x,pts[i-1].y);g.stroke()}
    if(Math.sin(t/700)>.92){tongue=Math.min(1,tongue+.2)}else tongue=Math.max(0,tongue-.15);
    g.save();g.translate(hx,hy);g.rotate(ang);
    if(tongue>0){g.strokeStyle='#e0566a';g.lineWidth=1.4;g.beginPath();g.moveTo(wMax*.6,0);g.lineTo(wMax*.6+7*tongue,0);g.lineTo(wMax*.6+10*tongue,-2.5*tongue);g.moveTo(wMax*.6+7*tongue,0);g.lineTo(wMax*.6+10*tongue,2.5*tongue);g.stroke()}
    g.fillStyle='rgb(55,118,171)';g.beginPath();g.ellipse(1,0,wMax*.75,wMax*.62,0,0,7);g.fill();
    g.fillStyle='#fff';for(const s of[-1,1]){g.beginPath();g.arc(wMax*.25,s*wMax*.32,wMax*.2,0,7);g.fill()}
    g.fillStyle='#111';for(const s of[-1,1]){g.beginPath();g.arc(wMax*.3,s*wMax*.32,wMax*.1,0,7);g.fill()}
    g.restore()}
  requestAnimationFrame(frame);
})();

/* ---- 3. animated cursor: trailing ring + click ripple (mouse only) ---- */
(function(){
  if(RM||!matchMedia('(pointer: fine)').matches)return;
  const ring=document.createElement('div');ring.className='cring';ring.setAttribute('aria-hidden','true');
  const dot=document.createElement('div');dot.className='cdot';dot.setAttribute('aria-hidden','true');document.body.append(ring,dot);
  let rx=-100,ry=-100,raf=0,shown=false;
  function tick(){const dx=mx-rx,dy=my-ry;rx+=dx*.18;ry+=dy*.18;ring.style.transform=`translate3d(${rx}px,${ry}px,0)`;
    if(Math.abs(dx)+Math.abs(dy)>.3)raf=requestAnimationFrame(tick);else raf=0}
  addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;if(!shown){shown=true;document.documentElement.classList.add('has-cring');rx=e.clientX;ry=e.clientY}
    dot.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;if(!raf)raf=requestAnimationFrame(tick);
    const hot=e.target.closest&&e.target.closest('a,button,[role=tab],summary,label,.cc,.homeshot');ring.classList.toggle('hot',!!hot);
    const txt=e.target.closest&&e.target.closest('input,textarea,[contenteditable],canvas,#gstage');ring.classList.toggle('hide',!!txt);dot.classList.toggle('hide',!!txt)},{passive:true});
  document.addEventListener('mouseleave',()=>{ring.classList.add('hide');dot.classList.add('hide')});
  document.addEventListener('mouseenter',()=>{ring.classList.remove('hide');dot.classList.remove('hide')});
  addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;ring.classList.add('down');
    const r=document.createElement('span');r.className='cripple';r.style.left=e.clientX+'px';r.style.top=e.clientY+'px';document.body.appendChild(r);setTimeout(()=>r.remove(),600)});
  addEventListener('pointerup',()=>ring.classList.remove('down'));
  addEventListener('keydown',()=>{const p=document.getElementById('p-play');if(p&&p.classList.contains('show')){ring.classList.add('hide');dot.classList.add('hide')}});
})();
})();

/* ===== API Lab: live Raksha heat-index endpoint with in-browser fallback ===== */
(function(){
const $=id=>document.getElementById(id);if(!$('lSend')||!window.RakshaEngine)return;
const T=$('lT'),H=$('lH'),A=$('lA');
const PRESETS=[['Heat wave, humid',40,55,180],['Dry heat',42,12,90],['Monsoon afternoon',31,88,60],['Pleasant day',26,45,40],['Smoggy winter',18,70,320]];
let busy=false,deb=0,seq=0;
$('labPresets').innerHTML=PRESETS.map((p,i)=>`<button type="button" data-p="${i}" aria-pressed="false">${p[0]}</button>`).join('');
const path=()=>`/api/heat-index?tempC=${T.value}&humidity=${H.value}&aqi=${A.value}`;
function paintInputs(){$('lvT').textContent=T.value+' °C';$('lvH').textContent=H.value+' %';$('lvA').textContent=A.value;$('lURL').textContent=path()}
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
/* JSON syntax highlighting built with DOM nodes (no HTML strings) */
function renderJSON(obj){const pre=$('lJSON');pre.textContent='';
  (function walk(v,ind,last,key){const pad='  '.repeat(ind),line=document.createDocumentFragment();
    if(key!=null){line.append(pad);line.append(el('span','k',JSON.stringify(key)));line.append(': ')}else line.append(pad);
    const comma=last?'':',';
    if(v&&typeof v==='object'){const arr=Array.isArray(v),ks=arr?v.map((_,i)=>i):Object.keys(v);line.append(arr?'[':'{');pre.append(line,'\n');
      ks.forEach((k,i)=>walk(v[k],ind+1,i===ks.length-1,arr?null:k));pre.append(pad+(arr?']':'}')+comma+'\n');return}
    const t=v===null?'z':typeof v==='string'?'s':typeof v==='number'?'n':'b';line.append(el('span',t,JSON.stringify(v)));line.append(comma);pre.append(line,'\n')})(obj,0,true,null)}
function summary(b){const s=$('lSum');s.textContent='';if(!b||!b.heatIndex){s.append(el('p','',b&&b.details?b.details.join('. '):'No result.'));return}
  s.append(el('span','big',b.outOfDomain?'Off the chart':b.heatIndex.c+' °C'),el('span','chip '+b.band.level,b.band.label));
  if(b.airQuality)s.append(el('span','chip '+b.airQuality.level,'AQI: '+b.airQuality.label));
  s.append(el('p','',(b.heatStressFlag?'Heat-stress flag fires. ':'')+b.band.advice+(b.outOfDomain?' (Air temperature is above the formula\'s validated range, so treat the number as "extremely high", not exact.)':'')));
  const f=b.heatIndex.f,stops=[[-1e9,0],[80,.1538],[90,.3077],[103,.5077],[125,.8462],[160,1]];let pos=0;
  for(let i=0;i<stops.length-1;i++){const [a,pa]=stops[i],[c,pc]=stops[i+1];if(f<c){pos=i===0?Math.max(0,(f-60)/20)*pc:pa+(f-a)/(c-a)*(pc-pa);break}pos=1}
  $('lMark').style.left=`calc(${(Math.max(0,Math.min(1,pos))*100).toFixed(2)}% - 2px)`}
function status(cls,label,meta){$('lDot').className='dot '+cls;$('lStatus').textContent=label;$('lMeta').textContent=meta||''}
async function send(){const my=++seq;busy=true;$('lSend').disabled=true;status('busy','Sending…');const t0=performance.now();let res=null,code=0,via='';
  if(location.protocol!=='file:'){try{const c=new AbortController(),to=setTimeout(()=>c.abort(),6000);const r=await fetch(path(),{headers:{accept:'application/json'},signal:c.signal});clearTimeout(to);
      if((r.headers.get('content-type')||'').includes('json')){const j=await r.json();if(j&&(j.engine||j.error)){res=j;code=r.status;via='live API'}}}catch(e){}}
  if(!res){const out=RakshaEngine.assess({tempC:T.value,humidity:H.value,aqi:A.value});code=out.status;res=out.status===200?Object.assign({},out.body,{meta:{servedBy:'browser-fallback',note:'API unreachable here, same engine ran locally'}}):out.body;via='in-browser fallback'}
  if(my!==seq)return;const ms=(performance.now()-t0).toFixed(0);
  status(code===200?'ok':'err',code+' '+(code===200?'OK':code===429?'Too many requests':code===400?'Bad request':'Error'),via+' · '+ms+' ms');
  renderJSON(res);summary(res);busy=false;$('lSend').disabled=false}
function changed(){paintInputs();document.querySelectorAll('#labPresets button').forEach(b=>b.setAttribute('aria-pressed','false'));clearTimeout(deb);deb=setTimeout(send,450)}
[T,H,A].forEach(i=>{i.addEventListener('input',paintInputs);i.addEventListener('change',changed)});
$('labPresets').addEventListener('click',e=>{const b=e.target.closest('button[data-p]');if(!b)return;const p=PRESETS[+b.dataset.p];T.value=p[1];H.value=p[2];A.value=p[3];paintInputs();
  document.querySelectorAll('#labPresets button').forEach(x=>x.setAttribute('aria-pressed',x===b));send()});
$('lSend').addEventListener('click',send);
$('lCurl').addEventListener('click',async()=>{const url=(location.protocol.startsWith('http')&&!location.hostname.endsWith('claudeusercontent.com')?location.origin:'https://YOUR-SITE.vercel.app')+path();const cmd=`curl "${url}"`;
  try{await navigator.clipboard.writeText(cmd);window.siteToast&&siteToast('curl command copied')}catch(e){window.siteToast&&siteToast(cmd)}});
paintInputs();
let first=true;new MutationObserver(()=>{if($('p-lab').classList.contains('show')&&first){first=false;send()}}).observe($('p-lab'),{attributes:true,attributeFilter:['class']});
if($('p-lab').classList.contains('show')){first=false;send()}
})();

/* ===== Changelog ===== */
const CHANGELOG=[
 {v:'1.10.0',d:'2026-10-03',t:'A real photo on About',g:{Added:['My photo on the About page, served as a small responsive WebP with location and device metadata stripped. The illustrated avatar stays in the hero.']}},
 {v:'1.9.2',d:'2026-10-03',t:'Whack-a-Bug crash fix',g:{Fixed:['Whack-a-Bug could freeze after grabbing a +3s coffee: the bonus rewound the game clock, which made a bug\'s pop-in size negative and the canvas threw. Bonus time is now added to the round instead.','Every game now recovers from an unexpected error with a fresh-round prompt instead of freezing.']}},
 {v:'1.9.1',d:'2026-10-03',t:'Contact that always works',g:{Added:['Contact dialog with copy email, write in Gmail, open mail app, LinkedIn and résumé, so reaching me works even without a desktop mail app.'],Fixed:['Contact Me only scrolled to the footer and sometimes stopped short.','Navigation labels wrapping onto two lines on mid-size screens.']}},
 {v:'1.9.0',d:'2026-10-03',t:'API Lab and this changelog',g:{Added:['API Lab: a live, public endpoint (GET /api/heat-index) running Raksha\'s real NOAA heat-index engine, with presets, a request builder, copy-as-curl, a band gauge and highlighted JSON. Falls back to the same engine in the browser if the API is unreachable.','Changelog page, linked from the footer and the home page.']}},
 {v:'1.8.0',d:'2026-10-03',t:'Security hardening',g:{Security:['Strict Content Security Policy (self-only scripts, fonts, images) with Trusted Types enforced.','HSTS, frame blocking, nosniff, strict referrer policy, Permissions-Policy, COOP/CORP headers.','AI endpoint: origin check, JSON-only, size cap, per-IP limits, timeout, output filter, no logging.'],Changed:['Fonts and three.js are now self-hosted; the site loads nothing from third parties.','Email is assembled at runtime; the AI box no longer shares the phone number.']}},
 {v:'1.7.0',d:'2026-10-03',t:'Friendlier games',g:{Changed:['All ten games tuned to be a little easier, each with a new twist: wrapping walls and golden stars in Snake, combos in Whack-a-Bug and Bug Hunt, power-ups in Firewall, shields in Deploy Dash, a peek in Memory, undo in 2048 and a hint in Stackle.'],Fixed:['Tech logos that were invisible in light theme.','The roaming python and cursor ring no longer distract while playing.']}},
 {v:'1.6.1',d:'2026-10-03',t:'Playground link fix',g:{Fixed:['The footer wordmark was sitting on top of the Playground link and swallowing clicks.'],Added:['Playground in the main navigation.']}},
 {v:'1.6.0',d:'2026-10-03',t:'Arcade: ten games',g:{Added:['Firewall, Deploy Dash, Commit 2048, Bug Sweeper and Stackle.','Arcade picker with per-game best scores.'],Fixed:['Hero code symbols disappearing after resizing on another page.']}},
 {v:'1.5.0',d:'2026-10-03',t:'Motion and more games',g:{Added:['Floating code symbols behind the hero, a roaming python and an animated cursor, all off for reduced-motion users.','Whack-a-Bug, Stack Memory and Code Typing.']}},
 {v:'1.4.0',d:'2026-10-03',t:'Résumé, certifications and Playground',g:{Added:['One-page résumé download.','Certifications section: Oracle OCI AI Foundations Associate and eight Cisco Networking Academy courses, each viewable.','Theme toggle, copy-email button and smooth page transitions.','Playground with Stack Snake and Bug Hunt.']}},
 {v:'1.3.0',d:'2026-10-02',t:'Focus and the AI box',g:{Added:['"Ask about Aditya" AI box that answers only from my profile.','SEO metadata, structured data and accessibility improvements.'],Removed:['NeerChetak and SBUverse, to focus on Raksha.']}},
 {v:'1.2.0',d:'2026-10-02',t:'Accurate to LinkedIn',g:{Changed:['Experience, education and skills rewritten to match my LinkedIn profile.'],Added:['Licenses & certifications, toolkit and a LeetCode link.']}},
 {v:'1.1.0',d:'2026-10-02',t:'Raksha media',g:{Added:['Real app screenshots captured from the Raksha build.','Interactive 3D model of the Raksha Band.','Illustrated avatar.']}},
 {v:'1.0.0',d:'2026-10-02',t:'First release',g:{Added:['Home, Case Studies, Projects and About pages with routing, theming and responsive layouts.']}}
];
(function(){const box=document.getElementById('clog');if(!box)return;
  box.innerHTML=CHANGELOG.map((r,i)=>`<article class="cl rv"><div class="cl-h"><span class="cl-v">v${r.v}</span><span class="cl-t">${r.t}</span>${i===0?'<span class="cl-latest">Latest</span>':''}<time class="cl-d" datetime="${r.d}">${r.d}</time></div>${Object.entries(r.g).map(([k,items])=>`<div class="cl-g"><b class="${k}">${k}</b><ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')}</article>`).join('');
  const np=document.getElementById('newpill');if(np)np.innerHTML=`<b>v${CHANGELOG[0].v}</b> ${CHANGELOG[0].t} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
})();

/* ===== contact dialog: works with or without a desktop mail app ===== */
(function(){const dlg=document.getElementById('contactDlg');if(!dlg)return;
  const em=(typeof EMAIL!=='undefined'?EMAIL:''+EMAIL+''),subj='Hello Aditya';
  document.getElementById('cdEmail').textContent=em;
  document.getElementById('cdGmail').href='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(em)+'&su='+encodeURIComponent(subj);
  document.getElementById('cdApp').href='mailto:'+em+'?subject='+encodeURIComponent(subj);
  const open=()=>{if(dlg.open)return;if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','');setTimeout(()=>document.getElementById('cdCopy').focus(),30)};
  window.openContact=open;
  document.getElementById('cdX').onclick=()=>dlg.close();
  dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});
  document.getElementById('cdCopy').onclick=async()=>{let ok=false;try{await navigator.clipboard.writeText(em);ok=true}catch(e){}
    if(!ok){try{const t=document.createElement('textarea');t.value=em;t.style.cssText='position:fixed;opacity:0';dlg.appendChild(t);t.select();ok=document.execCommand('copy');t.remove()}catch(e){}}
    const b=document.getElementById('cdCopy');b.textContent=ok?'Copied ✓':'Select it';setTimeout(()=>b.textContent='Copy',1600)};
  document.addEventListener('click',e=>{const a=e.target.closest('[data-contact]');if(!a)return;e.preventDefault();open()},true);
})();

/* preloader */
(function(){const pre=document.getElementById('pre');let seen=false;try{seen=sessionStorage.getItem('xr_pre')==='1'}catch(e){}
 if(reduce||seen){pre.remove();return}
 const g=document.getElementById('greet'),pc=document.getElementById('pct'),bar=document.getElementById('bar');
 const words=[['Hello',0],['नमस्ते',1],['जोहार',1],['Hello',0]];let wi=0;
 const wt=setInterval(()=>{wi=(wi+1)%words.length;g.textContent=words[wi][0];g.classList.toggle('dev',!!words[wi][1])},420);
 const t0=performance.now(),D=1700;
 setTimeout(()=>{if(document.getElementById('pre')){clearInterval(wt);pre.remove();try{sessionStorage.setItem('xr_pre','1')}catch(e){}}},4500);
 (function tick(now){const p=Math.min(1,(now-t0)/D);const e=1-Math.pow(1-p,3);pc.textContent=Math.round(e*100)+'%';bar.style.width=e*100+'%';
  if(p<1)requestAnimationFrame(tick);else{clearInterval(wt);setTimeout(()=>{pre.classList.add('done');try{sessionStorage.setItem('xr_pre','1')}catch(e){}setTimeout(()=>pre.remove(),950)},250)}})(t0);
})();

/* wire obfuscated email links */
(function(){document.querySelectorAll('a[data-mail]').forEach(x=>{x.href='mailto:'+EMAIL});document.querySelectorAll('[data-mail-text]').forEach(x=>{x.textContent=EMAIL});document.querySelectorAll('[data-copy="mail"]').forEach(x=>{x.dataset.copy=EMAIL})})();
