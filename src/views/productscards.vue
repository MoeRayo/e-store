<template>
  <div>
    <div v-for="product in products" :key="product.id" class="dib">
      <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-90-m w-90-l mw5 center">
        <cld-image :cloudName="(cloudName)" :publicId="product.public_id" width="400" height="250" crop="scale" />
        <div class="pa2 ph3-ns pb3-ns bg-washed-red">
          <div class="dt w-100 mt1">
            <div class="">
              <h3 class="f6 mv0">{{product.name}}</h3>
            </div>
            <div class="">
              <p class="f5 mv1">₦{{product.price}}</p>
            </div>
          </div>
          <div>
            <button class="bg-black white bn pa2 w-70 br2 f7 fw2 mv2 pointer" @click="addProductToCart(product)"><i class="fab fa-opencart mr2"></i>Add to cart</button>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>





<script>
export default {
    name: 'product',
    data() {
    return {
      cloudName: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME
      }
    },
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