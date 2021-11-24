const { environment } = require('@rails/webpacker');
const typescript = require('./loaders/typescript');

environment.loaders.prepend('typescript', typescript);

const esBuildUse = [
  {
    loader: require.resolve('esbuild-loader'),
    options: {
      loader: 'tsx',
      target: 'es2015',
    },
  },
];

const customConfig = {
  resolve: {
    fallback: {
      dgram: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
    },
  },
};

['node.dgram', 'node.fs', 'node.net', 'node.tls', 'node.child_process'].forEach((e) => environment.config.delete(e));

environment.config.merge(customConfig);

environment.loaders.get('babel').use = esBuildUse;
environment.loaders.get('nodeModules').use = esBuildUse;

module.exports = environment;
