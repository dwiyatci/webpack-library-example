module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'Chrome >= 57',
            'Firefox >= 52',
            'Edge >= 12',
            'Explorer >= 11',
            'Safari >= 10',
          ],
        },
        // modules: 'commonjs',
      },
    ],
  ];
  const plugins = ['add-module-exports'];

  return {
    presets,
    plugins,
  };
};
