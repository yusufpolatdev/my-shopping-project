<template>
  <div class="title">
    <h3> FAVORİTES </h3>

  </div>
<div class="main">
  <div class="favorites" v-for="(product, index) in favorites" :key="index">
  <div class="product-card">
    <img :src="product.images[0]" :alt="product.name" />
    <h2>{{product.title}}</h2>
    <p>{{product.price}} $ </p>
    <div class="d-flex justify-content-between mb-3">
    <button @click="store.buyProduct(product)"> Buy </button>
    <button @click="store.addFavorites(product)"> {{ product.isFavorite ? 'Remove' : 'Favorite' }}</button>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import { useProductStore } from "../store/main";
import { storeToRefs } from "pinia";


export default {
  setup() {
    const store = useProductStore();
    const {allProducts, isLoading, favorites} = storeToRefs(store);

    return {allProducts, isLoading, favorites, store,};
  },

}
</script>

<style scoped>

.main {
  display: flex;
  flex-wrap: wrap;

}

.favorites {

  gap: 2rem;
  padding: 2rem;
}
.product-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  width: 300px;
  overflow: hidden;
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-card h2 {
  margin: 0;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: normal;
}

.product-card p {
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
}

.product-card button {
  display: block;
  margin: auto;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.product-card button:hover {
  background-color: #666;
}


</style>