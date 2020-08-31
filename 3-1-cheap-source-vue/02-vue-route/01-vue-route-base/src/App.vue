<template>
  <div id="app">
    <div>
      <img src="@/assets/logo.png" alt="" srcset="">
      <div id="nav">
        <router-link to="/">Index</router-link> |
        <router-link to="/blog">Blog</router-link> |
        <router-link to="/photo">Photo</router-link> |
        <router-link to="/detail">detail</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
