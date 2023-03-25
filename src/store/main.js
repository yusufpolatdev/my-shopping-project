import {defineStore} from "pinia";
import axios from "axios";
import {ref} from "vue";
import _ from "lodash";
export const useProductStore = defineStore('product', {

    state: () => ({
        isLoading: true,
        products: ref([]),
        menProducts: ref([]),
        womenProducts: ref([]),
        smartPhones: ref([]),
        laptops: ref([]),
        fragrances: ref([]),
        skinCare: ref([]),
        groceries: ref([]),
        HomeDecoration: ref([]),
        furniture: ref([]),
        tops:ref([]),
        womenDresses:ref([]),
        womenShoes: ref([]),
        menShirts: ref([]),
        menShoes: ref([]),
        menWatches: ref([]),
        womenWatches: ref([]),
        womenBags: ref([]),
        womenJewellery: ref([]),
        sunglasses: ref([]),
        automotive: ref([]),
        motorcycle: ref([]),
        lighting: ref([]),
        myBasket: ref([]),
        favorites: ref([]),
        searchQuery: '',
        filteredProducts: ref([]),


    }),
    getters: {
        allProducts() {
            return [
                ...this.smartPhones,
                ...this.laptops,
                ...this.fragrances,
                ...this.skinCare,
                ...this.groceries,
                ...this.HomeDecoration,
                ...this.furniture,
                ...this.tops,
                ...this.womenDresses,
                ...this.womenShoes,
                ...this.menShirts,
                ...this.menShoes,
                ...this.menWatches,
                ...this.womenWatches,
                ...this.womenBags,
                ...this.womenJewellery,
                ...this.sunglasses,
                ...this.automotive,
                ...this.motorcycle,
                ...this.lighting,
            ]


        },

    },

        actions: {

            async  fetchProduct() {
                this.isLoading = true
                const url = `https://dummyjson.com/products?limit=100`;
                try {
                    const response = await axios.get(url);
                   const products = response.data.products

                    const filteredProducts = _.filter(products, function(product) {
                        return product.rating > 4.9;
                    })

                    const sortedProducts = _.orderBy(filteredProducts, 'rating', 'desc').slice(0, 6);

                    this.products = sortedProducts;
                    this.isLoading = false

                } catch (error) {
                    console.error(error);
                }
            },

            buyProduct(product) {
                const index = this.myBasket.indexOf(product);
                if (index === -1) {
                    this.myBasket.push(product);
                    product.flag = true;

                }
                console.log(product)
            },
            removeProduct(product) {
                const index = this.myBasket.indexOf(product);
                this.myBasket.splice(index, 1);
                product.flag = false;
            },
            addFavorites(product) {
                if (!product.isFavorite) {
                    product.isFavorite = true;
                    this.favorites.push(product);
                } else {
                    product.isFavorite = false;
                    const index = this.favorites.indexOf(product);
                    this.favorites.splice(index, 1);
                }
            },
            handleInput() {
                this.filteredProducts = this.allProducts.filter((product) =>
                    product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
                );
            },

// Enter tuşuna basılması durumunda handleInput() yöntemi çağrılır
            onEnter(event) {
                if (event.keyCode === 13) {
                    this.handleInput();
                }
            },

// Arama düğmesine tıklanması durumunda handleInput() yöntemi çağrılır
            onSearchClick() {
                this.handleInput();
            },

            congrats() {
              alert(':)')
            },



            async fetchMenProduct() {
                this.isLoading = true
                const categories = ['shirts', 'shoes', 'watches'];
                try {
                    const menProducts = [];

                    for (const category of categories) {
                        const url = `https://dummyjson.com/products/category/mens-${category}`;
                        const res = await axios.get(url);
                        const products = res.data.products;

                        const filteredProducts = _.filter(products, function (product) {
                            return product.rating > 4.1;
                        });

                        menProducts.push(...filteredProducts);
                    }

                    const sortedMenProducts = _.orderBy(menProducts, 'rating', 'desc').slice(0, 6);
                    this.menProducts = sortedMenProducts;
                    this.isLoading = false

                } catch (error) {
                    console.error(error);
                }
            },
            async fetchWoMenProduct() {
                this.isLoading = true
                const categories = ['bags','dresses', 'shoes', 'watches','jewellery'];
                try {
                    const womenProducts = [];

                    for (const category of categories) {
                        const url = `https://dummyjson.com/products/category/womens-${category}`;
                        const res = await axios.get(url);
                        const products = res.data.products;

                        const filteredProducts = _.filter(products, function (product) {
                            return product.rating > 4.1;
                        });

                        womenProducts.push(...filteredProducts);
                    }

                    const sortedMenProducts = _.orderBy(womenProducts, 'rating', 'desc').slice(0, 6);
                    this.womenProducts = sortedMenProducts;
                    this.isLoading = false
                } catch (error) {
                    console.error(error);
                }
            },

            async fetchSmartphones() {
                const url = `https://dummyjson.com/products/category/smartphones`;

                try {
                    const response = await axios.get(url);
                    const isFavorite = false
                    const flag = false;
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag;
                        item.isFavorite = isFavorite
                        return item;
                    });
                    this.smartPhones = resultData;

                    console.log(this.smartPhones);
                } catch (error) {
                    console.error(error);
                }
            },

            async fetchLaptops() {
                const url = `https://dummyjson.com/products/category/laptops`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag;
                        item.isFavorite = isFavorite
                        return item;
                    });
                    this.laptops = resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchFragrances() {
                const url = `https://dummyjson.com/products/category/fragrances`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.fragrances = resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchSkinCare() {
                const url = `https://dummyjson.com/products/category/skincare`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.skinCare= resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchGroceries() {
                const url = `https://dummyjson.com/products/category/groceries`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.groceries = resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchHomeDecoration() {
                const url = `https://dummyjson.com/products/category/home-decoration`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.HomeDecoration = resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchFurniture() {
                const url = `https://dummyjson.com/products/category/furniture`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.furniture = resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchTops() {
                const url = `https://dummyjson.com/products/category/tops`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.tops = resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchWomenDresses() {
                const url = `https://dummyjson.com/products/category/womens-dresses`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.womenDresses = resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchWomenShoes() {
                const url = `https://dummyjson.com/products/category/womens-shoes`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.womenShoes = resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchMenShirts() {
                const url = `https://dummyjson.com/products/category/mens-shirts`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.menShirts = resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchMenShoes() {
                const url = `https://dummyjson.com/products/category/mens-shoes`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.menShoes = resultData;

                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchMenWatches() {
                const url = `https://dummyjson.com/products/category/mens-watches`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.menWatches = resultData;
                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchWomenWatches() {
                const url = `https://dummyjson.com/products/category/womens-watches`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.womenWatches = resultData;
                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchWomenBags() {
                const url = `https://dummyjson.com/products/category/womens-bags`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.womenBags = resultData;
                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchWomenJewellery() {
                const url = `https://dummyjson.com/products/category/womens-jewellery`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.womenJewellery = resultData;
                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchSunglasses() {
                const url = `https://dummyjson.com/products/category/sunglasses`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.sunglasses = resultData;
                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchAutomotive() {
                const url = `https://dummyjson.com/products/category/automotive`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.automotive = resultData;
                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchMotorcycle() {
                const url = `https://dummyjson.com/products/category/motorcycle`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.motorcycle = resultData;
                }
                catch (error) {
                    console.error(error)
                }
            },
            async fetchLighting() {
                const url = `https://dummyjson.com/products/category/lighting`

                try {
                    const response = await axios.get(url);
                    const flag = false;   const isFavorite = false
                    const resultData = response.data.products.map((item) => {
                        item.flag = flag; item.isFavorite = isFavorite
                        return item;
                    });
                    this.lighting = resultData;
                }
                catch (error) {
                    console.error(error)
                }
            },



        }

})

