<template>
  <div class="home">
    <menu1></menu1>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import menu1 from '@/components/Menu1.vue'
export default {
  name: 'main1',
  components: {
    menu1
  },
  methods:{
    
  }
}
</script>
<style >
  h3{
    margin: 10px 0 ;
    padding: 10px;
    background: #009688;
    border-left: 4px solid #00796b;
    color: #fff;
    font-size: 14px;
    transition: 0.6s;
    text-align: left;
  }
  .home{
    width: auto;
    height: auto;
    display: flex;
  }
  .home .content span {
    font-size: 20px;
    margin: 0 10px;
    padding: 8px 10px;
    color: #0865BB;
  }
  .content{
    width: 98%;
    padding: 0% 1%;
    height: 100vh;
    overflow-y: scroll;
  }
  .content .home{
    display: flex;
    flex-flow: column;
    text-align: left;
  }
  .content p{
    color: #4E546B;
    font-size: 14px;
    line-height: 25px;
    width: 97%;
    margin: auto;
  }
  .content .home img{
    width: 400px;
    padding: 20px 20px 0px 0px;
  }
  ::-webkit-scrollbar {
    width: 8px !important;
    background-color: #f6f6f6 !important;
    opacity: 1 !important;
  }
  ::-webkit-scrollbar-thumb {
    width: 8px !important;
    background-color: #4E546B !important;
    opacity: 1 !important;
  }
  pre{
    margin: 10px;
    padding: 10px;
    background: #f8f8f8;
    border: 1px solid #f0f0f0;
    color: #333;
    font: 13px/23px Consolas, 'Lucida Sans Typewriter', 'Lucida Console', Monaco, 'Bitstream Vera Sans Mono', monospace;
  }
</style>
