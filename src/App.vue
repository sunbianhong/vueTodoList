<template>
  <div id="app">
    <router-link to="/normal">show normalTodoList</router-link><br/>
    <router-link to="/eventbus">show eventBusTodoList</router-link><br/>
    <!-- <router-link to="/vuextodo">show vuexTodoList</router-link> -->
    <p>test1</p>
    <div class="childBox">
        <router-view/>
    </div>
  </div>
</template>

<script>  
export default {
  name: 'App',
  data() {
    return { }
  },
  methods: {
    showAdvice: function (advice) {
      alert(advice)
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 10px;
}
.childBox{
  padding: 10px;
  background-color: #ffa;
  height: 300px;
}
</style>

