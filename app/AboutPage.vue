<template>
    <h1>About</h1>
    <div class="about-container">
        <div class="total-group">
            <div class="left-group">
                <ProfilePictureBox />
                <ProfileContent />
            </div>
            <div class="right-group">
                <div class="skills-container">
                    <p>Skills</p>
                </div>
                <div class="games-container">
                    <p>Games</p>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import {useSeoMeta} from '@vueuse/head'
import ProfileContent from "../components/ProfileContent.vue";
import ProfilePictureBox from "../components/ProfilePictureBox.vue";

export default {
    name: "AboutPage",
    components: {
        ProfilePictureBox, ProfileContent
    },
    setup() {
        useSeoMeta({
            title: 'YuLuo'
        })
    }
};
</script>

<style>
h1 {
    font-size: clamp(18px, 4vw, 32px);
}

.about-container {
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

@media screen and (max-width: 768px) {
    .total-group {
        width: 90%;
        display: flex;
        flex-direction: column;
    }
}

.left-group {
    width: 20%;
    min-width: 160px;
    background-color: white;
    border: 1px solid rgba(209, 217, 224, 0.7);
    border-radius: 5px;
    box-shadow: rgba(37, 41, 46, 0.12) 0 3px 6px 0;
    margin: 10px 5px 10px 10px;
    padding: 10px;
    min-height: 500px;
}

@media screen and (max-width: 768px) {
    .left-group {
        width: 100%;
        min-width: 200px;
        margin: 0 0 10px 0;
        padding: 10px 0 0 0;
    }
}

.right-group {
    width: 80%;
    min-width: 400px;
    background-color: white;
    border: 1px solid rgba(209, 217, 224, 0.7);
    border-radius: 5px;
    box-shadow: rgba(37, 41, 46, 0.12) 0 3px 6px 0;
    margin: 10px 10px 10px 5px;
    padding: 10px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 768px) {
    .right-group {
        width: 100%;
        min-width: 200px;
        margin: 0 0 10px 0;
        padding: 0;
        min-height: 100%;
    }
}

.skills-container {
    display: flex;
    justify-content: left;
    height: 50%;
    padding: 10px;
}

.games-container {
    display: flex;
    justify-content: left;
    height: 50%;
    padding: 10px;
}

.skills-container p, .games-container p {
    font-size: 30px;
    margin: 0;
}

</style>
