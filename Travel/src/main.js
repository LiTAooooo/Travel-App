import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import fastClick from 'fastclick';
import 'swiper/dist/css/swiper.css';
import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import 'babel-polyfill';
import store from './store';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
