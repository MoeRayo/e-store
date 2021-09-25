<template>
  <div>
    <header class="bg-white black-80 tc pt4 avenir">
      <a href="/">
        <cld-image public-id="store/logo_ja9ugi"></cld-image>
      </a>
      <h1 class="mt2 mb0 baskerville i fw1 f1 mh2">Rayo E-Store</h1>
      <h2 class="mt2 mb0 f6 fw4 ttc tracked i">Your satisfaction is our utmost pleasure...</h2>
      <nav class="bt bb tc mw7 center mt4 flex justify-between flex-wrap">
        <a class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pv3 ph2 ph4-l" href="/">Home</a>
        <a class="f6 f5-l link bg-animate black-80 hover-bg-washed-red dib pv3 ph2 ph4-l" v-if="$auth.isAuthenticated" href="">
          <router-link class="link black" to="/products">Products</router-link>
        </a>
        <a class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pv3 ph2 ph4-l" v-if="$auth.isAuthenticated">
          <router-link class="link black relative" to="/cart">Cart <span class="bg-light-purple white br-100 absolute cart-position tc">{{cartNumber}}</span> </router-link>
        </a>
        <a class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l pointer" v-if="!$auth.isAuthenticated && !$auth.loading">
          <span id="qsLoginBtn" @click.prevent="login"><i class="fas fa-sign-in-alt mr2"></i>Login</span>
        </a>
        <a class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pv3 ph2 ph4-l pointer"  v-if="$auth.isAuthenticated">
          <router-link class="link black" to="/profile">Profile</router-link>
        </a>     
        <a class="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pv3 ph2 ph4-l pointer"  v-if="$auth.isAuthenticated">
          <img :src="$auth.user.picture" class="br-100 w1 h1" alt=""> <span id="qsLogoutBtn" href="#" @click.prevent="logout"> Log out </span>
        </a>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: 'navigation',
  computed: {
    cartNumber(){
       return this.$store.getters.cartIteming
    }
  },

  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout();
      this.$router.push({ path: "/" });
    }
  }
}
</script>
<style>
.cart-position{
  bottom: 8px;
  left: 32px;
  padding: 2px;
}
</style>