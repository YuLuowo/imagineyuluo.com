<script setup>
</script>

<template>
    <div class="nav-wrapper">
        <div class="nav-list">
            <div class="nav-item-wrapper">
                <router-link class="nav-text" to="/" active-class="active">HOME</router-link>
            </div>
            <div class="nav-item-wrapper">
                <router-link class="nav-text" to="/news" active-class="active">NEWS</router-link>
            </div>
            <div class="nav-item-wrapper">
                <router-link class="nav-text" to="/about" active-class="active">ABOUT</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-wrapper {
    display: flex;
    justify-content: right;
    padding: 20px;
}

.nav-list {
    display: flex;
    justify-content: space-between;
    width: 25%;
    background: rgba(235, 246, 249, 0.3);
    padding: 16px 40px;
    border-radius: 5px;
}

@media screen and (max-width: 768px) {
    .nav-list {
        width: 100%;
        flex-direction: column;
        padding: 12px;
    }
}

.nav-text {
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    color: black;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;
}

.nav-text::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 45%;
    width: 5px;
    height: 5px;
    border: solid rgb(75, 113, 255);
    border-width: 0 2px 2px 0;
    transform: rotate(-45deg) translateY(-50%);
    opacity: 0;
}

.nav-text:hover::before {
    opacity: 1;
}

.active::before {
    opacity: 1;
}

.nav-text:hover, .active {
    color: rgb(75, 113, 255);
}
</style>