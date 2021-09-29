<template lang="pug">
    div
        shop(
            :products="getMensProducts"
        )
        //- newsletter
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "@/components/sections/Shop";
import Newsletter from "@/components/sections/Newsletter";
export default {
    components: {
        Shop,
        Newsletter
    },

    computed: {
        ...mapGetters(["getMensProducts"])
    },

    head: {
        title: "Mateusz Socha | Sklep",
        meta: [
            // {
            //     hid: "description",
            //     name: "description",
            //     content: ""
            // },
            {
                property: "og:image",
                content: "https://mateuszsocha.com/images/OG-Sklep.png"
            },
            {
                property: "og:title",
                content: "Mateusz Socha | Sklep"
            },
            {
                property: "og:type",
                content: "website"
            }
            // {
            //     property:"og:description",
            //     content: ''
            // },
        ]
    }
};
</script>