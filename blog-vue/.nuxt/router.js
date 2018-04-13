import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _4504f9d0 = () => import('../pages/App/index.vue' /* webpackChunkName: "pages/App/index" */).then(m => m.default || m)
const _314d36d4 = () => import('../pages/App/about/index.vue' /* webpackChunkName: "pages/App/about/index" */).then(m => m.default || m)
const _17420c50 = () => import('../pages/App/admin/index.vue' /* webpackChunkName: "pages/App/admin/index" */).then(m => m.default || m)
const _7e24c548 = () => import('../pages/App/posts/index.vue' /* webpackChunkName: "pages/App/posts/index" */).then(m => m.default || m)
const _547d284c = () => import('../pages/App/admin/new-post/index.vue' /* webpackChunkName: "pages/App/admin/new-post/index" */).then(m => m.default || m)
const _35651fd6 = () => import('../pages/App/admin/auth/index.vue' /* webpackChunkName: "pages/App/admin/auth/index" */).then(m => m.default || m)
const _ba7eab72 = () => import('../pages/App/posts/_id/index.vue' /* webpackChunkName: "pages/App/posts/_id/index" */).then(m => m.default || m)
const _55777703 = () => import('../pages/App/admin/_postId/index.vue' /* webpackChunkName: "pages/App/admin/_postId/index" */).then(m => m.default || m)
const _1b6387a6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/App",
			component: _4504f9d0,
			name: "App"
		},
		{
			path: "/App/about",
			component: _314d36d4,
			name: "App-about"
		},
		{
			path: "/App/admin",
			component: _17420c50,
			name: "App-admin"
		},
		{
			path: "/App/posts",
			component: _7e24c548,
			name: "App-posts"
		},
		{
			path: "/App/admin/new-post",
			component: _547d284c,
			name: "App-admin-new-post"
		},
		{
			path: "/App/admin/auth",
			component: _35651fd6,
			name: "App-admin-auth"
		},
		{
			path: "/App/posts/:id",
			component: _ba7eab72,
			name: "App-posts-id"
		},
		{
			path: "/App/admin/:postId",
			component: _55777703,
			name: "App-admin-postId"
		},
		{
			path: "/",
			component: _1b6387a6,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
