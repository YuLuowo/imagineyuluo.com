<script setup>

</script>

<template>
<div class="search-news">
    <input type="text" id="search-input" placeholder="" />
    <button><i class="fas fa-search"></i> Search</button>
</div>
</template>

<style scoped>
    .search-news {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        gap: 5px;
    }

    .search-news input {
        width: 70%;
        font-size: 16px;
        padding: 5px;
    }

    .search-news button {
        width: 30%;
        font-size: 16px;
        background: black;
        color: white;
        border: none;
    }

    .search-news button:hover {
        cursor: pointer;
        background: rgba(0, 0, 0, 0.8);
    }

    @media screen and (max-width: 768px) {
        .search-news {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 10px;
            gap: 5px;
        }

        .search-news input {
            width: 90%;
            font-size: 20px;
        }

        .search-news button {
            width: 30%;
            font-size: 16px;
            background: black;
            color: white;
            border: none;
            padding: 5px;
        }
    }


</style>