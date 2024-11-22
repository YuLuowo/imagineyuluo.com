<template>
    <h1>雨落 YuLuo</h1>
    <div class="home-container">
        <div class="total-group">
            <div class="left-group">
                <ProfilePictureBox />
            </div>
            <div class="right-group">

            </div>
        </div>
    </div>
</template>

<script>
import ProfilePictureBox from "../components/ProfilePictureBox.vue";
import {useSeoMeta} from '@vueuse/head'

export default {
    name: "HomePage",
    components: {
        ProfilePictureBox,
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
    width: 100%;
    text-align: center;
    color: #000000;
    display: flex;
    justify-content: center;
}

.total-group {
    width: 70%;
    display: flex;
    justify-content: space-between;
    height: 200px;
}

.left-group {
    width: 20%;
    background-color: white;
    border: 1px solid rgba(209, 217, 224, 0.7);
    border-radius: 5px;
    box-shadow: rgba(37, 41, 46, 0.12) 0px 3px 6px 0px;
    margin: 10px 5px 10px 10px;
}

.right-group {
    width: 80%;
    background-color: white;
    border: 1px solid rgba(209, 217, 224, 0.7);
    border-radius: 5px;
    box-shadow: rgba(37, 41, 46, 0.12) 0px 3px 6px 0px;
    margin: 10px 10px 10px 5px;
}

</style>
