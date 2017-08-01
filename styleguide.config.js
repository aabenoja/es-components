const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const version = require('./package.json').version;
const { baseComponentDir, publicDir } = require('./config/paths');

module.exports = {
  assetsDir: 'public',
  styleguideDir: 'docs',
  title: `Exchange Solutions React Components v${version}`,
  template: 'config/template.html',
  sections: [
    {
      name: 'Base',
      components: () => [
        path.join(baseComponentDir, 'base/icons/Icon.js')
      ],
      sections: [{
        name: 'Loaders',
        content: path.join(baseComponentDir, 'base/loaders/Loaders.md'),
        components: path.join(baseComponentDir, 'base/loaders/**/*.js')
      }]
    },
    {
      name: 'Containers',
      content: path.join(baseComponentDir, 'containers/Containers.md'),
      components: path.join(baseComponentDir, 'containers/**/*.js')
    },
    {
      name: 'Controls',
      components: path.join(baseComponentDir, '/controls/**/*.js')
    },
    {
      name: 'Navigation',
      components: path.join(baseComponentDir, '/navigation/**/*.js')
    },
    {
      name: 'Patterns',
      content: path.join(baseComponentDir, 'patterns/Patterns.md'),
      components: path.join(baseComponentDir, 'patterns/**/*.js')
    }
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from 'es-components';`;
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js$/, '.md');
  },
  skipComponentsWithoutExample: true,
  context: {
    dateFormat: 'date-fns/format'
  },
  webpackConfig: require('./config/webpack.config.js'),
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.join(publicDir, 'webfonts'),
          to:  path.join(webpackConfig.output.path, 'webfonts')
        }
      ])
    );
    return webpackConfig;
  },
  styles: {
    Playground: {
      preview: {
        fontFamily: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        fontSize: '18px'
      }
    }
  }
};
