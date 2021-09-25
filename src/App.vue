<template>
  <div id="app">
    <navigation></navigation>
    <router-view />

  </div>
</template>

 <script>
  import navigation from "@/components/nav.vue";


export default {
  name: 'App',
  components: {
    navigation,
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

</style>

