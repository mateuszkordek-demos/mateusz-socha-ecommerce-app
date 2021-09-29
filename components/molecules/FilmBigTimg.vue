<template lang="pug">
    .film-big-timg(
        @click="$emit('click', video)"
    )
        .mockup
            img(
                src="/images/laptop2.png"
            )

            .mockup-content.d-flex.justify-center.align-center
                img.thumbnail-img(
                    :src="video.acf.img.sizes.large"
                )
                img.play-btn.z-index-5(
                    src="/images/icons/play.png"
                )
</template>

<script>
export default {
    name: "film-big-timg",

    props: {
        video: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="sass" scoped>
.film-big-timg
    cursor: pointer
    position: relative
    width: 100%
    height: auto

    .mockup
        position: relative

        width: auto
        height: auto

        img
            width: 100%
            height: 100%
            object-fit: contain

        .mockup-content
            position: absolute
            overflow: hidden
            left: 12.8%
            top: 8.7%

            width: 74.5%
            height: 71.9%

            &::after
                position: absolute
                display: block
                content: ''
                width: 100%
                height: 100%
                background-color: black
                opacity: 0
                transition: .3s ease-in-out all

            .thumbnail-img
                width: 100%
                height: 100%
                object-fit: cover
                transition: .3s ease-in-out all
                // background-color: green

            .play-btn
                position: absolute
                height: 20%
                width: auto
                transition: .3s ease-in-out all

            &:hover
                &::after
                    opacity: 0.5

                .thumbnail-img
                    transform: scale(1.05)

                .play-btn
                    transform: scale(1.05)
</style>
