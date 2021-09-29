<template lang="pug">
    .cart-counter
        v-card(
            color="#f8f8f8"
            flat
            :class="phone?'py-3 px-3 mb-3':tablet?'py-4 px-4':'py-6 px-6 mb-5'"
        )
            h3.mb-5 Podsumowanie
            .d-flex.justify-space-between.mb-1
                span.mr-2 Kwota produktów
                span {{ cartProductsPrice }} zł

            .d-flex.justify-space-between.mb-4
                span.mr-2 Przesyłka
                span(
                    v-if="getSelectedShipping"
                ) {{ getSelectedShipping.price }} zł
                span(
                    v-else
                ) -

            v-divider.mb-4

            h4.d-flex.justify-space-between.mb-8
                span.mr-2 Łączna kwota
                span {{ totalCartPriceWithShipping }} zł


            //- go to checkout
            v-btn.font-weight-bold.px-7(
                @click="$emit('goToCheckout')"
                color="success"
                depressed
                rounded
                width="100%"
            ) Przejdź do kasy

</template>

<script>
export default {
    name: "cart-counter"
};
</script>