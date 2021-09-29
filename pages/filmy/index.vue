<template lang="pug">
    div
        films
        //- newsletter
</template>

<script>
// import axios from "axios";
// import fetchData from "@/plugins/fetch";

import Films from "@/components/sections/Films";
import Newsletter from "@/components/sections/Newsletter";

export default {
    components: {
        Newsletter,
        Films
    },

    head: {
        title: "Mateusz Socha | Filmy",
        meta: [
            // {
            //     hid: "description",
            //     name: "description",
            //     content: ""
            // },
            {
                property: "og:title",
                content: "Mateusz Socha | Filmy"
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