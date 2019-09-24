
// 1. 導入vue-router 包
import VueRouter from "vue-router"

import account from "./main/Account.vue"
import goodlist from "./main/Goodlist.vue"


import login from "./subcorn/login.vue"
import register from "./subcorn/register.vue"


//3. 創建路由對象
var router = new VueRouter({
    routes:[
        { path: "/account" , 
        component:account,
    children:[
        {path:"login", component:login},
        {path:"register", component:register},
    ]},
        { path: "/goodlist", component: goodlist}
    ]
})

export default router // 把路由對象暴露出去