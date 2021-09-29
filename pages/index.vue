<template lang="pug">
    div
        hero
        about-home
        films-home
        gigs-home
        shop-home
        //- newsletter

</template>

<script>
// import axios from "axios";
// import fetchData from "@/plugins/fetch";
import { mapState } from "vuex";

import Hero from "@/components/sections/Hero";
import AboutHome from "@/components/sections/AboutHome";
import FilmsHome from "@/components/sections/FilmsHome";
import GigsHome from "@/components/sections/GigsHome";
import ShopHome from "@/components/sections/ShopHome";
import Newsletter from "@/components/sections/Newsletter";

export default {
    name: "index",
    components: {
        Hero,
        AboutHome,
        FilmsHome,
        GigsHome,
        ShopHome,
        Newsletter
    },

    head: {
        meta: [
            // {
            //     hid: "description",
            //     name: "description",
            //     content: ""
            // },
            {
                property: "og:title",
                content: "Mateusz Socha"
            },
            {
                property: "og:type",
                content: "website"
            },
            {
                property: "og:image",
                content: "https://mateuszsocha.com/images/OG-SochaHome.jpg"
            }
            // {
            //     property:"og:description",
            //     content: ''
            // },
        ]
    }

    // async fetch({ store, params }) {
    //     await fetchData(store);
    // }
};
</script>


