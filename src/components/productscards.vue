<template>
    <div>
      <div class="col" v-for="product in products" :key="product.id">
          <p>{{product.id}}</p>
      </div>

    </div>
</template>

<script>
export default {
    name: 'product',
    computed: {
        products() {
            return this.$store.getters.availableProducts
        }
    },
    methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product)
      let productAlert = document.getElementById('alert')
      // let al = document.getElementById('proa');
      // al.style.display = 'block';
      if (product.quantityInStock <= 2) {
        productAlert.style.display = 'inline-block'
        }
    }
  },
  mounted() {
    this.loading = true
    this.$store.dispatch('fetchProducts').then(() => (this.loading = false))
  }
}
</script>