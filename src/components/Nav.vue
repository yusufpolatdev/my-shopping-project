<template>
  <div class="header">
    <div class="logo">
      <h1 class="mt-3"> YUSUF STORE </h1>
      <h4 class="mt-5"> Your clothing is your quality </h4>
    </div>
    <div>




    </div>
  <div class="nav">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/">Electronic</router-link>
          <ul>
            <li><router-link :to="`/${categories[0]}`">Smartphones</router-link></li>
            <li><router-link :to="`/${categories[1]}`">Laptops</router-link></li>
            <li><router-link :to="`/${categories[19]}`">Lighting</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/">Man</router-link>
          <ul>
            <li><router-link :to="`/${categories[10]}`">Shirts</router-link></li>
            <li><router-link :to="`/${categories[11]}`">Shoes</router-link></li>
            <li><router-link :to="`/${categories[12]}`">Watches</router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/">Woman </router-link>
          <ul>
            <li><router-link :to="`/${categories[8]}`">Dresses</router-link></li>
            <li><router-link :to="`/${categories[9]}`">Shoes</router-link></li>
            <li><router-link :to="`/${categories[13]}`">Watches</router-link></li>
            <li><router-link :to="`/${categories[14]}`">Bags</router-link></li>
            <li><router-link :to="`/${categories[15]}`">Jewellery</router-link></li>
            <li><router-link :to="`/${categories[7]}`"> Tops </router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/">Vehicle </router-link>
          <ul>
            <li><router-link :to="`/${categories[17]}`">Automotive</router-link></li>
            <li><router-link :to="`/${categories[18]}`">Motorcycle </router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/">Care </router-link>
          <ul>
            <li><router-link :to="`/${categories[3]}`"> Skincare </router-link></li>
            <li><router-link :to="`/${categories[2]}`">Fragrances </router-link></li>
            <li><router-link :to="`/${categories[16]}`">Sunglasses </router-link></li>
          </ul>
        </li>
        <li>
          <router-link to="/">Decoration </router-link>
          <ul>
            <li><router-link :to="`/${categories[5]}`">Home Decoration </router-link></li>
            <li><router-link :to="`/${categories[6]}`"> Furniture  </router-link></li>
          </ul>
        </li>
        <li><router-link :to="`/${categories[4]}`">Groceries </router-link></li>
        <li><router-link to="/">About Us </router-link></li>
        <li><router-link to="/">Contact </router-link></li>
      </ul>
    </nav>
    <div class="shopping-icons">
      <router-link to="/" class="fa fa-user"></router-link>
      <router-link to="/basket" class="fa fa-shopping-cart"></router-link> <span> {{countBasket}} </span>
      <router-link to="/favorites" class="fa fa-heart"></router-link> <span> {{countFavorites}}</span>
      <router-link to="/search" class="fa fa-search"></router-link>
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
    const {isLoading, allProducts, myBasket, favorites,searchQuery, filteredProducts, } = storeToRefs(store);

    const categories = [...new Set(allProducts.value.map((product) => product.category))];
    return { isLoading, store, allProducts, categories, myBasket, favorites,searchQuery,filteredProducts  };
  },

  computed: {
    countBasket() {
      return this.myBasket.length
    },
    countFavorites() {
      return this.favorites.length
    }
  },

 unmounted() {
    console.log(this.categories)
},

}
</script>

<style scoped>


.fa {
  display: inline-block;
  font-size: 24px;
  padding: 10px;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  margin: 5px 10px;
}

.fa-user {
  background-color: #3498db;
  color: #fff;
}

.fa-shopping-cart {
  background-color: #e67e22;
  color: #fff;
}
.fa-heart {
  background-color: #e74c3c;
  color: #fff;
}
.fa-search {
  background-color: green;
  color: #fff;
}
.header {
  display: flex;
  flex-direction: column;
}
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;

}
.logo h1 {
  height: 20px;
}

.nav {
  display: flex;
  justify-content: center;
}
nav {
  background-color: white;
  padding: 10px;
}

ul {
  list-style-type: none;
  margin: 0px;
  padding: 0;
  display: flex;
}

li {
margin: 15px 15px 15px 0;

}

li ul {

  background-color: white;
display: none;

}

li:hover ul {
  display: block;




}

a {

  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  color: black;
}

a:hover {
  background-color: green;
}

li ul a {
  display: block;
  padding: 10px;
  margin: 0;
  color: black;
}



</style>