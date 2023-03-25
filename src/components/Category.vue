<template>
  <div>
    <div class="title">
      <h3>{{categoryMap[category]}} </h3>
    </div>
    <div class="sorting-options">
      <label>
        Sort by:
        <select v-model="sortBy" @change="sortProducts">
          <option value="title">Name (A-Z)</option>
          <option value="-title">Name (Z-A)</option>
          <option value="price">Price (Low to High)</option>
          <option value="-price">Price (High to Low)</option>
          <option value="rating">Rating (Low to High)</option>
          <option value="-rating">Rating (High to Low)</option>
        </select>
      </label>
    </div>

    <div class="product-list">
      <div v-for="(product, index) in sortedProducts" :key="index" class="product-card">
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
    const { isLoading, allProducts } = storeToRefs(store)
    const route = useRoute()

    const category = computed(() => route.params.category)
    const categoryMap = {
      'smartphones': 'Smartphones',
      'laptops': 'Laptops',
      'fragrances': 'Fragrances',
      'skincare': 'Skincare',
      'groceries': 'Groceries',
      'home-decoration': 'Home Decoration',
      'furniture': 'Furniture',
      'tops': 'Tops',
      'womens-dresses': 'Woman Dresses',
      'womens-shoes': 'Woman Shoes',
      'mens-shirts': 'Man Shirts',
      'mens-shoes': 'Man Shoes',
      'mens-watches': 'Man Watches',
      'womens-watches': 'Woman Watches',
      'womens-bags': 'Woman Bags',
      'womens-jewellery': 'Woman Jewellery',
      'sunglasses': 'Sunglasses',
      'automotive': 'Automotive',
      'motorcycle': 'Motorcycle',
      'lighting': 'Lighting'
    }


    const sortBy = ref('title')

    const sortedProducts = computed(() => {
      const products = allProducts.value.filter((product) => product.category === category.value)
      return products.sort((a, b) => {
        const sortOrder = sortBy.value.startsWith('-') ? -1 : 1
        const sortByKey = sortBy.value.replace('-', '')
        if (a[sortByKey] < b[sortByKey]) {
          return sortOrder * -1
        } else if (a[sortByKey] > b[sortByKey]) {
          return sortOrder
        }
        return 0
      })
    })


    const sortProducts = () => {
      sortedProducts.value
    }

    return { isLoading, store, allProducts, category, sortedProducts, categoryMap, sortBy, sortProducts }
  },
}
</script>


<style scoped>
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