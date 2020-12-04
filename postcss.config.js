module.exports = {
  plugins: [
    require('postcss-import')({
      addModulesDirectories: ['node_modules', 'src'],
    }),
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
};
