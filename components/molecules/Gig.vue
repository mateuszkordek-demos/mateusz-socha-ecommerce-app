<template lang="pug">
    .gig.mx-3(
        :class="tablet ? 'my-4' : 'my-3'"
    )
        v-row.align-center(
            :class="phone ? 'justify-center' : ''"
        )

            //- gig image
            .gig-img-container.mr-3(
                v-if="!phone"
            )
                img.gig-img(
                    :src="gig.acf.timg.sizes.medium"
                    @click="$router.push({name: 'wystepy-slug', params: {slug: `${gig.slug}-${gig.id}`}})"
                    style="cursor: pointer"
                )

            //- gig informations
            v-col.gig-info-container(
                :cols="phone ? 12 : desktop ? '' : 9"
                :class="phone ? 'px-0 pt-0' : ''"
            )
                v-row
                    v-col(
                        :class="phone ? 'pb-5 pt-0' : laptop ? 'pt-0 pb-1' : ''"
                    )
                        h3(
                            :class="phone ? 'text-center' : ''"
                            @click="$router.push({name: 'wystepy-slug', params: {slug: `${gig.slug}-${gig.id}`}})"
                            style="cursor: pointer"
                        ) {{ fullTitle }}
                v-row
                    v-col(
                        :cols="phone ? 7 : tablet ? 4 : desktop ? 5 : ''"
                        :class="phone ? 'pr-0 pt-1 pb-2' : desktop ? 'py-1' : ''"
                    )
                        i.fal.fa-calendar-alt.primary--text.mr-2.meta-data-icon
                        span {{ gig.acf.date }}
                        span(
                            v-if="phone"
                            style="white-space: nowrap"
                        ) , g. {{ gig.acf.time }}

                    v-col(
                        :cols="tablet ? 8 : desktop ? 7 : ''"
                        :class="desktop ? 'py-1' : ''"
                        v-if="!phone"
                    )
                        i.fal.fa-clock.primary--text.mr-2.meta-data-icon
                        span {{ gig.acf.time }}

                    v-col(
                        :cols="phone ? 5 : tablet ? 4 : desktop ? 5 : ''"
                        :class="phone ? 'pt-1 pb-2' : desktop ? 'py-1' : ''"

                    )
                        i.fal.fa-tag.primary--text.mr-2.meta-data-icon
                        span {{ gig.acf.price }} zł

                    v-col(
                        :cols="phone ? 12 : tablet ? 8 : desktop ? 7 : 4"
                        :class="phone ? 'pt-1 pb-2' : desktop ? 'py-1' : ''"
                    )
                        v-tooltip(
                            bottom
                        )
                            template(
                                v-slot:activator="{ on, attrs }"
                            )
                                div(
                                    v-bind="attrs"
                                    v-on="on"
                                )
                                    i.fal.fa-map-marker-alt.primary--text.meta-data-icon(
                                        :class="laptop ? 'mr-2' : 'mr-1'"
                                    )
                                    span {{ gig.acf.place | truncate(31, '...') }}
                            span {{gig.acf.place}}

            //- purchase button
            .gig-button-container.d-flex.justify-center.align-center(
                :class="phone ? 'pt-2 pb-3' : ''"
            )
                //- v-btn.font-weight-bold.px-7(
                //-     rounded
                //-     color="success"
                //-     depressed
                //-     small
                //-     height="32"
                //-     @click="$router.push({name: 'wystepy-slug', params: {slug: `${gig.slug}-${gig.id}`}})"
                //-     :disabled="gig.acf.soldOut"
                //- ) Kup bilet

                v-tooltip(
                    bottom
                )
                    template(
                        v-slot:activator="{ on, attrs }"
                    )
                        div(
                            v-bind="attrs"
                            v-on="on"
                        )
                            v-btn.font-weight-bold.px-7(
                                rounded
                                color="success"
                                depressed
                                small
                                height="32"
                                @click="$router.push({name: 'wystepy-slug', params: {slug: `${gig.slug}-${gig.id}`}})"
                                :disabled="gig.acf.soldOut"
                            ) Kup bilet


                    span(
                        v-if="gig.acf.soldOut"
                    ) Bilety wyprzedane

                    span(
                        v-if="!gig.acf.soldOut"
                    ) Przejdź do strony wydarzenia


</template>

<script>
export default {
    name: "gig",

    props: {
        gig: {
            type: Object,
            required: true
        }
    },

    computed: {
        fullTitle() {
            return `${this.gig.acf.title} - ${this.gig.acf.city}`;
        },
        numberOfTruncatedChars() {
            if (this.phone) return 37;
            else return 31;
        }
    }
};
</script>

<style lang="sass" scoped>
.gig
    .gig-img-container
        width: 100px
        height: 100px

        .gig-img
            width: 100%
            height: 100%
            object-fit: cover

    .meta-data-icon
        width: 18px
        text-align: center

    .gig-button-container
        margin-left: auto

        @media(max-width: 599.98px)
            width: 100%
</style>