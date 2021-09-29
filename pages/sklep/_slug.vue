<template lang="pug">
    div
        //- div(
        //-     v-if="product"
        //- )
        product-info(
            :product="product"
        )
        also-like(
            :otherProducts="otherProducts"
        )
        //- div(
        //-     v-if="!product"
        //-     class="product-404"
        //- )
        //-     v-container(
        //-         class="d-flex flex-column align-center justify-center"
        //-         style="height:100%"
        //-     )
        //-         h3(
        //-             class="text-center"
        //-         ) Nie znaleziono takiego produktu
        //-         v-btn.font-weight-bold.px-7.mt-8(
        //-             rounded
        //-             color="secondary"
        //-             depressed
        //-             small
        //-             to="/sklep/meskie"
        //-         ) Przejdź do sklepu

</template>

<script>
// import axios from "axios";
// import fetchData from "@/plugins/fetch";
import { mapState } from "vuex";

import ProductInfo from "@/components/sections/ProductInfo";
import AlsoLike from "@/components/sections/AlsoLike";

export default {
    name: "sklep-slug",

    components: {
        ProductInfo,
        AlsoLike
    },

    data: () => ({
        product: null,
        test: "test"
    }),

    computed: {
        ...mapState(["products"]),
        otherProducts() {
            // returns products without the one showed on current page
            let arrayOfProducts = [];
            this.products.forEach(product => {
                if (product != this.product) {
                    arrayOfProducts.push(product);
                }
            });
            return arrayOfProducts.splice(0, this.numberOfOtherProductsShowed);
        },
        numberOfOtherProductsShowed() {
            if (this.tablet) {
                return 3;
            } else return 4;
        }
        // product() {
        //     let product = this.products.filter(product => {
        //         return (
        //             `${product.slug}-${product.id}` == this.$route.params.slug
        //         );
        //     })[0];
        //     return product;
        // }
    },

    created() {
        this.product = this.products.filter(product => {
            return `${product.slug}-${product.id}` == this.$route.params.slug;
        })[0];
    },

    head() {
        return {
            title: this.product.name + " - Mateusz Socha | Sklep",
            meta: [
                // {
                //     hid: "description",
                //     name: "description",
                //     content: ""
                // },
                {
                    property: "og:image",
                    content: "https://mateuszsocha.com/images/OG-Sklep.png"
                },
                {
                    property: "og:title",
                    content: this.product.name + " - Mateusz Socha | Sklep"
                },
                {
                    property: "og:type",
                    content: "website"
                }
                // {
                //     property:"og:description",
                //     content: ''
                // },
            ]
        };
    }
};
</script>

<style lang="sass" scoped>
.product-404
    height: 400px
</style>
