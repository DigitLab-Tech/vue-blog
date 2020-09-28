import Vue from 'vue'
import App from './App.vue'
import './assets/css/theme.css';
import './assets/css/framework.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

