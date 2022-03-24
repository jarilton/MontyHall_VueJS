import Vue from "vue";
import App from './App'

new Vue({
    render: h => h(App),
    el: "#app",
    reRender(createElement) {
        return createElement(App)
    } 
}).$mount("#app")