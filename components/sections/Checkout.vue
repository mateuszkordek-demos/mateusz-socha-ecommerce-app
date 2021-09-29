<template lang="pug">
    .checkout.section-padding(
        v-if="showCheckout"
    )
        v-container.z-index-5
            header1 Finalizacja zamówienia
            v-row
                //- left
                v-col(
                    :cols="laptop ? 12 : 8"
                    :order="tablet?1:''"
                )
                    purchase-form

                //- right
                v-col(
                    :cols="laptop ? 12 : 4"
                )
                    v-card(
                        color="#f8f8f8"
                        :class="phone?'py-0 px-3':tablet?'py-1 px-4':'py-3 px-6'"
                        flat
                    )

                        v-row
                            //- payu
                            v-col(
                                :cols="phone ? 12 : laptop ? 12 : 12"
                            ).pb-8
                                //- :class="tabletOnly ? 'pr-10' : ''"
                                h3.mb-5 Płatność
                                .payu-img.mb-5(
                                    :class="tablet ? 'mt-10' : ''"
                                )
                                    img(
                                        src="/images/icons/payu.png"
                                    )
                                div(
                                    :class="laptop?'text-center':''"
                                    style="max-width: 500px; margin: 0 auto"
                                ) Po zatwierdzeniu zamówienia, zostaniesz przekierowany na platformę PayU, gdzie będziesz mógł dokonać finalizacji transakcji.


                                //- .payu-img.mb-5(
                                //-     :class="tablet ? 'mt-10' : ''"
                                //- )
                                //-     img(
                                //-         src="/images/icons/transfer.png"
                                //-     )
                                //- p(
                                //-     :class="phone?'text-center':''"
                                //- ) Płatność na chwilę obecną tylko w formie przelewu bankowego.

                            //- v-col(
                            //-     :cols="phone ? 12 : laptop ? 6 : 12"
                            //- ).pb-8
                            //-     h3.mb-5 Dane do przelewu:
                            //-     div.font-weight-bold Mateusz Socha
                            //-     div.font-weight-bold 62 2490 0005 0000 4530 2643 2630

                            //-     v-alert(
                            //-         type="info"
                            //-         dense
                            //-         color="blue lighten-1"
                            //-         style="z-index: 5"
                            //-         class="mt-5"
                            //-         outlined
                            //-     )
                            //-         div(
                            //-             style="color: #444"
                            //-         ) W tytule przelewu wpisz numer zamówienia, który otrzymasz na maila po dokonaniu zakupu.

                            //- summary
                            v-col(
                                :cols="phone ? 12 : tablet ? 12 : 12"
                            )
                                h3.mb-5 Podsumowanie
                                div.mb-4.d-flex.justify-space-between(
                                    v-for="(product, index) in getProductsInCart"
                                    :key="index"
                                )
                                    div(
                                        style="max-width: 80%;"
                                    )
                                        div
                                            span {{ product.name }}
                                        div
                                            span(
                                                v-if="product.wear == true"
                                                style="white-space: nowrap"
                                            ) roz. {{ product.purchasedSize }}
                                            span.mr-1(
                                                v-if="product.wear == true"
                                            ) ,
                                            span {{product.purchasedQuantity}} szt.

                                    div(
                                        style="white-space: nowrap"
                                    ) {{(product.price * product.purchasedQuantity).toFixed(2)}} zł


                                v-divider.mb-4(
                                    v-if="getProductsInCart.length"
                                )

                                .d-flex.justify-space-between.mb-1
                                    span.mr-2 Kwota produktów
                                    span(
                                        style="white-space: nowrap"
                                    ) {{ cartProductsPrice }} zł

                                .d-flex.justify-space-between.mb-4
                                    span.mr-2 Przesyłka
                                    span(
                                        style="white-space: nowrap"
                                    ) {{ getSelectedShipping.price }} zł

                                v-divider.mb-4

                                h4.d-flex.justify-space-between.mb-5
                                    span.mr-2 Łączna kwota
                                    span(
                                        style="white-space: nowrap"
                                    ) {{ totalCartPriceWithShipping}} zł

        //- blobs
        img.blob-1(
            src="/images/blob-1.png"
        )
        img.blob-2(
            src="/images/blob-2.png"
        )
</template>

<script>
import { mapState } from "vuex";

import Header1 from "@/components/molecules/Header1";
import PurchaseForm from "@/components/organisms/PurchaseForm";

export default {
    name: "checkout",

    components: {
        Header1,
        PurchaseForm
    },

    computed: {
        showCheckout() {
            if (!this.getSelectedShipping || !this.getProductsInCart.length) {
                return false;
            } else return true;
        }
    },

    created() {
        if (!this.showCheckout) {
            this.$router.push("/koszyk");
        }
    }
};
</script>

<style lang="sass">
.checkout
    position: relative
    .payu-img
        width: 100%
        height: 50px
        img
            width: 100%
            height: 100%
            object-fit: contain

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
        top: 450px
        height: 120px

        @media(max-width: 1450px)
            height: 120px

        @media(max-width: 959.98px)
            left: -35px
</style>