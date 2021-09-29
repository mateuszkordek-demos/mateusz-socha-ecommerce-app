<template lang="pug">
    .tile
        .tile-content.secondary.white--text.d-flex.flex-column.align-center.justify-center(
          :class="phone ? 'px-3 py-2' : 'pa-5'"
        )
            h2(
              :class="phone ? 'mb-0' : 'mb-1'"
            ) {{tile.number}}
            div.font-weight-bold.text-center {{tile.description}}
</template>

<script>
export default {
    name: "tile",

    props: {
        tile: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="sass" scoped>
.tile
  .tile-content
    border-radius: 10px
</style>