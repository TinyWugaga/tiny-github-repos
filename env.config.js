const prod = process.env.NODE_ENV === 'production'

const localhost = 'http://localhost:3000/'
const apiDomain = prod ? process.env.DEPLOY_DOMAIN : localhost

const tinyPage ='https://tiny-box.notion.site/Hello-This-is-Tiny-Box-cd0c13d727ec4c7197d91b7346ac57ab'

module.exports = {
  LOCAL_DOMAIN: localhost,
  BACKEND_DOMAIN: apiDomain,
  TINY_PAGE: tinyPage
}
