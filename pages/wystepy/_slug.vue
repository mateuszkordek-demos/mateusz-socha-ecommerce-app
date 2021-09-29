<template lang="pug">
    div
        gig-full(
            :gig="gig"
        )

</template>

<script>
// import axios from "axios";
// import fetchData from "@/plugins/fetch";
import { mapState } from "vuex";

import GigFull from "@/components/sections/GigFull";

export default {
    name: "wystepy-slug",

    components: {
        GigFull
    },

    data: () => ({
        gig: null
    }),

    computed: {
        ...mapState(["gigs"])
    },

    created() {
        this.gig = this.gigs.filter(gig => {
            return `${gig.slug}-${gig.id}` == this.$route.params.slug;
        })[0];
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