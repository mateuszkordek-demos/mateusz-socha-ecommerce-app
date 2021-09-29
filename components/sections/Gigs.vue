<template lang="pug">
    .gigs.section-padding
        v-container.z-index-5
            header1(center) Nadchodzące występy
            v-row.justify-center

                p.text-center
                    span Wybierz miasto, by wyszukać wydarzenia
                    span(v-if="phone") <br>
                    span.ml-1 w swojej okolicy
            v-row.justify-center
                v-col(
                    :cols="phone?10:tablet?6:4"
                )
                    v-select(
                        v-model="searchCity"
                        :items="cities"
                        :item-text="item => item"
                        :item-value="item => item"
                        clearable
                        outlined
                        dense
                        label="Wszystkie miasta"
                        background-color="white"
                        hide-details
                        single-line
                    )


            v-row(
                :class="tablet ? 'pb-0' : 'pb-10'"
            )
                v-col(
                    cols="12"
                    :class="phone ? '' : 'px-5'"
                )
                    v-divider
                    div(
                        v-for="(gig, index) in sortedGigs"
                        :key="index"
                    )
                        gig(:gig="gig")
                        v-divider

                    div(
                        v-if="!gigsByDate.length"
                        class="py-5 d-flex justify-center"
                    ) Brak nadchodzących wydarzeń.

        //- blobs
        img.blob-1(
            src="/images/blob-1.png"
        )
        img.blob-2(
            src="/images/blob-2.png"
        )
</template>
<script>
import { mapState } from "vuex";
import sortGigs from "@/plugins/sort";

import Header1 from "@/components/molecules/Header1";
import Gig from "@/components/molecules/Gig";

export default {
    name: "gigs",

    components: {
        Header1,
        Gig
    },

    data: () => ({
        cities: [],
        searchCity: null
    }),

    computed: {
        ...mapState(["gigs"]),
        gigsByDate() {
            return sortGigs(this.gigs);
        },

        sortedGigs() {
            if (!this.searchCity) {
                return this.gigsByDate;
            } else {
                return this.gigsByDate.filter(
                    a => a.acf.city == this.searchCity
                );
            }
        }
    },

    mounted() {
        this.gigs.forEach(gig => {
            if (!this.cities.includes(gig.acf.city)) {
                this.cities.push(gig.acf.city);
            }
        });
    }
};
</script>

<style lang="sass" scoped>
.gigs
    position: relative

.blob-1
    position: absolute
    transform: rotate(60deg)
    right: -120px
    top: 30px
    height: 250px
    @media(max-width: 1450px)
        height: 180px
        right: -70px
    @media(max-width: 959.98px)
        height: 160px
        top: 60px
        right: -90px
    @media(max-width: 599.98px)
        transform: rotate(80deg)
        top: 70px

.blob-2
    position: absolute
    left: -20px
    bottom: -20px
    height: 130px

    @media(max-width: 1450px)
        height: 100px

    @media(max-width: 959.98px)
        transform: rotate(-10deg)
        left: initial
        right: -20px
        bottom: -70px
    @media(max-width: 599.98px)
        bottom: -50px
        height: 80px
</style>