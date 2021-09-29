<template lang="pug">
    .cart-product
        v-card(
            color="#f8f8f8"
            flat
            :class="phone?'py-3 px-3':tablet?'py-3 px-4':'py-3 px-6'"
        )
            //- :height="phone?190:230"
            h3.mb-1(
                v-if="phoneOnly || laptopOnly || desktopOnly"
            ) {{cartProduct.name }}
            v-row(
                style="height: 100%"
            )
                v-col(
                    :cols="tablet ? 5 : laptop ? 4 : 3"
                    style="height: 100%"
                )
                    nuxt-link(
                        :to="{name: 'sklep-slug', params: {slug: cartProduct.slug + '-' + cartProduct.id}}"
                        style="text-decoration: none; color: rgba(0, 0, 0, .87)"
                    )
                        //- .product-img
                            //- img(
                            //-     :src="cartProduct.main_img"
                            //- )
                        .product-img
                            v-img(
                                :src="cartProduct.main_img"
                                :aspect-ratio="3/4"
                                position="top center"
                            )

                v-col(
                    :cols="tablet ? 7 : laptop ? 8 : 9"
                    :class="phone?'pl-0':tablet?'pl-1':''"
                )

                    .d-flex.flex-column.justify-space-between(
                        style="height: 100%;"
                    )

                        div
                            nuxt-link(
                                :to="{name: 'sklep-slug', params: {slug: cartProduct.slug + '-' + cartProduct.id}}"
                                style="text-decoration: none; color: rgba(0, 0, 0, .87)"
                            )
                                h3.mb-1(
                                    v-if="!phoneOnly && !laptopOnly && !desktopOnly"
                                ) {{cartProduct.name }}

                            div(
                                v-if="cartProduct.wear==true"
                            )
                                span.mr-1 Rozmiar:
                                span {{cartProduct.purchasedSize}}

                            div {{(cartProduct.price*cartProduct.purchasedQuantity).toFixed(2)}} zł


                        .d-flex.justify-space-between.align-end(
                            style="width: 100%;"
                        )

                            //- quantity select
                            div
                                h4.mb-2 Ilość
                                .quantity-btns.d-flex
                                    v-btn.minus(
                                        @click="chooseQuantity -= 1; changeQuantity({value: -1, product: cartProduct})"
                                        :disabled="this.chooseQuantity>1 ? false : true"
                                        small
                                        height="39"
                                        color="#EBEBEB"
                                        elevation="0"
                                        tile

                                    ) -
                                    .quantity.d-flex.align-center(
                                        style="height: 39px;"
                                        :class="phone?'px-5':'px-6'"
                                    ) {{ chooseQuantity }}
                                    v-btn.plus(
                                        @click="chooseQuantity += 1; changeQuantity({value: 1, product: cartProduct})"
                                        small
                                        height="39"
                                        color="#EBEBEB"
                                        elevation="0"
                                        tile
                                    ) +

                            //- remove button
                            div.remove-btns(
                                :class="tabletOnly ? 'ml-5' : ''"
                            )
                                v-menu(
                                    v-model="tooltip"
                                    offset-y
                                    transition="scale-transition"
                                    origin="center top"
                                )
                                    template(
                                        v-slot:activator="{ on }"
                                    )
                                        v-btn.font-weight-bold(
                                            v-on="on"
                                            color="error"
                                            depressed
                                            text
                                            rounded
                                            width="100%"
                                            slot="activator"
                                            :class="phone?'':''"
                                            style="margin-bottom: 2px"
                                        )
                                            i.fal.fa-trash-alt.mr-1(
                                                :style="[laptop ? {'font-size': '18px'} : {'font-size': '16px'}]"
                                            )
                                            span(v-if="!laptop") Usuń produkt

                                    v-card.py-4.px-5

                                        div.pb-3 Usunąć produkt z koszyka?

                                        .d-flex.justify-space-between

                                            v-btn.font-weight-bold.px-7(
                                                @click="removeProduct(cartProduct)"
                                                color="error"
                                                depressed
                                                rounded
                                                small
                                                width="48%"
                                            ) Usuń

                                            v-btn.font-weight-bold.px-7(
                                                @click="tooltip = false"
                                                color="black"
                                                outlined
                                                depressed
                                                small
                                                text
                                                rounded
                                                width="48%"
                                            ) Nie

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "cart-product",

    props: {
        cartProduct: {
            type: Object,
            required: true
        }
    },

    data: () => ({
        chooseQuantity: null,
        tooltip: false,
        selectQuantityRules: [
            val => {
                if (val) return true;
                else return "Wybierz ilość";
            }
        ]
    }),

    computed: {
        ...mapState(["products"])
    },

    methods: {
        ...mapActions(["changeQuantity", "removeProduct"])
    },

    created() {
        this.chooseQuantity = this.cartProduct.purchasedQuantity;
    },
    updated() {
        this.chooseQuantity = this.cartProduct.purchasedQuantity;
    }
};
</script>

<style lang="sass">
.cart-product
    .product-img
        width: 100%
        height: 100%
        border-radius: 10px
        overflow: hidden
        .v-image
            width: 100%
            height: 100%
            object-fit: cover
            transition: .2s all ease-in-out

        &:hover
            .v-image
                transform: scale(1.05)

    .remove-btns
        .v-btn__content
            font-weight: normal !important
</style>