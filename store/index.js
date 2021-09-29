import axios from 'axios'

// const sampleProducts = [
//     {
//         name: "Koszulka KONSTYTUCJA",
//         main_img: "/temp/koszulka.png",
//         img_1: "/temp/koszulka1.png",
//         img_2: "/temp/koszulka2.png",
//         img_3: "/temp/koszulka3.png",
//         price: 50.00,
//         id: 230,
//         slug: "koszulka-konstytucja",
//         wear: true,
//         sizes: [
//             {
//                 size: "XS",
//                 quantity: 2
//             },
//             {
//                 size: "S",
//                 quantity: 5
//             },
//             {
//                 size: "M",
//                 quantity: 6
//             },
//             {
//                 size: "L",
//                 quantity: 5
//             },
//             {
//                 size: "XL",
//                 quantity: 15
//             },
//             {
//                 size: "XXL",
//                 quantity: 5
//             }
//         ]
//     },
// ]

export const state = () => ({
    shipping: [],
    selectedShipping: null,
    gigs: [],

    voivodeships: [

        {
            name: "Dolnośląskie",
            slug: 'dolnoslaskie'
        },
        {
            name: "Kujawsko - Pomorskie",
            slug: 'kujawskopomorskie'
        },
        {
            name: "Lubelskie",
            slug: 'lubelskie'
        },
        {
            name: "Lubuskie",
            slug: 'lubuskie'
        },
        {
            name: "Łódzkie",
            slug: 'lodzkie'
        },
        {
            name: "Małopolskie",
            slug: 'malopolskie'
        },
        {
            name: "Mazowieckie",
            slug: 'mazowieckie'
        },
        {
            name: "Opolskie",
            slug: 'opolskie'
        },
        {
            name: "Podkarpackie",
            slug: 'podkarpackie'
        },
        {
            name: "Podlaskie",
            slug: 'podlaskie'
        },
        {
            name: "Pomorskie",
            slug: 'pomorskie'
        },
        {
            name: "Śląskie",
            slug: 'slaskie'
        },
        {
            name: "Świętokrzyskie",
            slug: 'swietokrzyskie'
        },
        {
            name: "Warmińsko - Mazurskie",
            slug: 'warminskomazurskie'
        },
        {
            name: "Wielkopolskie",
            slug: 'wielkopolskie'
        },
        {
            name: "Zachodniopomorskie",
            slug: 'zachodniopomorskie'
        },
    ],

    videos: [],

    products: [],
    products_in_cart: [],
    isFetched: false

});

export const getters = {
    getShippingMethods(state) {
        return state.shipping
    },
    getSelectedShipping(state) {
        return state.selectedShipping
    },
    getProductsInCart(state) {
        return state.products_in_cart
    },
    getVoivodeships(state) {
        return state.voivodeships
    },
    getProducts(state) {
        return state.products
    },
    getMensProducts(state) {
        return state.products.filter(a => !!a.categories.isMale)
    },
    getWomensProducts(state) {
        return state.products.filter(a => !!a.categories.isFemale)
    }
}

export const mutations = {
    // helper
    consoleLog(state, data) {
        console.log(data)
    },

    // fetch mutations
    SET_PRODUCTS(state, data) {
        state.products = data;
    },

    SET_GIGS(state, data) {
        state.gigs = data;
    },

    SET_VIDEOS(state, data) {
        state.videos = data;
    },

    SET_SHIPPING(state, data) {
        state.shipping = data;
    },

    SET_FETCHED(state, data) {
        state.isFetched = data
    },

    // cart mutations
    ADD_PRODUCT_TO_CART(state, product) {
        state.products_in_cart.push(product)
    },

    UPDATE_QUANTITY_OF_PRODUCT_IN_CART(state, { newQuantity, matchedProduct }) {
        let matched = state.products_in_cart.find(a => a == matchedProduct)
        matched.purchasedQuantity = newQuantity
    },

    CLEAR_CART(state) {
        state.products_in_cart = [];
    },

    REMOVE_PRODUCT_FROM_CART(state, product) {
        let index = state.products_in_cart.indexOf(product)
        state.products_in_cart.splice(index, 1)
    },

    SELECT_SHIPPING_METHOD(state, data) {
        state.selectedShipping = data
    },

    UPDATE_CART_IN_LOCAL_STORAGE(state) {
        localStorage.setItem("cart", JSON.stringify(state.products_in_cart));
    },

    SET_CART(state, products) {
        state.products_in_cart = products
    },
};

export const actions = {
    addProductToCart({ commit, state }, product) {
        let matched
        if (product.wear == true) {
            matched = state.products_in_cart.find(a => a.id == product.id && a.purchasedSize == product.purchasedSize)
        } else if (product.wear == false) {
            matched = state.products_in_cart.find(a => a.id == product.id)
        }

        if (!!matched) {
            let updatedQuantity = matched.purchasedQuantity + product.purchasedQuantity
            commit('UPDATE_QUANTITY_OF_PRODUCT_IN_CART', { newQuantity: updatedQuantity, matchedProduct: matched })
        } else {
            commit('ADD_PRODUCT_TO_CART', product)
        }

        commit('UPDATE_CART_IN_LOCAL_STORAGE')
    },

    changeQuantity({ commit, state }, { value, product }) {
        let matched

        if (product.wear == true) {
            matched = state.products_in_cart.find(a => a.id == product.id && a.purchasedSize == product.purchasedSize)
        } else if (product.wear == false) {
            matched = state.products_in_cart.find(a => a.id == product.id)
        }

        let updatedQuantity = matched.purchasedQuantity + (value)
        commit('UPDATE_QUANTITY_OF_PRODUCT_IN_CART', { newQuantity: updatedQuantity, matchedProduct: matched })
        commit('UPDATE_CART_IN_LOCAL_STORAGE')
    },

    removeProduct({ commit }, product) {
        commit('REMOVE_PRODUCT_FROM_CART', product)
        commit('UPDATE_CART_IN_LOCAL_STORAGE')
    },

    async loadCartFromLocalStorage({ commit, state }) {
        if (localStorage.getItem("cart") != null && localStorage.getItem("cart") != '[]') {
            // let products = JSON.parse(localStorage.getItem("cart"));

            // // filtruje czy w ogole nadal sa dostepne po id i jesli ciuch to tez po rozmiarach
            // products = products.filter(a => {
            //     if (!a.wear) {
            //         return state.products.map(b => b.id).includes(a.id)
            //     } else if (!!a.wear) {
            //         return state.products.map(b => b.id).includes(a.id) && state.products.find(b => b.id == a.id).sizes.map(c => c.size).includes(a.purchasedSize)
            //     }
            // })


            // // sprawdza availability
            // let availableProducts = []
            // const url = "https://mateusz-socha-microservice-prod.enl-projects.com";

            // for (const product of products) {
            //     let res = await axios.get(
            //         `${url}/products/availability/${product.id}`
            //     );
            //     let availability = res.data.data.availability

            //     if (availability == 'instock' || availability == 'onbackorder') {
            //         availableProducts.push(product)
            //     }
            // }

            // commit('SET_CART', availableProducts)


            let productsFromLocalStorage = JSON.parse(localStorage.getItem("cart"));

            // filtruje czy w ogole nadal sa dostepne po id i jesli ciuch to tez po rozmiarach
            productsFromLocalStorage = productsFromLocalStorage.filter(a => {
                if (!a.wear) {
                    return state.products.map(b => b.id).includes(a.id)
                } else if (!!a.wear) {
                    return state.products.map(b => b.id).includes(a.id) && state.products.find(b => b.id == a.id).sizes.map(c => c.size).includes(a.purchasedSize)
                }
            })


            // sprawdza availability
            let availableProductsFromLocalStorage = []
            const url = "https://mateusz-socha-microservice-prod.enl-projects.com";

            for (const product of productsFromLocalStorage) {
                let res = await axios.get(
                    `${url}/products/availability/${product.id}`
                );
                let availability = res.data.data.availability

                if (availability == 'instock' || availability == 'onbackorder') {
                    availableProductsFromLocalStorage.push(product)
                }
            }

            // aktualizuje dane dostepnych produktow z local storage pobierajac je z tych sfetchowanych
            let updatedProducts = []
            availableProductsFromLocalStorage.forEach(a => {
                let updatedProduct = state.products.find(b => b.id == a.id)
                updatedProduct.purchasedSize = a.purchasedSize
                updatedProduct.purchasedQuantity = a.purchasedQuantity
                updatedProducts.push(updatedProduct)
            })

            commit('SET_CART', updatedProducts)
        }
    },

    clearCart({ commit }) {
        commit('CLEAR_CART')
        commit('UPDATE_CART_IN_LOCAL_STORAGE')
    }
}