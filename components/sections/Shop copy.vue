<template lang="pug">
    .shop.section-padding
        v-container
            header1(center) Sklep

            div(
                class="d-flex justify-center"
            )
                shop-controller

            v-row.z-index-5(
            ).pt-10
                .single-product(
                    :class="phone ? 'px-1' : tablet ? 'px-4' : desktop ? 'px-5' : 'px-5'"
                    v-for="(product, index) in products"
                    :key="index"
                )
                    product-timg(
                        :product="product"
                    )
        //- blobs
        img.blob-1(
            src="/images/blob-1.png"
        )
        img.blob-2(
            src="/images/blob-2.png"
        )
</template>

<script>
import Header1 from "@/components/molecules/Header1";
import ProductTimg from "@/components/molecules/ProductTimg";
import ShopController from "@/components/molecules/ShopController";

export default {
    name: "shop",

    props: {
        products: {
            type: Array,
            required: true
        }
    },

    components: {
        Header1,
        ProductTimg,
        ShopController
    }
};
</script>

<style lang="sass" scoped>
.shop
    position: relative

    .single-product
        width: 20%
        margin-bottom: 30px
        @media(max-width: 1259.98px)
            width: 25%

    .blob-1
        position: absolute
        transform: rotate(60deg)
        right: -120px
        top: 30px
        height: 250px
        @media(max-width: 1450px)
            height: 200px
            right: -70px
        @media(max-width: 959.98px)
            height: 160px
            top: 60px
            right: -90px

    .blob-2
        position: absolute
        transform: rotate(0deg)
        left: -20px
        bottom: -20px
        height: 130px

        @media(max-width: 1450px)
            height: 100px

        @media(max-width: 959.98px)
            left: -35px
</style>