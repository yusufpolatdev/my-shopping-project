<script>
import { useProductStore } from "./store/main";
import { storeToRefs } from "pinia";
import Footer from "./components/Footer.vue";
import Loading from "./components/Loading.vue";
import Nav from "./components/Nav.vue";
export default {
  components: {Nav, Loading, Footer},

  setup() {
    const store = useProductStore();
    const {products, menProducts,womenProducts,isLoading,searchQuery} = storeToRefs(store)
    return {products, menProducts,womenProducts, isLoading, store,searchQuery};
  },
  async mounted() {
    await this.store.fetchProduct();
    await this.store.fetchMenProduct()
    await this.store.fetchWoMenProduct()
    await this.store.fetchSmartphones()
    await this.store.fetchLaptops()
    await this.store.fetchSkinCare()
    await this.store.fetchGroceries()
    await this.store.fetchHomeDecoration()
    await this.store.fetchFurniture()
    await this.store.fetchTops()
    await this.store.fetchWomenDresses()
    await this.store.fetchWomenShoes()
    await this.store.fetchMenShirts()
    await this.store.fetchMenShoes()
    await this.store.fetchMenWatches()
    await this.store.fetchWomenWatches()
    await this.store.fetchWomenBags()
    await this.store.fetchWomenJewellery()
    await this.store.fetchSunglasses()
    await this.store.fetchAutomotive()
    await this.store.fetchMotorcycle()
    await this.store.fetchLighting()
    await this.store.fetchFragrances()

  },

}



</script>

<template>
  <Nav></Nav>
  <Loading v-if="isLoading"></Loading>
  <router-view>     </router-view>
  <Footer></Footer>

</template>

<style>
</style>
