<template lang="pug">
    .about
        v-container
            .section-padding
                header1(center) O mnie
                v-row
                    v-col(
                        :cols="laptop ? 12 : 5"
                        :class="laptop ? 'mb-5' : ''"
                    )
                        .about-collage.d-flex.justify-center
                            img(
                                src="/images/about-collage.png"
                                :width="phone?'100%':laptop?'500px':'100%'"
                            )
                    v-spacer
                    v-col(
                        :cols="laptop ? 12 : 6"
                    )
                        //- h2.mb-4 Nice Headline about you
                        p.text-justify Na scenę wypędzili mnie moi koledzy z pracy w banku. Do dzisiaj nie wiem czy mnie wspierali czy mieli dosyć. To był najlepszy ruch jaki w życiu zrobiłem, dzięki niemu, mogę dzisiaj docierać do setek tysięcy z Was i Was bawić. Przez długi czas sam sobie byłem managerem i stworzyłem kilka projektów komediowych, z których najbardziej znanym dla Was może być Nowe Rozdanie. Mało rzeczy w życiu daje taką satysfakcję, jak poczucie, że kiedy opowiadam ze sceny swoje osobiste historie, to wielu z Was się z nimi identyfikuje.
                        p.text-justify Ze sceny mówię to, co mnie bawi i co mi daje satysfakcję, opowiadam o rzeczach, które sam doświadczyłem. Nie jest moim celem Was umoralniać czy mówić jak macie żyć, chcę natomiast, żebyście się zajebiście bawili i żebyśmy wszyscy, przez chwilę mogli się po prostu pośmiać.
                        p.text-justify Współpracuję z kilkoma komikami i niejednokrotnie wspólnie tworzymu nową markę. Obserwujcie tę stronę, aby wiedzieć co nowego się wykluwa i dokąd to zmierza.
                        //- p.text-justify Do zobaczenia na występie!

            //- .section-padding(
            //-     style="position: relative;"
            //- )
            //-     header1(center) W liczbach
            //-     v-row.z-index-5(
            //-         :class="phone ? 'px-1 py-4' : ''"
            //-     )
            //-         v-col(
            //-             v-for="(tile, index) in tiles"
            //-             :key="index"
            //-             :class="phone ? 'pa-1' : ''"
            //-         )
            //-             tile(
            //-                 :tile="tile"
            //-             )
            //-     img.blob-1(
            //-         src="/images/blob-2.png"
            //-     )

            .section-padding
                header1(center) Masochista
                v-row
                    v-col(
                        :cols="phone ? 12 : laptop ? 7 : 6"
                        :class="phone ? 'pb-0' : tabletOnly ? 'pl-6' : ''"
                    )
                        //- h2.mb-4 Nice Headline about you
                        p.text-justify Jest to mój aktualny program, z którym jeżdżę po Polsce i Europie od października 2019. Z początku trwał on 55 minut, lecz z czasem wydłużył się do 70 minut i w takiej formie był grany do marca 2020. Podczas kwarantanny napisałem sporo nowych żartów z których ok. 30 minut wdrożyłem do Masochisty i pozbyłem się starszych, mniej aktualnych żartów, tak, żeby wszystko trwało nieco ponad 80 minut. Uważam, że wzorem zachodnich gwiazd świata komediowego, program powinien trwać optymalnie 60-90 minut. Dłuższe występy są męczące zarówno dla was jak i dla mnie, przez co całe show traci na jakości.
                        p.text-justify Masochista jest zupełnie inny niż moje poprzednie programy. Oczywiście w dalszym ciągu żartuję z mojej rodziny i dzieciństwa ale również z mojej partnerki, z mojego podejścia do związku, homofobii, naszej seksualności i wielu innych rzeczy. Zapraszam :)



                    v-spacer

                    v-col(
                        :cols="phone ? 12 : 5"
                        :class="phone ? 'pb-5' : ''"
                    )
                        .about-single-photo(
                            :class="phone ? 'd-flex justify-center' : ''"
                        )
                            img(
                                src="/images/about.png"
                            )




</template>

<script>
import Header1 from "@/components/molecules/Header1";
import Tile from "@/components/molecules/Tile";

export default {
    name: "about",

    components: {
        Header1,
        Tile
    },

    data: () => ({
        tiles: [
            {
                number: "60",
                description: "Występów na żywo"
            },
            {
                number: "30 000",
                description: "Sprzedanych biletów"
            },
            {
                number: "12 mln",
                description: "Odsłon na YouTube"
            }
        ]
    })
};
</script>

<style lang="sass" scoped>
.about
    .about-collage
        width: 100%
        height: 100%

        img
            // width: 100%
            // height: 100%
            object-fit: contain

    .about-single-photo
        width: 100%
        height: 100%

        img
            width: 100%
            height: 100%
            object-fit: contain
            @media(max-width: 599.98px)
                width: 80%

    .blob-1
        position: absolute
        transform: rotate(250deg)
        right: -100px
        top: -40px
        height: 150px

        @media(max-width: 1250px)
            bottom: 20px
</style>