<template lang="pug">
    .about-home.section-padding.darker-bg(
        :class="phone ? 'pt-5' : ''"
    )
        v-container
            v-row
                v-col(
                    :cols="phone ? 12 : laptop ? 5 : 4"
                    :class="laptopOnly ? 'pr-10' : ''"
                    v-if="!phone"
                )
                    .photo-container.d-flex.justify-center
                        img.photo(
                            src="/images/about-home.png"
                        )

                v-col.d-flex.flex-column.justify-center(
                    :cols="phone ? 12 : tablet ? 7 : 7"
                    :class="phone ? '' : tablet ? 'pl-6' : ''"
                )
                    header1(
                        :class="phone ? 'mb-5' : 'mb-8'"
                    ) O mnie
                    p.about-p(
                        :class="phone ? 'pb-5' : tablet ? 'pb-5' : 'pb-8'"
                    ) Bawienie ludzi było dla mnie czymś bardzo ważnym odkąd pamiętam i nie ma większej satysfakcji w życiu, niż móc to przekuć na profesjonalne zajęcie, które mam przyjemność teraz wykonywać. Te kilka lat, przez które możecie mnie oglądać, to dla mnie duża sprawa, dobrze jest być z Wami.
                    .signature.d-flex(
                        :class="phone?'justify-end':'justify-start'"
                    )
                        img(
                            src="/images/signature.png"
                            :height="phone?40:50"
                        )
            v-row(
                v-if="phone"
                class="mt-6"
            )
                v-col.d-flex.justify-center
                    v-btn.font-weight-bold.px-7.py-4(
                        rounded
                        color="secondary"
                        depressed
                        small
                        to="/o-mnie"
                    ) Czytaj więcej
</template>

<script>
import Header1 from "@/components/molecules/Header1";

export default {
    name: "about-home",

    components: {
        Header1
    }
};
</script>

<style lang="sass" scoped>
.about-home
    .photo-container
        height: 100%
        width: 100%

        .photo
            width: 100%
            height: 100%
            object-fit: contain

            @media( max-width: 599.98px )
                width: 70%
                object-position: center
    .about-p
        text-align: justify
</style>