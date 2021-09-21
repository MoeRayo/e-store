<template>
    <div>

        <div class="ph4">
    <h1 class="silver">Your Cart</h1>

  <div class="overflow-auto">
    <table class="f6 w-100 mw8 center" cellspacing="0">
      <thead>
        <tr class="stripe-dark">
          <th class="fw6 tl pa3 bg-white">Product</th>
          <th class="fw6 tl pa3 bg-white">Price</th>
          <th class="fw6 tl pa3 bg-white">Quantity</th>
          <th class="fw6 tl pa3 bg-white">Total</th>
        </tr>
      </thead>
      <tbody class="lh-copy">
        <tr class="stripe-dark" v-for="product in products" :key="product.id">
          <td class="pa3">{{product.title}}</td>
          <td class="pa3">{{product.price}}</td>
          <td class="pa3">
            <input v-model.number="product.quantity" min="1" :max="product.newQuantityInStock" type="number" id="quantity" class="form-control w-75 d-block" >
          </td>
          <td class="pa3">{{product.price *  product.quantity}}</td>
          <td class="pa3">
              <i @click="removeProduct(product)" id="delete-item" class="fas fa-window-close text-danger fa-2x d-block ms-4"></i>
          </td>

        </tr>
      </tbody>
    </table>
  </div>
    <div v-if="!products.length">
        <p class="bg-washed-red pv3 ph2 br2">No item in your cart!</p>
    </div>
    <div class="tl mw8 center w-100">
        <div v-if="products.length>0" class="">
            <p class=" f4"><span class="green fw6">Total:</span> {{total}}</p>

        <paystack class="bg-light-yellow gray pv2 ph3 bn br2 mr2 di-ns db w-100 w4-ns mb3" :amount="total*100" :full_name="$auth.user.name" :email="$auth.user.email" :paystackkey="PUBLIC_KEY" :reference="reference" :callback="processPayment" :close="close">
            <i class="fas fa-money-bill-wave mr2"></i>Pay
        </paystack>
        <button class="bg-washed-red bn br2 pv2 ph3 w-100 w5-ns red di-ns db mr3 link" @click="removeCartProducts()">
            <i class="fas fa-trash" ></i> Empty Cart
        </button>
        
        </div>

        <router-link to="/products" class="link bg-green mt3 pv2 ph3 bn br2 white tc db dib-ns"><i class="fas fa-space-shuttle mr2"></i>Continue Shopping</router-link>
    </div>

</div>


    </div>
</template>

<script>
import paystack from 'vue-paystack';
export default {
    name: 'checkout',
    data: () => {
        return {
            amount: null,
            email: null,
            full_name: null,
            PUBLIC_KEY: 'pk_test_b75e40ec3847c3f94d28edbd98492c1687960563'
        };
    },
    components: {
        paystack
    },
    computed: {
        reference() {
            let text = "";
            let possible =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (let i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
         },
        products () {
            return this.$store.getters.cartProducts
        },
        total () {
            return this.$store.getters.cartTotal
        },
        cartNumber(){
            return this.$store.getters.cartIteming
        }
    },
    methods: {
        processPayment: () => {
        window.alert("Payment recieved")
        },
        close: () => {
            console.log("You closed checkout page")
        },
        removeProduct(product){
            this.$store.dispatch('removeProduct', product)
        },
        removeCartProducts(){
            console.log('check')
            this.$store.dispatch('removeCartProducts')
            let ar = document.getElementById('alert');
            ar.style.display = 'block';
        },
    } 

}
</script>