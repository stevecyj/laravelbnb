<template>
    <div>
        <bookable-list-item
            v-if="bookable1"
            :item-title="bookable1.title"
            :item-content="bookable1.content"
            :price="1000"
        ></bookable-list-item>
        <bookable-list-item
            v-if="bookable2"
            :item-title="bookable2.title"
            :item-content="bookable2.content"
            :price="3000"
        ></bookable-list-item>
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem";

export default {
    components: {
        BookableListItem
    },
    data() {
        return {
            bookable1: null,
            bookable2: null
        };
    },

    created() {
        //模擬請求
        setTimeout(() => {
            this.bookable1 = {
                title: "便宜的Villa!!!",
                content: "一間便宜的Villa!!!"
            };
            this.bookable2 = {
                title: "便宜的Villa 2!!!",
                content: "一間便宜的Villa 2!!!"
            };
        }, 2000);
    }
};
</script>
