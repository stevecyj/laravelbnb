<template>
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <div v-if="loading">Loading...</div>
                    <div v-else>
                        <h2>{{ bookable.title }}</h2>
                        <hr />
                        <article>{{ bookable.description }}</article>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <availability></availability>
        </div>
    </div>
</template>

<script>
import Availability from "./Availability";
export default {
    components: {
        Availability,
    },
    data() {
        return {
            bookable: null,
            loading: false,
        };
    },
    created() {
        console.log(this.$route.params.id);

        this.loading = true;

        axios
            .get(`/laravelbnb/public/api/bookables/${this.$route.params.id}`)
            .then((response) => {
                this.bookable = response.data;
                this.loading = false;
            });
    },
};
</script>
