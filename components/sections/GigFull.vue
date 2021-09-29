<template lang="pug">
    .gig-full.section-padding
        v-container
            v-row(
                height="330"
            )
                v-col(
                    :cols="laptop?12:8"
                    :class="phone?'':tablet?'pb-4':laptop?'pb-6':''"
                )
                    .gig-img
                        img(
                            :src="gig.acf.img.sizes.large"
                        )


                v-col(
                    :cols="phone?12:tablet?5:4"
                    :order="phone?'':laptop?'1':''"
                )
                    v-card.py-6.px-6.d-flex.flex-column.justify-center(
                        color="#f8f8f8"
                        flat
                        :height="laptop?'auto':'100%'"
                    )
                        h3.mb-5 {{gig.acf.title}} - {{ gig.acf.city }}
                        p
                            i.fal.fa-calendar-alt.primary--text.mr-2.meta-data-icon
                            span {{ gig.acf.date }}
                        p
                            i.fal.fa-clock.primary--text.mr-2.meta-data-icon
                            span {{ gig.acf.time }}
                        p
                            i.fal.fa-tag.primary--text.mr-2.meta-data-icon
                            span {{ gig.acf.price }} zł
                        .d-flex
                            i.fal.fa-map-marker-alt.primary--text.mr-2.meta-data-icon.mt-1
                            div {{ gig.acf.city }}, {{ gig.acf.place }}



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
                                    v-btn.font-weight-bold.px-7.mt-7(
                                        rounded
                                        color="success"
                                        depressed
                                        :disabled="gig.acf.soldOut"
                                        :href="gig.acf.link"
                                        target="_blank"
                                        width="100%"
                                    ) Kup bilet


                            span(
                                v-if="gig.acf.soldOut"
                            ) Bilety wyprzedane

                            span(
                                v-if="!gig.acf.soldOut"
                            ) Kup bilet

                v-col(
                    :cols="phone?12:tablet?7:8"
                )
                    p(
                        v-html="gig.acf.description"
                    )

            v-row
                v-col.d-flex.justify-center
                    v-btn.font-weight-bold.px-7.py-4(
                        rounded
                        color="secondary"
                        depressed
                        small
                        to="/wystepy"
                    )
                        i.fas.fa-chevron-left.mr-1(
                            style="font-size: 10px"
                        )
                        span Wróć do wszystkich występów
</template>

<script>
export default {
    name: "gig-full",

    props: {
        gig: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="sass" scoped>
.gig-full
    .gig-img
        width: 100%
        height: 100%
        border-radius: 10px
        overflow: hidden
        img
            width: 100%
            height: 100%
            object-fit: cover
</style>