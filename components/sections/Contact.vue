<template lang="pug">
    .contact
        v-container.z-index-5
            .section-padding
                header1(center) Kontakt
                v-row
                    v-col(
                        :cols="phone?12:5"
                    )
                        .contact-img.d-flex.justify-center
                            img(
                                src="/images/contact2.png"
                            )

                    v-spacer

                    v-col.d-flex.justify-center.flex-column(
                        :cols="phone?12:tablet ? 7 : laptop ? 6 : 5"
                        :class="tabletOnly ? 'pl-6' : ''"
                    )
                        h2 Chcesz nawiązać współpracę?
                        h2.pb-4 Zapraszamy do kontaktu!
                        //- h4.pb-2 Manager:
                        h4.mb-2
                            //- i.far.fa-info-square
                            //- i.far.fa-user-alt.mr-2
                            span manager: Jacek Pelisiak
                        a.contact-link.mb-2.black--text(
                            href="mailto:manager@mateuszsocha.com"
                        )
                            h4
                                //- i.far.fa-envelope-open.mr-2
                                span email: manager@mateuszsocha.com
                        a.contact-link.mb-2.black--text(
                            href="tel:+48605645923"
                        )
                            h4
                                //- i.far.fa-phone.mr-2
                                span tel.: 605 645 923

            v-divider
            v-row.grey--text.section-padding
                //- h4(
                //-     class="mb-3"
                //- ) Dane firmy
                v-col(
                    :cols="tablet?12:6"
                )
                    div(
                        class="mb-4"
                    )
                        strong Adres miejsca wykonywania działalności i adres do doręczeń:
                        div Mateusz Socha
                        div ul. Łużycka 5/2,
                        div 68-100 Żagań
                    div(
                        class="mb-4"
                    )
                        strong NIP:
                        div 9241878298
                v-col(
                    :cols="tablet?12:6"
                )
                    div(
                        class="mb-4"
                    )
                        strong Adres poczty elektronicznej:
                        div sklep@mateuszsocha.com
                    div(
                        class="mb-4"
                    )
                        strong Numer telefonu:
                        div +48 605645923

                    a(
                        href="/regulaminy/regulamin.pdf"
                        @click="event=>event.stopPropagation()"
                        target="_blank"
                    ) Zobacz regulamin

        //- blobs
        img.blob-1(
            src="/images/blob-1.png"
        )
        img.blob-2(
            src="/images/blob-2.png"
        )
</template>

<script>
import Header1 from "@/components/molecules/Header1";
export default {
    name: "contact",

    components: {
        Header1
    }
};
</script>

<style lang="sass" scoped>
.contact
    position: relative

    .contact-img
        width: 100%
        height: 100%

        img
            width: 100%
            height: 100%
            object-fit: contain
            @media(max-width: 599.98px)
                width: 80%

    .contact-link
        text-decoration: none

        &:hover
            text-decoration: underline
            text-decoration-color: #FCB900

            span
                color: #FCB900

    .blob-1
        position: absolute
        transform: rotate(60deg)
        right: -120px
        top: 30px
        height: 250px
        @media(max-width: 1450px)
            height: 200px
            right: -70px
        @media(max-width: 959.98px)
            height: 160px
            top: initial
            bottom: -50px
            right: -60px

    .blob-2
        position: absolute
        transform: rotate(0deg)
        left: -20px
        bottom: -20px
        height: 130px

        @media(max-width: 1450px)
            height: 100px

        @media(max-width: 959.98px)
            display: none
</style>