import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VuePaginate from 'vue-paginate'
import VueRouter from 'vue-router'
import PostDetail from './PostDetail.vue'
import Blog from './Blog.vue'

//graphql i apollo
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
  // URL to graphql server, you should use an absolute URL here
  uri: 'https://graphql-pokemon.now.sh'
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})


// ENABLE USE 3RD PARTY PLUGINS
Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.use(VueRouter);

Vue.use(VueApollo)

// ENABLE SINGLE PAGE APP ROUTING
const routes = [
	{ path: '/', component: Blog },
	{ path: '/post/:id', component: PostDetail }
];

const router = new VueRouter({
  mode: 'history',
  routes
})

// INIT APP
new Vue({
  el: '#app',
  router,
  apolloProvider,
  render: h => h(App)
})
