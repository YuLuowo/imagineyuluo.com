<template>
    <h1>News</h1>
    <div class="news-container">
        <div class="group-box">
            <SearchNews/>
            <NewsGroup />
        </div>
    </div>
</template>

<script>
import {useSeoMeta} from '@vueuse/head'
import NewsGroup from "../components/NewsGroup.vue";
import SearchNews from "../components/SearchNews.vue";

export default {
    name: "NewsPage",
    components: {
        NewsGroup,
        SearchNews,
    },
    setup() {
        useSeoMeta({
            title: 'YuLuo'
        })
    }
};
</script>

<style>
.news-container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #000000;
    display: flex;
    justify-content: center;
}

.group-box {
    width: 40%;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(209, 217, 224, 0.7);
    border-radius: 5px;
    box-shadow: rgba(37, 41, 46, 0.12) 0px 3px 6px 0px;
    padding: 20px;
    margin: 30px;
}

@media screen and (max-width: 768px) {
    .group-box {
        width: 100%;
        padding: 20px;
        margin: 20px;
    }
}
</style>
