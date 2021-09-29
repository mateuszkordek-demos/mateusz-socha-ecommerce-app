<template lang="pug">
    .gigs-home.section-padding.darker-bg(
        :class="phone ? 'pt-4' : ''"
    )
        v-container.z-index-5
            header1(center) Nadchodzące występy
            v-row(
                :class="phone ? 'pb-5' : 'pb-10'"
            )
                v-col(
                    cols="12"
                    :class="phone ? '' : 'px-5'"
                )
                    v-divider
                    div(
                        v-for="(gig, index) in $options.filters.chunkItems(gigsByDate, 1, 3)"
                        :key="index"
                    )
                        gig(:gig="gig")
                        v-divider
            v-row
                v-col.d-flex.justify-center
                    v-btn.font-weight-bold.px-7(
                        rounded
                        color="secondary"
                        depressed
                        small
                        to="/wystepy"
                        height="32"
                    ) Zobacz wszystkie
        img.blob-1(
            src="/images/blob-1.png"
            :height="tablet ? 80 : laptop ? 90 : 110"
        )
</template>

<script>
import { mapState } from "vuex";
import sortGigs from "@/plugins/sort";

import Header1 from "@/components/molecules/Header1";
import Gig from "@/components/molecules/Gig";

export default {
    name: "gigs-home",

    components: {
        Header1,
        Gig
    },

    computed: {
        ...mapState(["gigs"]),
        gigsByDate() {
            return sortGigs(this.gigs);
        }
    }
};
</script>

<style lang="sass" scoped>
.gigs-home
    position: relative

    .blob-1
        position: absolute
        transform: rotate(210deg)
        left: -50px
        bottom: 20px

        @media(max-width: 959.98px)
            bottom: -40px
            left: -30px
        @media(max-width: 599.98px)
            display: none
</style>