<template lang="pug">
    .hero
        .bg(
            v-if="!tablet"
        )
            img(
                src="/images/bg.png"
            )

        v-container
            v-row.hero-content.test

                //- texts
                v-col.hero-left.d-flex.flex-column(
                    :cols="tablet ? 12 :laptop ? 7 : 6"
                    :order="tablet ? 2 : ''"
                    :class="tablet ? '' : 'justify-center'"
                )
                    .heading-small(
                        :class="laptop ? 'mb-0' : 'mb-2'"
                    ) Cześć, nazywam się
                    .heading-main.primary--text.font-weight-bold(
                        :class="laptop ? 'mb-2' : 'mb-5'"
                    ) Mateusz Socha
                    div(
                        :class="phone ? 'mb-5' : laptop ? 'mb-3' : 'mb-5'"
                    )
                        span.accent--text Stand-uper
                        span.mx-2.primary--text |
                        span.accent--text Komik

                    p.heading-p(
                        :class="laptop ? 'mb-6' : 'mb-8'"
                    ) Na scenie od 2016. W tym czasie przyciągnął do siebie miliony widzów, którzy chętnie oglądają jego poczynania. Komik, którego potrzebujecie i na którego zasługujecie, o zaraźliwym śmiechu i poczuciu humoru, które pozwala setkom ludzi w jednym miejscu przez chwilę poczuć się poza światem.



                    //- social media
                    .media-container.d-flex

                        v-btn(
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
                    v-if="!laptop"
                )

                //- photo
                v-col.hero-right.justify-center.d-flex.flex-column(
                    :cols="tablet ? 12 : laptop? 5 : 5"
                    :order="tablet ? 1 : ''"
                )
                    .hero-portrait.d-flex.justify-center(
                        :class="laptopOnly ? 'pl-8' : ''"
                    )
                        img(
                            src="/images/hero.png"
                        )



</template>

<script>
import Header1 from "@/components/molecules/Header1";

export default {
    name: "hero",

    components: {
        Header1
    }
};
</script>

<style lang="sass">
.hero
    height: calc(100vh - 60px)
    max-height: 800px
    position: relative
    width: 100vw

    @media (max-width: 959.98px)
        max-height: none

    @media( max-width: 599.98px )
        height: auto

    .bg
        position: absolute
        top: 35%
        left: 0
        width: 100%

        img
            width: 100%
            height: 100%
            object-fit: contain

    .hero-content
        height: calc(100vh - 72px - 12px)
        max-height: 788px

        @media (max-width: 959.98px)
            max-height: none

        @media( max-width: 599.98px )
            height: auto

        .hero-left
            @media (max-width: 959.98px)
                // height: 45%

            @media( max-width: 599.98px )
                height: auto

            .heading-small
                font-size: 24px
                color: #444

                @media( max-width: 599.98px )
                    font-size: 20px

            .heading-main
                font-size: 70px
                line-height: 70px

                @media( max-width: 1263.98px )
                    font-size: 55px

                @media( max-width: 599.98px )
                    font-size: 38px
                    line-height: 45px

            .heading-p
                text-align: justify

            .media-container
                .v-btn
                    min-width: initial !important
                    padding: 25px 10px !important
                    img
                        height: 30px
                        width: 30px

        .hero-right
            @media (max-width: 959.98px)
                height: 55%

            @media( max-width: 599.98px )
                height: auto

            .hero-portrait
                height: 100%
                width: 100%
                // z-index: 10
                max-height: 550px

                img
                    width: 100%
                    height: 100%
                    object-fit: contain
                    object-position: right
                    position: relative
                    // z-index: 10

                    @media (max-width: 959.98px)
                        object-position: center bottom
                        margin-top: 5%
                        // height: 90%

                    @media( max-width: 599.98px )
                        width: 70%
                        height: 100%
                        margin-top: 0
</style>