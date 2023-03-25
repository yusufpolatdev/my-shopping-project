<template>
  <div>
<h4 class="d-flex justify-content-center"> SEARCH </h4>
    <div class="search-container">
      <input type="text" v-model="searchQuery" id="search-input" @input="store.handleInput()" placeholder="Search...">
      <button  type="submit" id="search-btn"><i class="fa fa-search"></i></button>
    </div>

    <div class="product-list">
      <div v-for="(product, index) in filteredProducts" :key="index" class="product-card">
        <router-link :to="`/${product.category}/${product.id}`">
          <div class="product-image">
            <img :src="product.images[0]" :alt="product.name" />
          </div>
        </router-link>

        <div class="product-details">
          <router-link :to="`/${product.category}/${product.id}`">
            <h2>{{ product.title }}</h2>
          </router-link>
          <p>{{ product.description }}</p>
          <div class="product-price">
            <p>{{ product.price }} $ </p>
            <p>{{ product.rating }}/5</p>
          </div>
          <div class="buttons">
            <button @click="store.buyProduct(product)"> Buy </button>
            <button @click="store.addFavorites(product)"> {{ product.isFavorite ? 'Remove' : 'Favorite' }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../store/main'
import { storeToRefs } from 'pinia'
import {ref} from "vue";

export default {
  setup() {
    const store = useProductStore()
    const { isLoading, allProducts,filteredProducts,searchQuery } = storeToRefs(store)
    const route = useRoute()



    return { isLoading, store, allProducts,filteredProducts,searchQuery  }
  },
}
</script>


<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#search-input {
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  width: 300px;
  margin-right: 10px;
}

#search-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 2px;
  border-radius: 3px;
  cursor: pointer;
}
.title {
  padding-left: 20px;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 5px #ddd;
  width: 250px;
}

.product-image {
  height: 250px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;

}

.product-image img {
  max-width: 100%;
  max-height: 100%;
}

.product-details {
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
}

.product-details h2 {
  font-size: 18px;
  margin: 0 0 5px;
}

.product-details p {
  margin: 0;
  font-size: 14px;
}

.product-price {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}


.buttons {
  display: flex;
  justify-content: space-between;
}
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3e8e41;
}
a {
  text-decoration: none;
  color: black;
}

</style>