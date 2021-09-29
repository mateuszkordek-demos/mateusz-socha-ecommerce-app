<template lang="pug">
    .size-table(
        style="position: relative"
    )
        v-data-table(
            :headers="headers"
            :items="sizes"
            disable-sort
            hide-default-footer
            style="width: 600px;"
        )
            //- template(
            //-     v-slot:item.name="{item}"
            //- )
            //-     span(
            //-         style=""
            //-     ) {{ item.name}}

        v-btn(
            text
            style="position: absolute; top: 5px; right: 0px"
            @click="$emit('closeSizeTable')"
        )
            v-icon close

</template>

<script>
export default {
    name: "size-table",

    data: () => ({
        headers: [
            {
                text: "",
                value: "name"
            },
            {
                text: "Szerokość w kl. piersiowej",
                value: "width"
            },
            {
                text: "Długość koszulki",
                value: "length"
            },
            {
                text: "Długość rękawa",
                value: "sleeve"
            }
        ],
        sizes: [
            {
                name: "S",
                width: "49cm",
                length: "69cm",
                sleeve: "20.5cm"
            },
            {
                name: "M",
                width: "52cm",
                length: "72cm",
                sleeve: "21.5cm"
            },
            {
                name: "L",
                width: "55cm",
                length: "74cm",
                sleeve: "22.5cm"
            },
            {
                name: "XL",
                width: "58cm",
                length: "76cm",
                sleeve: "22.5cm"
            },
            {
                name: "XXL",
                width: "61cm",
                length: "78cm",
                sleeve: "23.5cm"
            },
            {
                name: "XXXL",
                width: "64cm",
                length: "80cm",
                sleeve: "24.5cm"
            }
        ]
    })
};
</script>

<style lang="sass">
.size-table
    .v-data-table
        cursor: default

        th
            // background-color: #EBEBEB !important
            // color: white !important
</style>