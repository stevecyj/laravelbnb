<template>
    <div>
        Rows is: {{ rows }}
        <div v-if="loading">
            Data is loading ...
        </div>
        <div v-else>
            <div class="row mb-4" v-for="row in rows" :key="'row' + row">
                <div
                    class="col d-flex align-items-stretch"
                    v-for="(bookable, column) in bookablesInRow(row)"
                    :key="'row' + row + column"
                >
                    <bookable-list-item v-bind="bookable"></bookable-list-item>
                </div>
                <!-- {{ placeholdersInRow(row) }} -->
                <div
                    class="col"
                    v-for="p in placeholdersInRow(row)"
                    :key="'placeholder' + row + p"
                ></div>
            </div>
        </div>
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
            bookables: null,
            loading: false,
            columns: 3
        };
    },
    computed: {
        rows() {
            return this.bookables === null
                ? 0
                : Math.ceil(this.bookables.length / this.columns);
        }
    },
    methods: {
        bookablesInRow(row) {
            return this.bookables.slice(
                (row - 1) * this.columns,
                row * this.columns
            );
        },
        placeholdersInRow(row) {
            return this.columns - this.bookablesInRow(row).length;
        }
    },

    created() {
        this.loading = true;

        // const p = new Promise((resolve, reject) => {
        //     console.log(resolve);
        //     console.log(reject);
        //     setTimeout(() => {
        //         resolve("Hello");
        //     }, 3000);
        // })
        //     .then(result => console.log(`Success ${result}`))
        //     .catch(result => console.log(`Erroe ${result}`));

        // console.log(p);

        const request = axios
            .get("/laravelbnb/public/api/bookables")
            .then(response => {
                console.log(response.data);
                this.bookables = response.data;
                this.bookables.push({ title: "x", description: "y" });
                this.loading = false;
            });
        // console.log(request);

        //模擬請求
        // setTimeout(() => {
        //     this.bookables = [
        //         {
        //             id: 1,
        //             title: "便宜的Villa!!!",
        //             content: "一間便宜的Villa!!!"
        //         },
        //         {
        //             id: 2,
        //             title: "便宜的Villa 2!!!",
        //             content: "一間便宜的Villa 2!!!"
        //         },
        //         {
        //             id: 2,
        //             title: "便宜的Villa 2!!!",
        //             content: "一間便宜的Villa 2!!!"
        //         },
        //         {
        //             id: 2,
        //             title: "便宜的Villa 2!!!",
        //             content: "一間便宜的Villa 2!!!"
        //         },
        //         {
        //             id: 2,
        //             title: "便宜的Villa 2!!!",
        //             content: "一間便宜的Villa 2!!!"
        //         },
        //         {
        //             id: 2,
        //             title: "便宜的Villa 2!!!",
        //             content: "一間便宜的Villa 2!!!"
        //         },
        //         {
        //             id: 2,
        //             title: "便宜的Villa 2!!!",
        //             content: "一間便宜的Villa 2!!!"
        //         }
        //     ];
        //     this.loading = false;
        // }, 2000);
    }
};
</script>
