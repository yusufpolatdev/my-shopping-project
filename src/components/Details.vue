<template>
  <div>
  <div class="product-detail" v-if="selectedProduct">
    <div class="product-images">
      <img :src="selectedProduct.images[0]" :alt="selectedProduct.title" />
    </div>
    <div class="product-info ms-5">
      <h1>{{ selectedProduct.title}}</h1>
      <p>{{ selectedProduct.description }}</p>
      <p>{{ selectedProduct.price }} $</p>
      <div>
        <button @click="store.buyProduct(selectedProduct)"> Buy </button>
        <button @click="store.addFavorites(selectedProduct)"> Favorite</button>
      </div>
    </div>
  </div>
  </div>
  <div class="title">
    <h3> Similar products  </h3>
  </div>
  <div class="product-list">
    <div v-for="(product, index) in categoryProduct" :key="index" class="product-card">
      <router-link :to="`/${product.category}/${product.id}`">
        <div class="product-image">
          <img :src="product.images[0]" :alt="product.name" />
        </div>
      </router-link>

      <div class="product-details">
        <router-link :to="`/${product.category}/${product.id}`">  <h2>{{ product.title }}</h2> </router-link>
        <p>{{ product.description }}</p>
        <div class="product-price"> <p> {{ product.price }} $ </p> <p> {{product.rating}}/5</p></div>
        <div class="buttons">          <button @click="store.buyProduct(product)"> Buy </button>  <button @click="store.addFavorites(product)"> {{ product.isFavorite ? 'Remove' : 'Favorite' }}</button></div>
      </div>
    </div>
  </div>
</template>

<script>

import { useProductStore } from "../store/main";
import { storeToRefs } from "pinia";
import {computed} from "vue";

export default {
  setup() {
    const store = useProductStore();
    const {isLoading,allProducts} = storeToRefs(store)

    return {isLoading, store, allProducts};
  },
  data() {
    return {
      selectedProduct: null,
      categoryProduct: null

    }
  },

    this.categoryProduct = computed(() => {
      if (this.selectedProduct) {
        return this.allProducts.filter((product) => product.category === this.selectedProduct.category && product.id !== selectedId)
            .slice(0, 6);
      }
      return [];
    });
  },
  watch: {
    '$route.params.id': function(newId) {
      this.selectedProduct = this.allProducts.find((item) => {
        if (item.id === parseInt(newId)) {
          return item;
        }
      });

      if (this.selectedProduct) {
        this.categoryProduct = computed(() => {
          return this.allProducts.filter((product) => product.category === this.selectedProduct.category && product.id !== parseInt(newId))
              .slice(0, 6);
        });
      }
    }
  }
}
</script>


<style scoped>
.product-detail {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px;
}

.product-images img {
  width: 400px;
  height: 400px;
}

.product-info {
 display: flex;
  flex-direction: column;
  justify-content: center;

}

.product-info h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 10px;
}

.product-info p {
  font-size: 16px;
  margin: 0 0 10px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #0069d9;
}



</style>