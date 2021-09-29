<template lang="pug">
    div(
        ref="aspect"
        class="aspect-ratio"
    )
        slot
</template>
​
<script>
export default {
    mounted() {
        this.init();
        this.setWidth();
    },
    destroyed() {
        window.removeEventListener("resize", this.setWidth);
        window.removeEventListener("load", this.setWidth);
    },
    methods: {
        setWidth() {
            const ref = this.$refs.aspect;
            const height = ref.getBoundingClientRect().height;
            const width = (3 / 4) * height;
            ref.style.width = width + "px";
        },
        init() {
            window.addEventListener("resize", this.setWidth);
            window.addEventListener("load", this.setWidth);
        }
    }
};
</script>