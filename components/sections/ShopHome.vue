<template lang="pug">
    .shop-home.section-padding(
        :class="phone ? 'pt-4 pb-8' : tablet ? '' : ''"
    )
        v-container.z-index-5
            header1(center) Sklep
            products-row(
                :products="$options.filters.chunkItems(productsToShow, 1, numberOfProductsShown)"
                :class="tablet ? 'pt-4' : 'pt-4'"
                v-if="getProducts.length"
                :noTitle="tablet"
            )

            //- button
            v-row(
                :class="tablet?'mt-5':'mt-12'"
            )
                v-col.d-flex.justify-center
                    v-btn.font-weight-bold.px-7(
                        rounded
                        color="secondary"
                        depressed
                        small
                        to="/sklep/meskie"
                        height="32"
                    ) Zobacz wszystkie
        img.blob-1(
            src="/images/blob-2.png"
            :height="phone ? 70 : tablet ? 120 : desktop ? 200 : 230"
        )
</template>

<script>
import { mapGetters } from "vuex";

import Header1 from "@/components/molecules/Header1";
import ProductsRow from "@/components/organisms/ProductsRow";

export default {
    name: "shop-home",

    components: {
        Header1,
        ProductsRow
    },

    computed: {
        ...mapGetters(["getProducts"]),
        numberOfProductsShown() {
            if (this.tablet) {
                return 3;
            } else {
                return 4;
            }
        },
        productsToShow() {
            // 215 - ile meska,
            // 210 - ile damska,
            // 220 - karolinka meska,
            // 225 - karolinka damska
            let arr = [];
            arr.push(this.getProducts.find(a => a.id == 215));
            arr.push(this.getProducts.find(a => a.id == 210));
            arr.push(this.getProducts.find(a => a.id == 220));
            arr.push(this.getProducts.find(a => a.id == 225));
            return arr;
        }
    }
};
</script>

<style lang="sass" scoped>
.shop-home
    position: relative

.blob-1
    position: absolute
    transform: rotate(180deg)
    right: -90px
    top: 80px

    @media(max-width: 959.98px)
        right: -30px
        top: 100px
    @media(max-width: 599.98px)
        top: 90px
        right: -10px
</style>