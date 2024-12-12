<script setup>
import { reactive, defineProps } from 'vue';

defineProps({
    news: {
        type: Array,
        required: true,
    },
});

const refs = reactive({
    content: {},
    arrow: {},
});

function toggleContent(id) {
    const content = refs.content[id];
    const arrow = refs.arrow[id];

    if (arrow) {
        content.classList.toggle("show");
        arrow.classList.toggle("down");
    }
}
</script>

<template>
    <div class="group" v-for="item in news" :key="item.id">
        <div class="news-group" :id="item.id" @click="toggleContent(item.id)">
            <div class="group-picture">

            </div>
            <div class="news-group-total">
                <div class="news-group-header">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.created_date }}</p>
                </div>
                <div class="news-group-bottom">
                <span class="arrow" :ref="el => (refs.arrow[item.id] = el)">
                    <i class="fa fa-chevron-right"></i>
                </span>
                </div>
            </div>
        </div>
        <div class="content" :ref="el => (refs.content[item.id] = el)">
            <p>{{ item.content }}</p>
        </div>
    </div>
</template>

<style scoped>
.group {
    margin-top: 10px;
}

.news-group {
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(209, 217, 224, 0.7);
}

.news-group:hover {
    cursor: pointer;
}

.group-picture {
    width: 30%;
    background: url("../public/images/news.jpeg");
    background-size: cover;
    background-position: left center;
    min-width: 170px;
    min-height: 90px;
}

.news-group-total {
    width: 70%;
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.9);

    padding: 10px;
}

@media screen and (max-width: 768px) {
    .news-group {
        display: flex;
        flex-direction: column;
    }

    .group-picture {
        width: 100%;
        background-position: left center;
    }

    .news-group-total {
        width: 100%;
        padding: 0;
    }
}

.news-group-total h3, .news-group-total p {
    margin: 0;
}

.news-group-header {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 10px;
    padding: 10px;
}

.news-group-bottom {
    display: flex;
    justify-content: center;
    padding: 10px;
}

.arrow {
    display: flex;
    align-items: center;
}

.arrow.down {
    transform: rotate(90deg);
}

.content {
    width: 100%;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.1);
    color: #333;
    border-top: none;
    padding: 0 10px;
    box-sizing: border-box;
    max-height: 0;
    transition: max-height 0.2s ease, padding 0.2s ease;
    display: flex;
    justify-content: space-between;
}

.content.show {
    max-height: max-content;
    padding: 10px;
    border-left: 1px solid rgba(209, 217, 224, 0.7);
    border-right: 1px solid rgba(209, 217, 224, 0.7);
    border-bottom: 1px solid rgba(209, 217, 224, 0.7);
    background-color: rgb(246, 246, 246);
}
</style>