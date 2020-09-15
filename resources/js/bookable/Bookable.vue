<template>
    <div>xxx</div>
</template>

<script>
export default {
    data() {
        return {
            bookable: null
        };
    },
    created() {
        console.log(this.$route.params.id);

        axios
            .get(`/laravelbnb/public/api/bookables/${this.$route.params.id}`)
            .then(response => {
                this.bookable = response.data;
                console.log(response.data);
            });
    }
};
</script>
