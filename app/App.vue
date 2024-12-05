<template>
    <div class="app-container">
        <NavigationBar/>
        <router-view/>
    </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import {useSeoMeta} from '@vueuse/head'

export default {
    name: "HomePage",
    components: {
        NavigationBar,
    },
    setup() {
        useSeoMeta({
            title: 'YuLuo'
        })
    }
};

</script>

<style>
.app-container {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    text-align: center
}

</style>
