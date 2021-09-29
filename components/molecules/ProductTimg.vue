<template lang="pug">
    .product-timg

        nuxt-link(
            :to="{name: 'sklep-slug', params: {slug: product.slug + '-' + product.id}}"
            style="text-decoration: none; color: rgba(0, 0, 0, .87)"
        )
            //- v-responsive(
            //-     :aspect-ratio="3/4"
            //-     width="100%"
            //- ).test
            //-     .product-img
                    //- img(
                    //-     :src="product.main_img"
                    //- )
            .product-img(
                class="mb-3"
            )
                v-img(
                    :aspect-ratio="3/4"
                    :src="product.main_img"
                    position="top center"
                )
            h4(
                style="font-size: 16px"
                v-if="!noTitle"
            ) {{product.name}}

            //- .price {{product.price }} zł

            div(
                v-html="product.priceHtml"
                class="price-html small mb-5 mt-2"
            )

</template>

<script>
export default {
    name: "product-timg",

    props: {
        product: {
            type: Object,
            required: true
        },
        noTitle: {
            type: Boolean
        }
    }
};
</script>

<style lang="sass" scoped>
.product-timg
    cursor: pointer

    .product-img
        width: 100%
        height: 100%
        overflow: hidden
        border-radius: 10px

    .v-image
        transition: .3s all ease-in-out

    &:hover
        .v-image
            transform: scale(1.05) !important

</style>