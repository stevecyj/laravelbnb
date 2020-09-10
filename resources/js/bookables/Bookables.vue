<template>
    <div>
        <bookable-list-item
            :item-title="bookable1.title"
            :item-content="bookable1.content"
            :price="1000"
        ></bookable-list-item>
        <bookable-list-item
            :item-title="bookable2.title"
            :item-content="bookable2.content"
            :price="3000"
        ></bookable-list-item>
        <bookable-list-item
            :item-title="bookable3.title"
            :item-content="bookable3.content"
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
    // beforeCreate() {
    //     console.log("before create");
    // },
    created() {
        console.log("created");
        console.log(this.bookable1);
        console.log(this.bookable2);

        //模擬請求
        setTimeout(() => {
            this.bookable1 = {
                title: "很貴的Villa!!!",
                content: "一間很貴的Villa!!!"
            };
            this.bookable2 = {
                title: "很貴的Villa 2!!!",
                content: "一間很貴的Villa 2!!!"
            };
            this.bookable3 = {
                title: "超貴的Villa 3!!!",
                content: "一間超貴的Villa 3!!!"
            };
        }, 3000);

        setTimeout(() => {
            console.log("1st change");
            this.bookable1.title = "You will see this!";
        }, 5000);

        setTimeout(() => {
            console.log("2nd change");
            this.bookable3.title = "You wont see this!";
        }, 7000);
    },
    // beforeMount() {
    //     console.log("before mount");
    // },
    mounted() {
        console.log("mounted");
    }
    // beforeDestroy() {
    //     console.log("before destroy");
    // },
    // destroyed() {
    //     console.log("destroyed");
    // }
};
</script>
