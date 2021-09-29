import Vue from "vue";
import { mapGetters } from 'vuex'

let Mixins = {
    computed: {
        ...mapGetters(["getSelectedShipping", "getProductsInCart"]),

        cartProductsPrice() {
            let arrOfPrices = this.getProductsInCart.map(
                product => product.purchasedQuantity * product.price
            );

            return arrOfPrices.reduce((a, b) => a + b, 0).toFixed(2);
        },

        totalCartPriceWithShipping() {
            let totalPrice
            totalPrice = this.cartProductsPrice
            if (!!this.getSelectedShipping) {
                totalPrice = (parseFloat(totalPrice) + parseFloat(this.getSelectedShipping.price)).toFixed(2);
            }
            return totalPrice
        },


    },
};

Vue.mixin(Mixins);
