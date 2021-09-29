<template lang="pug">
    .product-info.section-padding
        v-container

            //- v-alert(
            //-     type="warning"
            //-     dense
            //-     color="warning"
            //-     class="preorder mb-10"
            //-     style="z-index: 5"
            //-     outlined
            //-     border="right"
            //- )
            //-     div(
            //-         style="color: #444"
            //-     )
            //-         div Z dniem 16 grudnia zamówienia pre-orderu zostały zakończone.
            //-         div Kolejne zamówienia będą realizowane po Świętach.
            v-row.justify-center.z-index-5
                //- left
                //- v-col(
                //-     :cols="tablet?12:laptop?6:desktop?7:8"
                //- )
                div
                    //- product images
                    div(
                        class="d-flex px-3 mb-7"
                        :class="tablet?'':laptop?'mr-5':'mr-10'"
                    )
                        //- small
                        div(
                            class="d-flex flex-column justify-space-between mr-4"
                        )
                            .product-img.small-img(
                                v-if="product.img_1"
                            )
                                v-img(
                                    :aspect-ratio="3/4"
                                    :src="product.img_1"
                                    position="top center"
                                    :width="phone?'90px':tablet?'145px':laptop?'110px':desktop?'145px':'192px'"
                                    @click="openGallery(product.img_1)"
                                )

                            .product-img.small-img(
                                v-if="product.img_2"
                            )
                                v-img(
                                    :aspect-ratio="3/4"
                                    :src="product.img_2"
                                    position="top center"
                                    :width="phone?'90px':tablet?'145px':laptop?'110px':desktop?'145px':'192px'"
                                    @click="openGallery(product.img_2)"
                                )

                        //- big
                        div(
                            class="product-img main-img"
                        )
                            v-img(
                                :aspect-ratio="3/4"
                                :width="phone?'190px':tablet?'300px':laptop?'230px':desktop?'300px':'400px'"
                                :src="product.main_img"
                                position="top center"
                                @click="openGallery(product.main_img)"
                            )
                //- right
                //- v-col(
                //-     :cols="phone?12:tablet?12:laptop?6:desktop?5:4"
                //- )
                div.px-3(
                    style="max-width: 350px"
                )
                    //- product description
                    .product-description(
                        :class="tablet ? 'mb-3' : 'mb-6'"
                    )
                        h2(
                            :class="tablet ? 'mb-1' : 'mb-4'"
                            style="font-size: 25px"
                        ) {{product.name}}

                        //- p.mb-3(
                        //-     style="font-size: 25px;"
                        //- ) {{product.price}} zł

                        div(
                            v-html="product.priceHtml"
                            class="price-html mb-5"
                        )
                        //- h4.mb-3 Opis produktu
                        //- div(
                        //-     v-html="product.description"
                        //- )
                        .availability
                            v-alert(
                                :type="productAvailability == 'instock' ? 'success' : productAvailability == 'onbackorder' ? 'warning' : productAvailability == 'outofstock' ? 'error' : 'info'"
                                dense
                                text
                            )
                                span(
                                    v-if="productAvailability == null"
                                ) Sprawdzanie dostępności...

                                span(
                                    v-if="productAvailability == 'instock'"
                                ) Produkt dostępny

                                span(
                                    v-if="productAvailability == 'onbackorder'"
                                ) Ostatnie sztuki!

                                span(
                                    v-if="productAvailability == 'outofstock'"
                                ) Produkt niedostępny


                        p.mt-3(
                            v-if="product.wear==true"
                        )
                            span Przed zakupem sprawdź
                            span.size-table-link.ml-1(
                                style="text-decoration: underline"
                                @click="sizeTableDialog=true"
                            ) tabelę rozmiarów
                            span .


                    //- add to cart form
                    v-form.d-flex.justify-space-between(
                        ref="cartForm"
                        v-model="valid"
                        lazy-validation
                        :class="tablet ? '' : 'pb-1'"
                    )

                        //- size select for wearables
                        div.pr-5(
                            v-if="product.wear==true"
                            :style="[tablet ? {'width': '100%'} : {'width': '200px'}]"
                        )
                            h4.mb-2 Wybierz rozmiar
                            v-select(
                                @change="chooseQuantity =1"
                                v-model="chooseSize"
                                :items="product.sizes"
                                :item-text="item => item.size"
                                :item-value="item => item"
                                outlined
                                dense
                                background-color="white"
                                single-line
                                required
                                :rules="selectSizeRules"
                                style="width: 100%"
                            )

                        //- quantity select
                        div
                            h4.mb-2 Ilość
                            .quantity-btns.d-flex.mb-7
                                v-btn.minus(
                                    @click="chooseQuantity -= 1"
                                    :disabled="this.chooseQuantity>1 ? false : true"
                                    small
                                    height="39"
                                    color="#EBEBEB"
                                    elevation="0"
                                    tile

                                ) -
                                .quantity.d-flex.align-center.px-6(
                                    style="height: 39px;"
                                ) {{ chooseQuantity }}
                                v-btn.plus(
                                    @click="chooseQuantity += 1"
                                    small
                                    height="39"
                                    color="#EBEBEB"
                                    elevation="0"
                                    tile
                                ) +


                    //- add to cart
                    v-btn.font-weight-bold.px-7(
                        @click="validate"
                        color="secondary"
                        depressed
                        rounded
                        width="100%"
                        :disabled="productAvailability=='outofstock' || productAvailability==null ? true : false"
                    ) Dodaj do koszyka

                    v-btn(
                        text
                        to="/koszyk"
                        class="mt-2"
                        width="100%"
                        rounded
                        v-if="getProductsInCart.length"
                        color="secondary"
                    ) Przejdź do koszyka

        //- image popup
        v-dialog(
            v-model="dialog"
            overlay-opacity=".8"
            width="unset"
        )
            img.dialog-img(
                :src="dialogImg"
            )

        //- sizes table popup
        v-dialog(
            v-model="sizeTableDialog"
            overlay-opacity=".8"
            width="unset"
        )
            size-table(
                @closeSizeTable="sizeTableDialog = false"
            )

        //- blobs
        img.blob-1(
            src="/images/blob-1.png"
        )
        img.blob-2(
            src="/images/blob-2.png"
        )

        client-only
            LightGallery(
                :images="productImages"
                :index="galleryIndex"
                :disable-scroll="true"
                @close="galleryIndex = null"
                disableScroll
            )
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import axios from "axios";

import SizeTable from "@/components/organisms/SizeTable";
import AspectRatio from "@/components/enlighten/AspectRatio";

export default {
    name: "product-info",

    components: {
        SizeTable,
        AspectRatio
    },

    props: {
        product: {
            type: Object,
            required: true
        }
    },

    data: () => ({
        galleryIndex: null,
        threeImages: null,
        dialog: false,
        dialogImg: null,
        sizeTableDialog: false,
        chooseSize: null,
        chooseQuantity: 1,
        productAvailability: null,
        valid: null,
        selectSizeRules: [
            val => {
                if (val) return true;
                else return "Wybierz rozmiar";
            }
        ],
        selectQuantityRules: [
            val => {
                if (val) return true;
                else return "Wybierz ilość";
            }
        ]
    }),

    computed: {
        ...mapState(["products_in_cart", "products"]),

        productToAdd() {
            // creates object later sent to products_in_cart state in vuex
            let productToAdd = {};
            productToAdd = JSON.parse(JSON.stringify(this.product));
            if (this.product.wear == true) {
                productToAdd.purchasedSize = this.chooseSize.size;
            }
            productToAdd.purchasedQuantity = this.chooseQuantity;
            return productToAdd;
        },

        productImages() {
            let arr = [];
            if (!!this.product.main_img) {
                arr.push(this.product.main_img);
            }
            if (!!this.product.img_1) {
                arr.push(this.product.img_1);
            }
            if (!!this.product.img_2) {
                arr.push(this.product.img_2);
            }
            return arr;
        }
    },

    methods: {
        ...mapActions(["addProductToCart"]),

        openDialog(val) {
            this.dialog = true;
            this.dialogImg = val;
        },

        validate() {
            let valid = this.$refs.cartForm.validate();
            if (valid) {
                this.addProductToCart(this.productToAdd);
                this.$bus.$emit("productAddedToCart");
            }
        },

        openGallery(val) {
            const index = this.productImages.indexOf(val);
            // console.log(index);
            this.galleryIndex = index;
        }
    },

    async created() {
        let currProductId = this.product.id;
        const url = "https://mateusz-socha-microservice-prod.enl-projects.com";

        let availability = await axios.get(
            `${url}/products/availability/${currProductId}`
        );
        this.productAvailability = availability.data.data.availability;
    },

    mounted() {
        // needed for proper styling of side images
        if (this.product.img_1 && this.product.img_2 && this.product.img_3) {
            this.threeImages = true;
        } else this.threeImages = false;
    }
};
</script>
<style lang="sass">
.product-info
    position: relative

    .product-description
        ul
            li
                margin-bottom: 5px

        .size-table-link
            cursor: pointer
            &:hover
                color: #FCB900

    .product-img
        &.main-img
            cursor: pointer
            border-radius: 10px
            overflow: hidden

        &.small-img
            cursor: pointer
            border-radius: 10px
            overflow: hidden

    .v-image
        transition: .3s all ease-in-out
        &:hover
            transform: scale(1.05) !important

    .dialog-img
        height: 100%
        width: 100%
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
        @media(max-width: 599.98px)
            top: 250px

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
        @media(max-width: 599.98px)
            display: none

    .error--text
        // color: #fcb900 !important
        // caret-color: #fcb900 !important

    .availability
        .error--text
            color: #dd2c00 !important
            caret-color: #dd2c00 !important



.light-gallery__close
    background-color: #727DB8 !important
    // border-radius: 50%
.light-gallery__prev, .light-gallery__next
    background-color: #FCB900 !important

.preorder
    .v-alert__icon
        font-size: 40px
        padding-top: 20px
</style>