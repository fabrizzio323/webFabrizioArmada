const https = require('https');
const fs = require('fs');
const getIcon = (url) => new Promise((resolve) => https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => resolve(data));
}));
Promise.all([
  getIcon('https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/springboot.svg'),
  getIcon('https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/postgresql.svg'),
  getIcon('https://cdn.jsdelivr.net/npm/simple-icons@v11.0.0/icons/jsonwebtokens.svg')
]).then(res => {
  const data = res.map(svg => svg.match(/<path d="([^"]+)"/)[1]);
  fs.writeFileSync('icons.json', JSON.stringify({ spring: data[0], postgresql: data[1], jwt: data[2] }, null, 2));
  console.log("icons dumped");
});
