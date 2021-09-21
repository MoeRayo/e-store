<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
    <footing></footing>

  </div>
</template>

 <script>
  import navigation from "@/components/nav.vue";
  import footing from "@/components/footer.vue";


export default {
  name: 'App',
  components: {
    navigation,
    footing
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
}
/* chrome: removes the number type inner anchor  */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox: removes the number type inner anchor */
input[type="number"] {
  -moz-appearance: textfield;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

