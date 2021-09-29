<template lang="pug">
    div
        about
        //- newsletter
</template>

<script>
import About from "@/components/sections/About";
import Newsletter from "@/components/sections/Newsletter";

export default {
    components: {
        Newsletter,
        About
    },

    head: {
        title: "Mateusz Socha | O mnie",
        meta: [
            // {
            //     hid: "description",
            //     name: "description",
            //     content: ""
            // },
            {
                property: "og:title",
                content: "Mateusz Socha | O mnie"
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
};
</script>