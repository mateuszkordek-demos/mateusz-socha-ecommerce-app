<template lang="pug">
    .header1.d-flex.flex-column(
        :class="left ? 'align-start' : center ? 'align-center' : right ? 'align-end' : ''"
    )
        h1.font-weight-bold
            slot

</template>
<script>
export default {
    name: "header1",
    props: {
        center: {
            type: Boolean
        },
        left: {
            type: Boolean
        },
        right: {
            type: Boolean
        }
    }
};
</script>

<style lang="sass" scoped>
.header1
    width: 100%
    margin-bottom: 60px

    @media( max-width: 1903.98px )
        margin-bottom: 50px

    @media( max-width: 959.98px )
        // margin-bottom: 35px
    @media( max-width: 599.98px )
        margin-bottom: 40px

    &::after
        display: block
        content: ''
        width: 40px
        height: 2px
        background-color: #FCB900

        @media( max-width: 959.98px )
            width: 40px
</style>