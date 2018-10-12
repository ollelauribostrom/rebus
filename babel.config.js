module.exports = api => {
  api.cache(true);

  return {
    presets: [['@babel/preset-env', { targets: '> 1%, not dead' }]]
  };
};
