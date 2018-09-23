import VueLazyLoad from 'vue-lazyload'
import Vue from 'vue'
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  error: require("@/static/error.png"),
  loading:require("@/static/loading.png"),
  listenEvents: [ 'scroll', 'mousewheel' ],
  attempt: 1,
  lazyComponent: true
});
