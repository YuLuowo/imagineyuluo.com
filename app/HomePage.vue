<template>
<div class="home-container">
    <div class="title-container">
        <h1>YuLuo</h1>
        <h2>Hi !</h2>
    </div>
    <div class="picture-container">
        <div class="image"></div>
    </div>
</div>
</template>

<script>
import {useSeoMeta} from '@vueuse/head'

export default {
    name: "HomePage",
    components: {
    },
    setup() {
        useSeoMeta({
            title: 'YuLuo'
        })
    }
};
</script>

<style>
.home-container {
    display: flex;
    justify-content: space-between;
    height: 80vh;
}

.home-container h1 {
    font-size: 64px;
    margin: 15px;
}

.home-container h2 {
    margin: 5px;
}

@media screen and (max-width: 768px) {
    .home-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
}

.title-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.picture-container {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (max-width: 768px) {
    .title-container {
        width: 100%;
    }

    .picture-container {
        width: 100%;
    }
}

.image {
    background: url("../public/images/ElbeCasual.webp") no-repeat;
    background-size: cover;
    min-height: 650px;
    min-width: 680px;
    z-index: -9999;
}

@media screen and (max-width: 768px) {
    .image {
        min-width: 90%;
        height: 650px;
        background-position: center;
    }
}


</style>
