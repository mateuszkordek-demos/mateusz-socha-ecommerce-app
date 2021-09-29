<template lang="pug">
    .navigation(
        style="z-index: 35; position: relative"
    )
        v-app-bar(
            app
            fixed
            color="white"
            :class="{'elevation-0': scrollTop < 10 || hideElevation == true, 'elevation-1': scrollTop >= 10}"
            height="60"
        )
            div(
                style="width: 100%; position: relative;"
            )
                v-container
                    v-row.align-center
                        nuxt-link(
                            to="/"
                            active-class="no-active-class"
                            :style="[tablet ? {'margin-left': '-12px'} : {}]"
                        )
                            v-btn.no-active-class.px-2.py-0(
                                text
                                @click="$bus.$emit('goTop')"
                                height="45"
                                active-class="no-active-class"
                            )
                                //- :class="tablet ? 'pl-0' : ''"
                                .logo.d-flex.flex-column.align-start.font-weight-bold.text-lowercase
                                    .secondary--text Mateusz
                                    .secondary--text Socha

                        v-spacer

                        div(v-if="!laptop")
                            v-btn(
                                text
                                to="/"
                                active-class="active-class"
                                nuxt
                            )
                                .font-weight-bold Home

                            v-btn(
                                text
                                to="/filmy"
                                active-class="active-class"
                                nuxt
                            )
                                .font-weight-bold Filmy

                            v-btn(
                                text
                                to="/o-mnie"
                                active-class="active-class"
                                nuxt
                            )
                                .font-weight-bold O mnie

                            v-btn(
                                text
                                to="/wystepy"
                                active-class="active-class"
                                nuxt
                            )
                                .font-weight-bold Występy

                            v-btn(
                                text
                                to="/sklep/meskie"
                                active-class="active-class"
                                nuxt
                            )
                                .font-weight-bold Sklep

                            v-btn(
                                text
                                to="/kontakt"
                                active-class="active-class"
                                nuxt
                            )
                                .font-weight-bold Kontakt

                            v-btn(
                                text
                                to="/koszyk"
                                active-class="active-class"
                                nuxt
                            )
                                cart-icon

                        v-btn(
                            text
                            to="/koszyk"
                            active-class="active-class"
                            nuxt
                            v-if="laptop"
                        )
                            cart-icon

                        v-app-bar-nav-icon(
                            @click="$emit('openDrawer')"
                            v-if="laptop"
                            depressed
                        )
        div(
            class="product-added-info success d-flex align-center"
            :class="productAddedInfo?'show':''"
        )
            v-container
                v-icon(
                    class="white--text mr-2"
                    size="16"
                ) fa-shopping-cart
                span(
                    class="white--text"
                ) Dodano do koszyka!
</template>

<script>
import CartIcon from "@/components/molecules/CartIcon";

export default {
    name: "navigation",

    components: {
        CartIcon
    },

    props: {
        hideElevation: {
            type: Boolean
        }
    },

    data: () => ({
        scrollTop: 0,
        productAddedInfo: false
    }),

    mounted() {
        this.$bus.$on("productAddedToCart", this.showProductAddedInfo);
    },

    beforeMount() {
        this.scrollTop = window.scrollY;
        window.addEventListener("scroll", this.updateScroll);
    },

    destroyed() {
        window.removeEventListener("scroll", this.updateScroll);
    },

    methods: {
        updateScroll() {
            this.scrollTop = window.scrollY;
        },

        showProductAddedInfo() {
            this.productAddedInfo = true;
            setTimeout(() => (this.productAddedInfo = false), 1000);
        }
    }
};
</script>

<style lang="sass">
.navigation
    a
        text-decoration: none !important
    .logo
        font-size: 20px
        line-height: 18px

    .active-class
        color: #FCB900 !important

    .no-active-class
        &::before
            opacity: 0 !important

    .product-added-info
        position: fixed
        top: 60px
        left: 0
        transform: translateY(-50px)

        height: 40px
        width: 100%
        transition: .3s all ease-in-out
        &.show
            transition: .3s all ease-in-out
            transform: translateY(0px)
</style>