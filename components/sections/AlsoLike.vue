<template lang="pug">
    .also-like.section-padding.z-index-5
        v-container
            header1 Mogą Ci się spodobać
            products-row(
                :products="otherProducts"
                :noTitle="tablet"
            )
</template>

<script>
import { mapState } from "vuex";

import Header1 from "@/components/molecules/Header1";
import ProductsRow from "@/components/organisms/ProductsRow";

export default {
    name: "also-like",

    components: {
        Header1,
        ProductsRow
    },

    props: {
        otherProducts: {
            type: Array,
            required: true
        }
    },

    computed: {
        ...mapState(["products"])
    }
};
</script>