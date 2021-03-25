//main.js
import Vue from 'vue';
import App from './App.vue';
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber);
Vue.filter("upperCase", function(value){
  return value.toUpperCase();
});
Vue.mixin({
  created() {
    console.log("global mixin")
    //全体に反映されるので使い所に気をつける基本的には使わない
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
