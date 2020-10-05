import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import NProgresse from 'nprogresse';
import 'nprogresse/style.css';
import './assets/css/theme.css';
import './assets/css/framework.css';
import './assets/css/font-rules.css';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;
AOS.init();
NProgresse.start();

new Vue({
  mounted(){
    NProgresse.done();
  },
  render: h => h(App),
}).$mount('#app');

