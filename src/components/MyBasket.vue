<template>
  <div class="cart">
    <h2>Shopping Cart</h2>

    <div v-for="(product, index) in myBasket" :key="index" class="cart-item">
      <div class="cart-item-image">
        <img :src="product.images[0]" :alt="product.name" />
      </div>
      <div class="cart-item-details">
        <h3>{{ product.title }}</h3>
        <p>{{ product.price }} $ </p>
        <div class="cart-item-quantity">
          <label for="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" v-model="quantity[index]" :max="product.stock">
        </div>
        <button @click="store.removeProduct(product)" class="cart-item-remove">Remove</button>
      </div>
    </div>

    <div class="cart-total">
      <h4>Total : {{ totalPrice }}</h4>
    </div>
  </div>
  <div class="payment-page">
    <h1>Payment Information</h1>
    <form class="payment-form">
      <label for="card-number">Card Number:</label>
      <input type="text" id="card-number" placeholder="Enter card number" required />
      <label for="card-holder">Card Holder Name:</label>
      <input type="text" id="card-holder" placeholder="Enter card holder name" required />
      <label for="expiry-date">Expiry Date:</label>
      <input type="text" id="expiry-date" placeholder="MM / YY" required />
      <label for="cvv">CVV:</label>
      <input type="text" id="cvv" placeholder="Enter CVV" required />
      <button @click="store.congrats()" type="submit">Pay Now</button>
    </form>
  </div>

</template>

<script>
import { useProductStore } from "../store/main";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export default {
  setup() {
    const store = useProductStore();
    const { allProducts, isLoading, myBasket } = storeToRefs(store);
    const quantity = ref(myBasket.value.map(() => 1));

    return { allProducts, isLoading, myBasket, store, quantity };
  },

  computed: {
    totalPrice() {
      let total = 0;
      if (this.myBasket && this.myBasket.length > 0) {
        this.myBasket.forEach((product,index ) => {
          total += product.price * this.quantity[index];
        });
      }
      return total;
    },
  },
};
</script>


<style scoped>
.payment-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}

.payment-form {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.payment-form label {
  margin-bottom: 10px;
  font-weight: bold;
}

.payment-form input[type="text"] {
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

.payment-form button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  cursor: pointer;
}

.payment-form button[type="submit"]:hover {
  background-color: #0069d9;
}

.cart-item-quantity {
  margin-bottom: 5px;
}

.cart-item-quantity label {
  margin-right: 5px;
}

.cart-item-quantity input {
  width: 50px;
}
.cart {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
}

.cart h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.cart ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.cart-item-image {
  margin-right: 10px;
}

.cart-item-image img {
  max-width: 100px;
}

.cart-item-details h3 {
  font-size: 18px;
  margin: 0 0 5px;
}

.cart-item-details p {
  margin: 0;
}

.cart-item-remove {
  background-color: #ff4b4b;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: auto;
  cursor: pointer;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.cart-total h4 {
  font-size: 24px;
  margin: 0;
}

.checkout-button {
  background-color: #1abc9c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20
}
</style>