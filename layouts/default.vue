<template lang="pug">
    v-app(
        style="min-height: 100vh"
    )
        privacy-banner

        div
            navigation(
                @openDrawer="drawerOpened = true"
                :hideElevation="drawerOpened?true:false"
            )
            v-navigation-drawer(
                app
                v-model="drawerOpened"
                temporary
            )
                navigation-drawer(
                    style="width: 100%;"
                )

            v-main
                nuxt


        div
            footer-section
            enl-footer(name="Mateusz Socha")
</template>

<script>
import Navigation from "@/components/organisms/Navigation";
import NavigationDrawer from "@/components/organisms/NavigationDrawer";
import EnlFooter from "@/components/enlighten/EnlFooter";
import FooterSection from "@/components/sections/FooterSection";
import PrivacyBanner from "@/components/organisms/PrivacyBanner";
import fetchData from "@/plugins/fetch";
import { mapActions, mapState } from "vuex";

export default {
    components: {
        Navigation,
        NavigationDrawer,
        EnlFooter,
        FooterSection,
        PrivacyBanner
    },

    data: () => ({
        drawerOpened: false
    }),

    computed: {
        ...mapState(["isFetched"])
    },

    mounted() {
        this.$bus.$on("goTop", () => {
            this.$vuetify.goTo(0);
        });
    },

    watch: {
        isFetched: {
            immediate: true,
            handler(val) {
                if (val == true) {
                    this.loadCartFromLocalStorage();
                }
            }
        }
    },

    methods: {
        ...mapActions(["loadCartFromLocalStorage"])
    },

    async fetch() {
        await fetchData(this);
    }
};
</script>

<style lang="sass" >
.v-application--wrap
    display: flex
    flex-direction: column
    justify-content: space-between
</style>