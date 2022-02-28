const debug = process.env.NODE_ENV !== 'production';
const vercelProd = process.env.DEPLOY_ENV === 'vercel';

module.exports = {
  reactStrictMode: true,
  assetPrefix: !(debug || vercelProd) ? '/tiny-github-page/' : '',
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  }
};
