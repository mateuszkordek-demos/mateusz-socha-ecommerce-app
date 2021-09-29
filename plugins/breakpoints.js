import Vue from 'vue'


let Breakpoints = {
    computed: {

        // breakpoints only

        wideScreenOnly() {
            return this.$breakpoints.xl
        },

        desktopOnly() {
            return this.$breakpoints.lg
        },

        laptopOnly() {
            return this.$breakpoints.md
        },

        tabletOnly() {
            return this.$breakpoints.sm
        },

        phoneOnly() {
            return this.$breakpoints.xs
        },

        // breakpoints and down

        wideScreen() {
            return this.$breakpoints.xl || this.desktop
        },

        desktop() {
            return this.$breakpoints.lg || this.laptop
        },

        laptop() {
            return this.$breakpoints.md || this.tablet
        },

        tablet() {
            return this.$breakpoints.sm || this.phone
        },

        phone() {
            return this.$breakpoints.xs
        },
    },

    methods: {
        open(link) {
            window.open(link, '_blank')
        }
    }
}

Vue.mixin(Breakpoints)