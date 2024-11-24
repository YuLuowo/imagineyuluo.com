<script setup>
</script>

<template>
<div class="profile-content">
    <h3>YuLuo</h3>
    <p>qwqwqwq</p>
    <div class="wrapper">
        <div class="icon github">
            <div class="tooltip">
                Github
            </div>
            <a href="https://github.com/YuLuowo">
                <span><i class="fab fa-github"></i></span>
            </a>
        </div>
        <div class="icon discord">
            <div class="tooltip">
                Discord
            </div>
            <a href="https://discord.gg/yNXzfkWmTr">
                <span><i class="fab fa-discord"></i></span>
            </a>
        </div>
        <div class="icon steam">
            <div class="tooltip">
                Steam
            </div>
            <a href="https://steamcommunity.com/profiles/76561198834412173">
                <span><i class="fab fa-steam"></i></span>
            </a>
        </div>
    </div>
</div>
</template>

<style scoped>
.wrapper {
    display: inline-flex;
    justify-content: center;
    width: 100%;
}

@media screen and (max-width: 768px) {
    .wrapper {
        display: inline-flex;
        justify-content: center;
        width: 100%;
    }
}

.wrapper .icon {
    margin: 0 8px;
    text-align: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    z-index: 2;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@media screen and (max-width: 768px) {
    .wrapper .icon {
        margin: 0 15px;
    }
}

.wrapper .icon span {
    display: block;
    height: 30px;
    width: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: black;
}

.wrapper .icon span i {
    line-height: 30px;
    font-size: 16px;
}

.wrapper .icon .tooltip {
    position: absolute;
    top: 0;
    z-index: 1;
    background: #fff;
    color: #fff;
    padding: 10px 18px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 25px;
    opacity: 0;
    pointer-events: none;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    pointer-events: auto;
}

.icon .tooltip:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    background: #fff;
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%) rotate(45deg);
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover span {
    color: #fff;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
}

.wrapper .github:hover span,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip:before {
    background: #333;
}

.wrapper .discord:hover span,
.wrapper .discord:hover .tooltip,
.wrapper .discord:hover .tooltip:before {
    background: #3B5999;
}

.wrapper .steam:hover span,
.wrapper .steam:hover .tooltip,
.wrapper .steam:hover .tooltip:before {
    background: #1e2c72;
}
</style>