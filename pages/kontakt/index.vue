<template lang="pug">
    div
        contact
        //- newsletter
</template>

<script>
import Contact from "@/components/sections/Contact";
import Newsletter from "@/components/sections/Newsletter";

export default {
    components: {
        Newsletter,
        Contact
    },

    head: {
        title: "Mateusz Socha | Kontakt",
        meta: [
            // {
            //     hid: "description",
            //     name: "description",
            //     content: ""
            // },
            {
                property: "og:title",
                content: "Mateusz Socha | Kontakt"
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