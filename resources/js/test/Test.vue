<template>
    <div>I am test.</div>
</template>

<script>
export default {
    data() {
        return {
            bookables: null,
        };
    },
    created() {
        console.log(this.$route.params.id);
        axios.get("/laravelbnb/public/api/bookables").then((response) => {
            this.bookables = response.data;
            this.loading = false;
            console.log(response);
        });
    },
};
</script>
