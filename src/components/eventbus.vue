<template>
<div>  
    <p>由子组件渲染的值</p>
    <childstate v-on:setitems="changeitme"/>
    <ul>
      <li v-for="item in items"> {{ item }} </li>
    </ul>
</div>
</template>
<script>
import Vue from 'vue'
Vue.component('childstate',{
  data() {
    return {
      chose: true
    }
  },
  methods: {
    setitems(){
      this.$emit('setitems',this.chose);
      this.chose = !this.chose
    }
  },
  template: '<button v-on:click="setitems">我是子组件，修改父值</button>'
});
export default {
  name: 'App',  
  data: function () {
    return {
      items0: ['event', 'event', 'event'],
      items1: [ 'event1', 'event1', 'event1' ],
      items: []
    }
  },
  methods: {
    changeitme: function (bol) {
      bol ? this.items = this.items0 : this.items = this.items1
    }
  },
}
</script>