<template lang="pug">
    .films.section-padding
        v-container
            header1(
                center
            ) Filmy z moich występów

            //- laptop mockup
            v-row.justify-center(
                :class="phone ? 'pt-3' : 'pt-12'"
            )

                v-col(
                    :cols="phone ? 12 : tablet ? 10 : laptop ? 9 : desktop ? 7 : 8"
                    :class="phone ? 'mb-0' : tablet ? 'mb-4' : 'mb-7'"
                )
                    .laptop

                        film-big-timg.z-index-5(
                            :video="videos[0]"
                            @click="openDialog"
                            v-if="videos.length"
                        )

                        img.blob-1(
                            src="/images/blob-1.png"
                            :height="phone ? 130 : tablet ? 250 : desktop ? 280 : 320"
                        )


            //- film tiles
            v-row(
                style="position: relative;"
                :class="phone ? 'pb-0' : 'pb-10'"
            )
                img.blob-2(
                    src="/images/blob-2.png"
                    :height="phone ? 70 : tablet ? 110 : desktop ? 150 : 150"

                )

                v-col.z-index-5(
                    cols="4"
                    v-for="(video, index) in $options.filters.chunkItems(videos, 2, 1000)"
                    :key="index"
                    :class="phone ? 'px-1' : ''"
                )
                    film-timg(
                        @click="openDialog"
                        :video="video"
                    )

            //- popup
            v-dialog(
                v-model="dialog"
                @click:outside="stopVideo"
                :width="tablet ? '90%' : '70%'"
                overlay-opacity=".8"
            )
                v-responsive(
                    :aspect-ratio="16/9"
                    width="100%"
                )
                    youtube(
                        :video-id="videoID"
                        ref="youtube"
                        width="100%"
                        height="100%"
                    )


</template>

<script>
import { mapState } from "vuex";

import Header1 from "@/components/molecules/Header1";
import FilmTimg from "@/components/molecules/FilmTimg";
import FilmBigTimg from "@/components/molecules/FilmBigTimg";

export default {
    name: "films",

    components: {
        Header1,
        FilmTimg,
        FilmBigTimg
    },

    data: () => ({
        dialog: false,
        videoID: null
    }),

    computed: {
        player() {
            return this.$refs.youtube.player;
        },
        ...mapState(["videos"])
    },

    methods: {
        stopVideo() {
            this.player.stopVideo();
        },
        playVideo() {
            this.player.playVideo();
        },
        openDialog(val) {
            this.dialog = true;
            this.videoID = val.acf.id;
        }
    }
};
</script>

<style lang="sass" scoped>
.films
    .blob-1
        position: absolute
        right: -45px
        top: -55px
        transform: rotate(210deg)

        @media(max-width: 959.58px)
            top: -25px
            right: -15px

    .blob-2
        position: absolute
        left: -60px
        top: -50px
        transform: rotate(240deg)

        @media(max-width: 959.58px)
            left: -30px
            top: -30px

        @media(max-width: 599.58px)
            transform: rotate(45deg)
            top: -20px

    .laptop
        width: 100%
        position: relative

        .laptop-img
            width: 100%
            height: 100%
            object-fit: contain
</style>
