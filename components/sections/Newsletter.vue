<template lang="pug">
    .newsletter.section-padding
        v-container(
            :class="phone ? 'pb-6' : tablet ? 'pb-10' : 'pb-5'"
        )
            v-row
                v-col(
                    :cols="tablet?12:6"
                    :class="!tablet ? 'pt-8' : ''"
                )
                    header1.mb-8 Newsletter
                    newsletter-form

                v-spacer(
                    v-if="!tablet"
                )

                v-col.d-flex.align-center(
                    :cols="laptop ? 5 : 4"
                    v-if="!tablet"
                )
                    .newsletter-img
                        img(
                            src="/images/contact.png"

                        )
</template>

<script>
import Header1 from "@/components/molecules/Header1";
import NewsletterForm from "@/components/organisms/NewsletterForm";

export default {
    name: "newsletter",

    components: {
        Header1,
        NewsletterForm
    }
};
</script>

<style lang="sass" scoped>
.newsletter
    .newsletter-img
        width: 100%
        height: 100%

        img
            width: 100%
            height: 100%
            object-fit: contain
</style>