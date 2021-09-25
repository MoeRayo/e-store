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
                <td class="pa3">₦{{product.price}}</td>
                <td class="pa3">
                    <input v-model.number="product.quantity" min="1" :max="product.newQuantityInStock" type="number" id="quantity" class="form-control w-75 d-block" >
                </td>
                <td class="pa3">₦{{product.price *  product.quantity}}</td>
                <td class="pa3">
                    <i @click="removeProduct(product)" id="delete-item" class="fas fa-window-close text-danger fa-2x d-block ms-4"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      <div v-if="!products.length" class="mw8 center">
          <p class="bg-washed-red pv3 ph2 br2">No item in your cart!</p>
      </div>
      <div class="tl mw8 center w-100">
        <div v-if="products.length>0" class="">
          <p class=" f4"><span class="green fw6 mr2">Total:</span>₦{{total}}</p>
            <!-- PAYSTACK COMPONENT BUTTON -->
          <paystack class="bg-light-yellow gray pv2 ph3 bn br2 mr2 di-ns db w-100 w4-ns mb3" :amount="total*100" :full_name="$auth.user.name" :email="$auth.user.email" :paystackkey="PUBLIC_KEY" :reference="reference" :callback="processPayment" :close="close">
              <i class="fas fa-money-bill-wave mr2"></i>Pay
          </paystack>
          <button class="bg-washed-red bn br2 pv2 ph3 w-100 w5-ns red di-ns db mr3 link" @click="removeCartProducts()">
              <i class="fas fa-trash"></i> Empty Cart
          </button>
        </div>
        <router-link to="/products" class="link bg-green mt3 pv2 ph3 bn br2 white tc db dib-ns"><i class="fas fa-space-shuttle mr2"></i>Continue Shopping</router-link>
      </div>
        <!-- MODAL FOR SUCCESSFUL AND FAILED TRANSACTIONS -->
      <div id="myModal" class="modal">
        <div class="modal-content tc br3">
          <section id="transaction-success">
            <paymentsuccess />
          </section>
          <section id="transaction-failed">
            <paymentfailed />
          </section>
          <section id="transaction-incomplete">
            <span class="close pointer fr b no-underline" @click="onModalNone">&times;</span>
            <div class="tc">
              <img src="https://res.cloudinary.com/moerayo/image/upload/v1632095970/e-store/logo_ja9ugi.png" class="mt0" alt=""> 
              <p>
                Transaction Incomplete <br>
                <span class="i"> Please try again...</span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paystack from 'vue-paystack';
import paymentsuccess from '@/components/payment-success';
import paymentfailed from '@/components/payment-failed';
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
    paystack,
    paymentsuccess,
    paymentfailed
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
    onModalNone () {
      const modal = document.getElementById('myModal')
      modal.style.display = 'none'
    },
    processPayment: (response) => {
      const modal = document.getElementById('myModal')
      const transactionSuccess = document.getElementById(
        'transaction-success'
      )
      const transactionFailed = document.getElementById('transaction-failed')
      const transactionIncomplete = document.getElementById(
        'transaction-incomplete'
      )
      if (response.status === 'success') {
        modal.style.display = 'block'
        transactionIncomplete.style.display = 'none'
        transactionSuccess.style.display = 'block'
        setTimeout(function () {
          location.reload()
        }, 5000)
      } else {
        modal.style.display = 'block'
        transactionFailed.style.display = 'block'
      }
    },
    close: () => {
      const modal = document.getElementById('myModal')
      const transactionIncomplete = document.getElementById(
        'transaction-incomplete'
      )
      modal.style.display = 'block'
      transactionIncomplete.style.display = 'block'
    },
    removeProduct(product){
      this.$store.dispatch('removeProduct', product)
    },
    removeCartProducts(){
      this.$store.dispatch('removeCartProducts')
    },
  } 
}
</script>

<style scoped>
.modal {
  /*display: none; Hidden by default */
  display: none;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 150px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  line-height: 1.5;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 25%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  font-size: 28px;
}

.close:hover,
.close:focus {
  color: #000;
}
#transaction-success,
#transaction-failed,
#transaction-incomplete {
  display: none;
}

@media (max-width: 1200px) {
  .modal-content {
    width: 40%;
  }
}

@media (max-width: 640px) {
  .modal-content {
    width: 60%;
  }
}

@media (max-width: 420px) {

  .modal-content {
    width: 80%;
  }
}

</style>