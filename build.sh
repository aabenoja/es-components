cd packages/es-components/

# install packages
if npm --version | grep '^6\.'; then
  echo "npm ci"
  npm ci
else
  echo "npm install"
  npm install
fi
npm run ci
