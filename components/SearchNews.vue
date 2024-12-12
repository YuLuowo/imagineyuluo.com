<script setup>
import {defineProps, defineEmits} from 'vue';

defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

function updateSearch(e) {
    emit('update:modelValue', e.target.value);
}
</script>

<template>
    <div class="search-news">
        <i class="fa fa-search"></i>
        <input
            type="text"
            id="search-input"
            placeholder="Search the news..."
            :value="modelValue"
            @input="updateSearch"
        />
    </div>
</template>

<style scoped>
    .search-news {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgba(209, 217, 224, 0.7);
        border-radius: 3px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        padding: 10px 0 10px 0;
    }

    .search-news i {
        font-size: 16px;
        color: #888888;
        margin: 0 10px;
    }

    .search-news input {
        border: none;
        outline: none;
        width: 100%;
        font-size: 14px;
        color: #333333;
        background-color: transparent;
    }

    .search-news input::placeholder {
        color: #bbbbbb;
    }
</style>