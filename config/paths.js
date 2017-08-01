const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const publicDir = path.join(__dirname, '..', 'public');
const baseComponentDir = path.join(srcDir, 'components');

module.exports = {
  srcDir,
  publicDir,
  baseComponentDir
};
