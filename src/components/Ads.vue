<template>
    <div class="app__ads">
        <h1 class="ads__title header-color">{{ 'main.home.ads' | localize }}</h1>
        <div class="ads-container shadow">
            <div class="app-ads__item" v-for="ad in Ads" :key="ad.text">
                <div class="ad__date">{{ ad.date }}</div>
                <div class="ad__text">{{ ad.text }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ads",
    computed: {
        Ads() {
            return this.$store.getters.Ads;
        }
    }
}
</script>