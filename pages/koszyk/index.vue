<template lang="pug">
    div
        cart
        also-like(
            :otherProducts="otherProducts"
        )
</template>

<script>
import { mapState } from "vuex";
// import axios from "axios";
// import fetchData from "@/plugins/fetch";

import Cart from "@/components/sections/Cart";
import AlsoLike from "@/components/sections/AlsoLike";

export default {
    components: {
        Cart,
        AlsoLike
    },

    computed: {
        ...mapState(["products", "products_in_cart"]),

        otherProducts() {
            let arrayOfProducts = [];
            if (this.products_in_cart[0]) {
                arrayOfProducts = this.products.filter(product => {
                    return (
                        product.id !=
                        this.products_in_cart.map(product => product.id)
                    );
                });
            } else if (!this.products_in_cart[0]) {
                arrayOfProducts = JSON.parse(JSON.stringify(this.products));
            }
            return arrayOfProducts.splice(0, this.numberOfOtherProductsShowed);
        },

        numberOfOtherProductsShowed() {
            if (this.tablet) {
                return 3;
            } else return 4;
        }
    },

    head: {
        title: "Mateusz Socha | Koszyk",
        meta: [
            // {
            //     hid: "description",
            //     name: "description",
            //     content: ""
            // },
            {
                property: "og:title",
                content: "Mateusz Socha | Koszyk"
            },
            {
                property: "og:type",
                content: "website"
            },
            {
                property: "og:image",
                content: "https://mateuszsocha.com/images/OG-SochaHome.jpg"
            }
            // {
            //     property:"og:description",
            //     content: ''
            // },
        ]
    }

    // async fetch({ store, params }) {
    //     await fetchData(store);
    // }
};
</script>