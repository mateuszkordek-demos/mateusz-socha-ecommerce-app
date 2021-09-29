<template lang="pug">
    .footer-section.secondary
        v-container
            v-row(
                :class="phone ? 'justify-center' : ''"
            )
                //- left
                div.d-flex.flex-column(
                    :class="phone ? 'px-7 py-2' : tablet ? 'justify-center align-center' : ''"
                    :style="[phone ? {'width': '75%'} : tablet ? {'width': '50%'} : {}]"
                    v-if="!phone"
                )
                    div
                        nuxt-link(
                            to="/"
                        )
                            v-btn.logo-btn(
                                text
                                @click="$bus.$emit('goTop')"
                                height="60"
                                :class="tablet ? 'pl-0' : ''"
                            )
                                .logo.d-flex.flex-column.align-start.font-weight-bold.text-lowercase
                                    .primary--text Mateusz
                                    .primary--text Socha
                        div(
                            :class="tablet ? 'pl-0' : 'pl-4'"
                        )
                            .sub-text.mt-3(
                                :class="phone ? 'mb-3' : 'mb-1'"
                            )
                                span.white--text stand-uper
                                span.primary--text.mx-1 |
                                span.white--text komik

                            //- social media
                            .media-container.d-flex.justify-space-between.pr-2

                                v-btn.pa-2(
                                    href="https://www.facebook.com/Socha.StandUp"
                                    target="_blank"
                                    text
                                    rounded
                                )
                                    img(
                                        src="/images/icons/facebook.png"
                                    )

                                v-btn.pa-2(
                                    href="https://www.instagram.com/socha_standup"
                                    target="_blank"
                                    text
                                    rounded
                                )
                                    img(
                                        src="/images/icons/instagram.png"
                                    )

                                v-btn.pa-2(
                                    href="https://www.youtube.com/channel/UC1KCdhvSqa3OLWql8sou3OA"
                                    target="_blank"
                                    text
                                    rounded
                                )
                                    img(
                                        src="/images/icons/youtube.png"
                                    )

                v-spacer(
                    v-if="!phone"
                )

                //- right
                v-col(
                    :cols="phone ? 9 : tablet ? 6 : laptop ? 6 : 6"
                )
                    v-row
                        v-col(
                            :cols="tablet ? 6 : laptop ? 4 : 4"
                        )
                            v-btn(
                                text
                                to="/"
                                active-class="active-class"
                                nuxt
                                color="white"
                            )
                                .font-weight-bold Home

                        v-col(
                            :cols="tablet ? 6 : laptop ? 4 : 4"
                        )
                            v-btn(
                                text
                                to="/filmy"
                                active-class="active-class"
                                nuxt
                                color="white"
                            )
                                .font-weight-bold Filmy

                        v-col(
                            :cols="tablet ? 6 : laptop ? 4 : 4"
                        )
                            v-btn(
                                text
                                to="/o-mnie"
                                active-class="active-class"
                                nuxt
                                color="white"
                            )
                                .font-weight-bold O mnie

                        v-col(
                            :cols="tablet ? 6 : laptop ? 4 : 4"
                        )
                            v-btn(
                                text
                                to="/wystepy"
                                active-class="active-class"
                                nuxt
                                color="white"
                            )
                                .font-weight-bold Występy

                        v-col(
                            :cols="tablet ? 6 : laptop ? 4 : 4"
                        )
                            v-btn(
                                text
                                to="/sklep/meskie"
                                active-class="active-class"
                                nuxt
                                color="white"
                            )
                                .font-weight-bold Sklep

                        v-col(
                            :cols="tablet ? 6 : laptop ? 4 : 4"
                        )
                            v-btn(
                                text
                                to="/kontakt"
                                active-class="active-class"
                                nuxt
                                color="white"
                            )
                                .font-weight-bold Kontakt

                        //- mobile social media
                        v-col(
                            cols="12"
                            v-if="phone"
                        )
                            .media-container.d-flex.justify-space-between.px-4.py-1

                                v-btn.pa-2(
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    text
                                    rounded
                                )
                                    img(
                                        src="/images/icons/facebook.png"
                                    )

                                v-btn.pa-2(
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    text
                                    rounded
                                )
                                    img(
                                        src="/images/icons/instagram.png"
                                    )

                                v-btn.pa-2(
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    text
                                    rounded
                                )
                                    img(
                                        src="/images/icons/youtube.png"
                                    )


                                v-btn.pa-2(
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    text
                                    rounded
                                )
                                    img(
                                        src="/images/icons/twitter.png"
                                    )



        //- blobs
        img.blob-1(
            src="/images/blob-1.png"
        )

        img.blob-2(
            src="/images/blob-2.png"
        )


</template>
<script>
export default {
    name: "footer-section"
};
</script>

<style lang="sass">
.footer-section
    position: relative
    padding: 20px 0
    @media(max-width: 599.98px)
        padding: 0

    .logo-btn
        &:hover
            &::before
                opacity: 0

    .logo
        font-size: 33px
        line-height: 30px

    .sub-text
        font-size: 16px
        margin-left: 1px

    .active-class
        color: #FCB900 !important

    .media-container
        margin-left: -5px
        margin-right: 5px
        .v-btn
            min-width: initial !important
            padding: 20px 7px !important
            img
                height: 23px
                width: 23px
                filter: brightness(0) invert(1)

    .blob-1
        position: absolute
        transform: rotate(120deg)
        left: -10px
        top: -70px
        height: 120px

        @media(max-width: 1450px)
            height: 80px
            top: -40px
            left: -10px

        @media(max-width: 959.98px)
            height: 80px
            top: -60px
            left: -15px

        @media(max-width: 599.98px)
            height: 70px
            left: initial
            right: 0

    .blob-2
        position: absolute
        transform: rotate(230deg)
        right: 10px
        bottom: 10px
        height: 80px

        @media(max-width: 1450px)
            height: 70px
            right: -10px
            bottom: 10px

        @media(max-width: 1380px)
            height: 50px
            right: -10px
            bottom: 5px
</style>
