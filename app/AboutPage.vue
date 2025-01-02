<template>
    <h1>About</h1>
    <div class="about-container">
        <div class="total-group">
            <div class="left-group">
                <ProfilePictureBox />
                <ProfileContent />
            </div>
            <div class="right-group">
                <p>Skills</p>
                <div class="skills-group">
                    <div v-for="(skill, index) in skills" :key="index" class="skills-box">
                        <img :src="skill.image" :alt="skill.name" class="skill-image" />
                        <span class="skill-text">{{ skill.name }}</span>
                    </div>
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
    },
    data() {
        return {
            skills: [
                {
                    name: "CSharp",
                    image: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/csharp/csharp.png"
                },
                {
                    name: "Css",
                    image: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png"
                },
                {
                    name: "Html",
                    image: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
                },
                {
                    name: "Java",
                    image: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png"
                },
                {
                    name: "JavaScript",
                    image: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
                },
                {
                    name: "Php",
                    image: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/php/php.png"
                },
                {
                    name: "Python",
                    image: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"
                }
            ]
        };
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
    text-align: left;
}

@media screen and (max-width: 768px) {
    .right-group {
        width: 100%;
        min-width: 200px;
        margin: 0 0 10px 0;
        padding: 0;
        min-height: auto;
    }

    .right-group p {
        margin: 10px;
    }
}

.right-group p {
    font-size: 30px;
    margin: 10px;
}

.skills-group {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin: 10px;
}

.skills-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 10px;
    border: 1px solid rgba(209, 217, 224, 0.7);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.skills-box:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.skills-box img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 3px;
    background-color: #f8f9fa;
}

.skills-box .skill-text {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

@media screen and (max-width: 768px) {
    .skills-box img {
        width: 50px;
        height: 50px;
    }

    .skills-box .skill-text {
        font-size: 14px;
    }
}




</style>
