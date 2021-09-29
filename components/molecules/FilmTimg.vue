<template lang="pug">
    .film-timg.d-flex.justify-center.align-center(
        :style="[phone ? {'height': '70px'} : tablet? {'height': '100px'} : laptop ? {'height': '150px'} : {'height': '200px'}]"
        @click="$emit('click', video)"
    )
        img.thumbnail-img(
            :src="video.acf.img.sizes.large"
        )
        img.play-btn.z-index-5(
            src="/images/icons/play.png"
        )
</template>

<script>
export default {
    name: "film-timg",
    props: {
        video: {
            type: Object,
            required: true
        }
    }
};
</script>
<style lang="sass" scoped>
.film-timg
    cursor: pointer
    position: relative
    overflow: hidden
    -webkit-box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.25)
    -moz-box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.25)
    box-shadow: 0px 10px 30px 0px rgba(0,0,0,0.25)

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
