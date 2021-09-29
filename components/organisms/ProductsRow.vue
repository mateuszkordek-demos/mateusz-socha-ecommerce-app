<template lang="pug">
    .products-row
        v-row(
            :class="phone ? 'px-2' : ''"
        )
            //- :cols="tablet?3:laptop?4:5"
            v-col(
                :cols="tablet?4:3"
                v-for="(product, index) in products"
                :key="index"
            )
                product-timg(
                    :product="product"
                    :noTitle="noTitle"
                )
</template>

<script>
import ProductTimg from "@/components/molecules/ProductTimg";
export default {
    name: "products-row",

    components: {
        ProductTimg
    },

    props: {
        products: {
            type: Array,
            required: true
        },
        noTitle: {
            type: Boolean
        }
    }
};
</script>