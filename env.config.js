const prod = process.env.NODE_ENV === 'production'
const vercelProd = process.env.DEPLOY_ENV === 'vercel'

const localhost = 'http://localhost:3000/'
const apiDomain = prod ? (!vercelProd ? '/tiny-github-page/' : '') : localhost

module.exports = {
  LOCAL_DOMAIN: localhost,
  BACKEND_DOMAIN: apiDomain
}
