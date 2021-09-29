<template lang="pug">
    div
        gigs
        //- newsletter
</template>

<script>
// import axios from "axios";
// import fetchData from "@/plugins/fetch";

import Gigs from "@/components/sections/Gigs";
import Newsletter from "@/components/sections/Newsletter";

export default {
    components: {
        Gigs,
        Newsletter
    },

    head: {
        title: "Mateusz Socha | Nadchodzące występy",
        meta: [
            // {
            //     hid: "description",
            //     name: "description",
            //     content: ""
            // },
            {
                property: "og:title",
                content: "Mateusz Socha | Nadchodzące występy"
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