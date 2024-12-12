<template>
    <h1>News</h1>
    <div class="news-container">
        <div class="group-box">
            <SearchNews v-model="searchKeyword" />
            <div v-if="loading" class="loading-spinner"></div>
            <NewsGroup :news="filteredNews" />
            <div v-if="!loading && filteredNews.length === 0">
                <div class="not-found-container">
                    <p class="not-found-text">Not Found</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useSeoMeta } from '@vueuse/head';
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
        });

        const news = ref([]);
        const searchKeyword = ref('');
        const loading = ref(false);

        async function fetchNews() {
            loading.value = true;
            try {
                const response = await fetch(
                    "https://raw.githubusercontent.com/YuLuowo/imagineyuluo.com/refs/heads/main/data/news.json"
                );
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const rawData = await response.json();

                news.value = rawData.map(item => ({
                    ...item,
                    created_date: item.created_date.split("T")[0]
                }));
            } catch (error) {
                console.error("Fetch Error:", error);
            } finally {
                loading.value = false;
            }
        }

        const filteredNews = computed(() => {
            if (!searchKeyword.value) return news.value;
            return news.value.filter(item =>
                item.title.toLowerCase().includes(searchKeyword.value.toLowerCase())
            );
        });

        onMounted(() => {
            fetchNews();
        });

        return {
            news,
            searchKeyword,
            filteredNews,
            loading,
        };
    },
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

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #000000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 20px auto;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.not-found-container {
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(209, 217, 224, 0.7);
    margin-top: 10px;
}

.not-found-text {
    color: red;
    margin: 10px;
}

@media screen and (max-width: 768px) {
    .group-box {
        width: 100%;
        padding: 20px;
        margin: 20px;
    }
}
</style>
