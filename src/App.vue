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
    navigation
  }
}
</script>

<style>

</style>
