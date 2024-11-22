<template>
    <div class="app-container">
        <NavigationBar/>
        <router-view />
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
            title: 'ImagineYuLuo'
        })
    }
};

</script>

<style>
.app-container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center
}

</style>
