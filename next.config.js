if (process.env.NODE_ENV === 'production') {
  module.exports = {
    assetPrefix: '/static-assets/app',
  };
} else {
  module.exports = {
    async rewrites() {
      return [
        {
          source: '/yourapp/:path*',
          destination: '/public/:path*',
        },
      ];
    },
  };
}
