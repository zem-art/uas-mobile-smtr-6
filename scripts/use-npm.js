const fs = require('fs');

console.log('🔁 [EAS] Switching to npm for native build..!!!!');

const pkgPath = './package.json';
const pkg = require(pkgPath);

pkg.packageManager = 'npm@9.6.7'; // atau versi npm stabil kamu

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
