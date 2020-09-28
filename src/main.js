import Vue from 'vue'
import App from './App.vue'
import "fontsource-nunito/400-normal.css"
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.filter("formatNumber", (number) => {
  return number.toLocaleString("id-ID");
})

Vue.filter("firstUppercase", (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
})

Vue.use(Toasted);

new Vue({
  render: h => h(App),
}).$mount('#app')
