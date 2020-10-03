import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import './assets/css/theme.css';
import './assets/css/framework.css';
import './assets/css/font-rules.css';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;

new Vue({
  created(){
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app');

