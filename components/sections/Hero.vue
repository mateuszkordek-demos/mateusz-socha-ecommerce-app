<template lang="pug">
    .hero
        .bg(
            v-if="!tablet"
        )
            img(
                src="/images/bg.png"
            )

        v-container(
            style="height: 100%;"
            class="d-flex align-center"
        )
            v-row.hero-content

                //- texts
                v-col(
                    :cols="laptop ? 12 : desktop ? 7 : 6"
                    class="hero-left d-flex flex-column justify-center"
                    :order="laptop ? 1 : ''"
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
                )

                //- photo
                v-col.hero-right.justify-center.d-flex.flex-column(
                    :cols="laptop ? 12 : desktop? 5 : 5"
                )
                    .hero-portrait.d-flex.justify-center(
                        :class="laptopOnly ? 'pl-8' : ''"
                    )
                        img(
                            src="/images/hero.png"
                            style="width: 100%; z-index: 5; object-fit: contain"
                            :height="phone?'300':tablet?'400':laptop?'500':''"
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

<style lang="sass" scoped>
.hero
    position: relative
    width: 100vw
    height: 100vh
    @media(max-width: 575.98px)
        height: auto
    .hero-content
        padding-bottom: 80px
        @media(max-width: 991.98px)
            padding-bottom: 20px

    .bg
        position: absolute
        top: 35%
        left: 0
        width: 100%
        img
            width: 100%
            height: 100%
            object-fit: contain
        @media(max-width: 991.98px)
            display: none
    .media-container
        .v-btn
            min-width: initial !important
            padding: 25px 10px !important
            img
                height: 30px
                width: 30px
    .heading-small
        font-size: 24px

    .heading-main
        font-size: 70px
        line-height: 70px
        @media(max-width: 575.98px)
            line-height: 50px
            font-size: 50px
</style>