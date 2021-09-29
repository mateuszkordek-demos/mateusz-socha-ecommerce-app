<template lang="pug">
    .thank-you.section-padding
        v-container(
            style="height: 100%;"
        )
            v-row(
                style="height: 100%;"
            )
                v-col.d-flex.align-center(
                    :cols="tablet?12:6"
                    :style="[tablet?{}:{'height': '100%'}]"
                    :order="tablet?1:''"
                    :class="tablet?'justify-center':''"
                )
                    div(
                        :class="tablet?'d-flex flex-column align-center':''"
                    )
                        h1.header-main.primary--text(
                            :class="tablet?'text-center':''"
                        ) Dziękujemy
                        h2.subheader.primary--text(
                            :class="tablet?'text-center':''"
                        ) za zakupy w naszym sklepie!
                        //- div.mt-6
                        //-     div(
                        //-         :class="tablet?'text-center':''"
                        //-     ) Mamy nadzieję, że będą Państwo zadowoleni.
                        p.mt-5(
                            :class="tablet?'text-center':''"
                        ) Przyjęliśmy Twoje zamówienie. Wysłaliśmy także do Ciebie maila z potwierdzeniem zakupu. Jeśli nie otrzymałeś/-aś wiadomości, sprawdź folder SPAM.
                        v-btn.font-weight-bold.px-7.mt-8(
                            rounded
                            color="secondary"
                            depressed
                            small
                            to="/"
                        ) Strona główna

                v-spacer

                v-col.d-flex.align-center.justify-center(
                    :cols="tablet?12:5"
                    :style="[phone?{'height': '250px'}:tablet?{'height': '350px'}:{'height': '100%'}]"
                )
                    .img
                        img(
                            src="/images/thank-you.png"
                        )

</template>

<script>
export default {
    name: "thank-you"
};
</script>

<style lang="sass" scoped>
.thank-you
    height: calc( 100vh - 311px )
    @media(max-width: 959.58px)
        height: calc(100vh - 371px)
    @media(max-width: 768.58px)
        height: auto

    .header-main
        font-size: 40px
        line-height: 50px
    .subheader
        font-size: 30px
        line-height: 37px

    .img
        width: 70%
        height: 70%
        @media(max-width: 959.58px)
            width: 100%
            height: 100%
        img
            width: 100%
            height: 100%
            object-fit: contain
</style>