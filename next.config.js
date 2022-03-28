const env = require('./env.config')

module.exports = (phase) => {
  return {
    env,
    reactStrictMode: true,
    assetPrefix: env.BACKEND_DOMAIN,
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/users',
          permanent: true,
        },
        {
          source: '/error',
          destination: '/404',
          permanent: true,
        },
      ]
    }
  }
};
