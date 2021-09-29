import Vue from "vue";

let Filters = {
    filters: {
        chunkItems: function (arrayOfItems, firstItemToShow, numberOfItemsToShow) {
            return arrayOfItems.slice(
                firstItemToShow - 1,
                numberOfItemsToShow + firstItemToShow - 1
            );
        },
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    }
};

Vue.mixin(Filters);
