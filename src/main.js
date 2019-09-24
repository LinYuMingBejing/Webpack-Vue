import Vue from "vue"
import VueRouter from "vue-router"
// 2. 導入app組件
Vue.use(VueRouter)
import app from "./app.vue"
// 手動安裝 VueRouter


// 導入路由 自定義模塊
import router from "./router.js"


var vm = new Vue({
    el:"#app",
    render: c=>c(app), // render 會把el指定的容器中，所有的內容都清空，所以不要把路由的router-view和router-link直接寫el所控制的路由中
    router //4. 將路由對象掛載到vm上
})

// 注意 : App 這個組件，是透過VM實力的render函數，渲染出來的，remder函數如果要渲染組件，渲染出來的組件，只能放到el:"#app" 所指定的元素中
// Account 和 Goodlist 組件，是透過路由匹配監聽到，所以，這兩個組件，只能展示到屬於路由的<router-view></router-view>







