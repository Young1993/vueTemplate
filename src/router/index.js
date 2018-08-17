const Index = r => require(['../views/index'], r)
const Search = r => require(['../views/search'], r)

// 页面路由
const routes = [{
  path: '',
  redirect: {
    name: 'index'
  }
}, {
  path: '/',
  component: Index,
  name: 'index',
  meta: {title: '定制公交'}
}, {
  path: '/search',
  component: Search,
  name: 'search',
  meta: {title: '查询'}
}]

// 404 页
// routes.push({
//   path: '*',
//   component: error,
//   name: 'error',
//   meta: {
//     title: '众城通'
//   }
// })

export default routes
