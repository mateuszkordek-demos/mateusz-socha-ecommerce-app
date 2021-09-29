<template lang="pug">
    .navigation-drawer(
        :style="[phone?{'height': '100%', 'padding': '25% 0 20%'}:{'height': '100%', 'padding': '20% 0 20%'}]"
    )
        v-list.d-flex.flex-column.justify-space-around.pt-0(
            height="100%"
        )

            v-list-item.justify-center(
                to="/"
                active-class="active-class"
            ) Home

            v-list-item.justify-center(
                to="/filmy"
                active-class="active-class"
            ) Filmy

            v-list-item.justify-center(
                to="/o-mnie"
                active-class="active-class"
            ) O mnie

            v-list-item.justify-center(
                to="/wystepy"
                active-class="active-class"
            ) Występy

            v-list-item.justify-center(
                to="/sklep/meskie"
                active-class="active-class"
            ) Sklep

            v-list-item.justify-center(
                to="/kontakt"
                active-class="active-class"
            ) Kontakt

            v-list-item.justify-center(
                to="/koszyk"
                active-class="active-class"
            )
                span.mr-2 Koszyk
                cart-icon(
                    style="padding-top: 2px"
                    v-if="products_in_cart[0]"
                )


</template>
<script>
import { mapState } from "vuex";

import CartIcon from "@/components/molecules/CartIcon";

export default {
    name: "navigation-drawer",

    components: {
        CartIcon
    },

    computed: {
        ...mapState(["products_in_cart"])
    }
};
</script>

<style lang="sass" scoped>
.navigation-drawer
    .active-class
        color: #FCB900 !important
</style>