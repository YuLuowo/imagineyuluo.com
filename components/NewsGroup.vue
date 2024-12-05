<script setup>
import { reactive } from 'vue';

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
    } else {
        console.error("元素未正確綁定");
    }
}
</script>

<template>
    <div class="news-group" id="1" @click="toggleContent(1)">
        <div class="news-group-header">
            <h3>Hi</h3>
            <p>2024-12-05</p>
        </div>
        <div class="news-group-bottom">
            <span class="arrow" :ref="el => (refs.arrow[1] = el)">
                <i class="fa fa-chevron-right"></i>
            </span>
        </div>
    </div>
    <div class="content" :ref="el => (refs.content[1] = el)">
        hello
    </div>
</template>

<style scoped>
    .news-group {
        display: flex;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(209, 217, 224, 0.7);
        padding: 10px;
    }

    .news-group h3, .news-group p {
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