<template lang="pug">
    v-btn-toggle(
        rounded
        mandatory
        dense
        exact
    )
        v-btn(
            to="/sklep"
            exact
            exact-active-class="secondary white--text"
            small
            class="px-5"
        ) Wszystkie
        v-btn(
            to="/sklep/damskie"
            exact
            exact-active-class="secondary white--text"
            small
            class="px-5"
        ) Kobiety
        v-btn(
            to="/sklep/meskie"
            exact
            exact-active-class="secondary white--text"
            small
            class="px-5"
        ) Mężczyźni
</template>