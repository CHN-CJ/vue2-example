import Vue from 'vue'
import App from './App.vue'
import MyUI from '../modules/my-ui';

/* 
按需加载
*/
Vue.use(MyUI, {
  components: [
    'MyButton',
    'MyInput'
  ]
});

// Vue.use(MyUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
