<template>
    <div class="home">
        <h3>概述</h3>
        <p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。（简称：用来存储全局变量的地方）</p>
        <h3>属性介绍</h3>
        <span>state属性</span>
        <pre>import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
      count:1,
  }
})</pre>
        <span>getters属性</span>
        <pre>
export default new Vuex.Store({
  getters: {//用来对共享数据进行计算，相当于computer
    countsqrt(state){
      return state.count * state.count;
    }
  }
})</pre>
        <span>mutations属性</span>
        <pre>
export default new Vuex.Store({
 mutations: {//用来定义对共享数据的修改方法 在这里面定义饿方法都有一个默认参数 默认参数会将状态对象传递给方法
    add(state,count1){
      state.count += count1;
    }
    jian(state){
        state.count--;
    }
  },
})</pre>
        <h3>组件中应用</h3>
        <pre>
&lt;template&gt;
  &lt;div class="home"&gt;
    { {this.$store.state.count} }
    { {this.$store.getters.countsqrt} }
    &lt;span @click="add1"&gt;&lt;/span>&gt;
    &lt;span @click="jian"&gt;&lt;/span>&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
......
export default {
  ......
  methods:{
    add1(){
      this.$store.commit('add',10)
    }
    jian1(){
        this.$store.commit('jian')
    }
  }
}
&lt;/script&gt;
</pre>
    </div>
    
</template>