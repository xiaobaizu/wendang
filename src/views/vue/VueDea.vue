<template>
  <div class="home">
    <h3>文件介绍</h3>
    <img src="../../../public/img/wj.jpg" alt="">
    <ul>
        <li>public 静态资源文件夹    打包时不会被压缩</li>
        <li>assets 资源文件夹 放css js 或者logo</li>
        <li>components 组件</li>
        <li>router 路由</li>
        <li>store vuex</li>
        <li>views 页面</li>
        <li>app。vue  主vue页面框架</li>
        <li>main。js 主配置文件</li>
    </ul>
  </div>
</template>
<script>
export default {
    name:"VueDea",
    data(){
      return{}
    }
}
</script>
<style scoped>
    ul{
        text-decoration: none;
        list-style: none;
    }
    ul li{
        padding: 10px 0px 0px 10px;
    }
</style>