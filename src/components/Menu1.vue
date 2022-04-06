<template>
  <div class="hello">
    <el-menu default-active="1-4-1" background-color='#2b2f3e' text-color="#fff" active-text-color="#ffd04b" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" >
      <h2>文档笔记</h2>
      <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :index="item.path+''" :key="item.path">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :index="item.paht+''" :key="item.paht">
        <template slot="title">
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="(subitem,subindex) in item.children" :key="subitem.path">
          <el-menu-item :index="subindex+''" @click="clickMenu(subitem)">{{subitem.label}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
      return {
        isCollapse: false,
        one:[
          {
            name:"home",
            path:"/",
            url:'Home/Home',
            label:'我的',
            icon:'document'
          },
          {
            name:"vue",
            path:"/vue",
            url:'vue/vue',
            label:'vue',
            icon:'document',
            children:[
              {
                name:"VueCli",
                path:"/VueCli",
                url:'vue/vue',
                label:'Vue-Cli',
                icon:'document',
              },
              {
                name:"VueDea",
                path:"/VueDea",
                url:'vue/vue',
                label:'Vue-Dea',
                icon:'document',
              },
              {
                name:"VueX",
                path:"/VueX",
                url:'vue/VueX',
                label:'VueX',
                icon:'document',
              }
              ,
              {
                name:"VueLife",
                path:"/VueLife",
                url:'vue/VueLife',
                label:'Vue生命周期钩子函数',
                icon:'document',
              }
            ]
          }
        ]
      };
    },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      this.$router.push({
        name : item.name
      })
    }
  },
 computed:{
   noChildren(){
     return this.one.filter(item => !item.children)
   },
   hasChildren(){
     return this.one.filter(item => item.children)
   }
 }
}
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-vertical-demo{
    height: 100vh;
    border: 0px;
  }
  .el-menu-vertical-demo h2{
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
.el-menu li{
  text-align: left;
}
.el-menu-item.is-active{
  background: rgb(34, 38, 50)!important;
}
</style>
