<template>
    <div class="home">
        <h3>概述</h3>
        <p>Vue 实例从创建到销毁的过程，就是生命周期。也就是从开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。下面是官网中的生命周期照片</p>
        <div class="img">
            <img src="../../../public/img/life.png" alt="">
            <div class="imgright">
                <h3>函数介绍</h3>
                <span>beforeCreate</span>
                <p>在实例初始化之后,进行数据侦听和事件/侦听器的配置之前同步调用</p>
                <span>created</span>
                <p>在实例创建完成后被立即同步调用。在这一步中，实例已完成对选项的处理，意味着以下内容已被配置完毕：数据侦听、计算属性、方法、事件/侦听器的回调函数。然而，挂载阶段还没开始，</p>
                <span>beforeMount</span>
                <p>在挂载开始之前被调用：相关的 render 函数首次被调用。</p>
                <span>mounted</span>
                <p>实例被挂载后调用，这时 el 被新创建的 vm.$el 替换了。如果根实例挂载到了一个文档内的元素上，当 mounted 被调用时 vm.$el 也在文档内。</p>
                <span>beforeUpdate</span>
                <p>在数据发生改变后，DOM 被更新之前被调用。这里适合在现有 DOM 将要被更新之前访问它，比如移除手动添加的事件监听器。</p>
                <span>updated</span>
                <p>在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。</p>
                <span>beforeDestroy</span>
                <p>实例销毁之前调用。在这一步，实例仍然完全可用。</p>
                <span>destroyed</span>
                <p>实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。</p>
                <h3>示例</h3>
                <pre>new Vue({
  data: {
    a: 1
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"</pre>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .img{
        display: flex;
        width: 100%;
    }
    .imgright{
        width: 100%;
    }
</style>