module.exports = (ctx) => ({
  map: ctx.options.map,
  plugins: {
    'postcss-import': {},
    'postcss-unprefix': ctx.env === 'production' ? {} : false,
    'autoprefixer': ctx.env === 'production' ? {} : false,
    'css-mqpacker': ctx.env === 'production' ? {} : false,
    'cssnano': ctx.env === 'production' ? {
      preset: 'default',
      discardComments: {
        removeAll: true,
      },
    } : false
  }
})
