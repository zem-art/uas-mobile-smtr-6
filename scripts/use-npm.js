const fs = require('fs');
const { execSync } = require('child_process');

console.log('Preparing npm for EAS Build...');

// Disable Corepack to bypass packageManager enforcement
try {
  execSync('corepack disable', { stdio: 'inherit' });
  console.log('Corepack disabled.');
} catch (error) {
  console.warn('Failed to disable Corepack, continuing...');
}

// Remove conflicting lockfiles
const lockfiles = ['pnpm-lock.yaml', 'yarn.lock', 'package-lock.json'];
lockfiles.forEach((file) => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
    console.log(`${file} deleted.`);
  }
});

// Remove node_modules for a clean install
if (fs.existsSync('node_modules')) {
  fs.rmSync('node_modules', { recursive: true, force: true });
  console.log('node_modules deleted.');
}

// Run npm install to generate package-lock.json
try {
  execSync('npm install --package-lock-only', { stdio: 'inherit' });
  console.log('npm install completed, package-lock.json generated.');
} catch (error) {
  console.error('Failed to run npm install:', error);
  process.exit(1);
}