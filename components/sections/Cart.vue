<template lang="pug">
    .cart.section-padding
        v-container.z-index-5
            header1 Koszyk



            div(
                v-if="getProductsInCart.length"
            )

                //- v-card(
                //-     color="#F4F4F4"
                //-     flat
                //-     :class="phone?'py-3 px-3 mb-3':tablet?'py-3 px-4 mb-5':'py-5 px-6 mb-5'"
                //- )
                //-     p Wychodząc naprzeciw dużemu zainteresowaniu moimi koszulkami, jednocześnie czekając na weryfikację systemu płatności PayU, otwieramy dziś preorder koszulek z płatnością tylko w formie przelewu. Zależy nam na tym, aby zamówione przez Was koszulki dotarły do adresatów jeszcze przed Świętami, dlatego nie chcemy dłużej czekać i startujemy już dziś w minimalnie okrojonej formie płatności.
                //-     div Dzięki!
                v-row
                    //- left
                    v-col(
                        :cols="tablet?12:laptop ? 7 : 8"
                        :class="tablet?'pb-0':''"
                    )
                        div(
                            v-for="(cartProduct, index) in getProductsInCart"
                            :key="index"
                            class="mb-5"
                        )
                            cart-product(
                                :cartProduct="cartProduct"
                            )

                        v-card(
                            color="#f8f8f8"
                            flat
                            :class="phone?'py-3 px-3 mb-3':tablet?'py-3 px-4 mb-5':'py-3 px-6 mb-5'"
                        )
                            h4(
                                class="mb-5"
                            ) Wybierz sposób dostawy:

                            v-form(
                                ref="shippingForm"
                            )
                                v-radio-group(
                                    v-model="selectedShippingMethod"
                                    required
                                    :rules="shippingRules"
                                )
                                    v-radio(
                                        v-for="(btn, index) in getShippingMethods"
                                        :key="index"
                                        :label="btn.name + ' - '+ btn.price + ' zł'"
                                        :value="btn"
                                    )

                            v-alert(
                                type="info"
                                dense
                                color="blue lighten-1"
                                style="z-index: 5; border-radius: 10px"
                                class="mt-5"
                                outlined
                            )
                                div
                                    div(
                                        class="mr-1"
                                        style="display: inline-block"
                                    ) W sprawie wysyłki zagranicznej prosimy o kontakt mailowy:
                                    a(
                                        target="_blank"
                                        style="display: inline-block"
                                        href="mailto:sklep@mateuszsocha.com"
                                    ) sklep@mateuszsocha.com




                    v-spacer

                    //- right
                    v-col(
                        :cols="tablet?12:laptop ? 5 : 4"
                        :class="tablet?'pt-0':''"
                    )
                        cart-counter(
                            @goToCheckout="goToCheckout"
                        )

            //- empty cart
            v-row.empty(
                style="height: 100%;"
                v-if="!getProductsInCart.length"
            )
                v-col.d-flex.align-center(
                    :cols="tablet?12:6"
                    :style="[tablet?{}:{'height': '100%'}]"
                    :order="tablet?1:''"
                    :class="tablet?'justify-center':''"
                )
                    div(
                        :class="tablet?'d-flex flex-column align-center':''"
                    )
                        h1.header-main.primary--text(
                            :class="tablet?'text-center':''"
                        ) Twój koszyk jest pusty
                        div.mt-6
                            div(
                                :class="tablet?'text-center':''"
                            ) Jeśli dodasz coś do swojego koszyka, pojawi się to tutaj.
                            div(
                                :class="tablet?'text-center':''"
                            ) Chcesz teraz zacząć?
                        v-btn.font-weight-bold.px-7.mt-8(
                            rounded
                            color="secondary"
                            depressed
                            small
                            to="/sklep/meskie"
                        ) Przejdź do sklepu

                v-spacer

                v-col.d-flex.align-center.justify-center(
                    :cols="tablet?12:5"
                    :style="[phone?{'height': '250px'}:tablet?{'height': '350px'}:{'height': '100%'}]"
                )
                    .img
                        img(
                            src="/images/cart.png"
                        )

        //- blobs
        img.blob-1(
            src="/images/blob-1.png"
        )
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

import Header1 from "@/components/molecules/Header1";
import CartProduct from "@/components/organisms/CartProduct";
import CartCounter from "@/components/organisms/CartCounter";

export default {
    name: "cart",

    components: {
        Header1,
        CartProduct,
        CartCounter
    },

    data: () => ({
        selectedShippingMethod: null,
        shippingRules: [
            val => {
                if (val) return true;
                else return "Wybierz metodę dostawy";
            }
        ]
    }),

    computed: {
        ...mapGetters(["getShippingMethods"])
    },

    methods: {
        ...mapMutations(["SELECT_SHIPPING_METHOD"]),
        goToCheckout() {
            let valid = this.$refs.shippingForm.validate();
            if (valid) {
                this.$router.push("/checkout");
            }
        }
    },

    watch: {
        immediate: true,
        selectedShippingMethod: {
            handler(newVal, oldVal) {
                if (newVal != oldVal) this.SELECT_SHIPPING_METHOD(newVal);
            }
        }
    },

    created() {
        if (!!this.getSelectedShipping) {
            this.selectedShippingMethod = this.getSelectedShipping;
        } else {
            this.selectedShippingMethod = this.getShippingMethods[0];
        }
    }
};
</script>

<style lang="sass" scoped>
.cart
    position: relative

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
        @media(max-width: 599.98px)
            // display: none

    .empty
        height: calc( 100vh - 311px )
        @media(max-width: 959.58px)
            height: calc(100vh - 371px)
        @media(max-width: 599.58px)
            height: auto

        .header-main
            font-size: 40px
            line-height: 50px
        .subheader
            font-size: 30px
            line-height: 37px

        .img
            width: 70%
            height: 70%
            @media(max-width: 959.58px)
                width: 100%
                height: 100%
            img
                width: 100%
                height: 100%
                object-fit: contain
</style>