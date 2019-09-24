<template>
<div> 
    <h1>這是Account組件</h1>


    <router-link to="/account/login">登入</router-link>
    <router-link to="/account/register">註冊</router-link>
    <router-view></router-view>
</div>

</template>

<script>

</script>

<style lang="scss" scoped>
/* 普通的 style 標籤 只支持普通的樣式，如果想要啟用scss或less，需要為style元素，設置lang元素*/
/*body {
    div{
        font-style : italic
    }
}*/
// 只要style 標籤，是在組件.vue組件中定義的，那麼推薦都為style 開啟scope屬性
</style>