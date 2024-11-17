<template>
    <h1>雨落 YuLuo</h1>
    <div class="home-container"></div>
    <div class="gradient"></div>
    <div class="content">Hi</div>
</template>

<script>
import {useSeoMeta} from '@vueuse/head'

export default {
    name: "HomePage",
    components: {
    },
    setup() {
        useSeoMeta({
            title: 'ImagineYuLuo'
        })
    }
};
</script>

<style>

h1 {
    font-size: clamp(18px, 4vw, 32px);
}

.home-container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #000000;
    display: flex;
    justify-content: center;
    background: transparent;
}

.gradient {
    background: transparent linear-gradient(to bottom, rgba(255, 255, 255, 0), white);
    width: 100%;
    position: absolute;
    bottom: 40%;
    left: 0;
    height: 20%;
    z-index: -100;
}

.content {
    background: white;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 45%;
    z-index: -100;
}

@media screen and (max-width: 640px) {
    .content {
        background: white;
        width: 100%;
        position: absolute;
        bottom: -50%;
        left: 0;
        height: 90%;
    }
}

</style>
