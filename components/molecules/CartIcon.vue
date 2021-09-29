<template lang="pug">
    .cart-icon.d-flex
        i.icon.far.fa-shopping-cart
        .cart-number(
            v-if="numberOfItemsInCart>0"
        ) {{numberOfItemsInCart}}

</template>

<script>
import { mapState } from "vuex";

export default {
    name: "cart-icon",

    computed: {
        ...mapState(["products_in_cart"]),

        numberOfItemsInCart() {
            return this.products_in_cart.length;
        }
    }
};
</script>

<style lang="sass" scoped>
.cart-icon
    position: relative

    .cart-number
        display: flex
        justify-content: center
        align-items: center
        position: absolute
        right: -50%
        bottom: -50%
        background-color: #FCB900
        border-radius: 50%
        height: 15px
        width: 15px
        color: white
        line-height: 15px
        font-size: 10px
        padding-bottom: 1px
</style>