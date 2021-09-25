<template>
  <div>
    <div v-for="product in products" :key="product.id" class="dib">
      <article class="br2 ba dark-gray b--black-10 mv3 w-100 w-90-m w-90-l mw5 center">
        <cld-image :publicId="product.public_id" loadinng="lazy">
          <cld-placeholder 
            type="blur">
          </cld-placeholder>
          <cld-transformation height="250" width="250" crop="fill" />
          <cld-transformation :overlay="{url: 'https://res.cloudinary.com/moerayo/image/upload/v1632557532/store/logo-bgnone_kdje7n.png'}" width="0.4" gravity="south_east"/>
        </cld-image>
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
  computed: {
    products() {
      return this.$store.getters.availableProducts
    }
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product)
    }
  },
  mounted() {
    this.$store.dispatch('fetchProducts')
  }
}
</script>