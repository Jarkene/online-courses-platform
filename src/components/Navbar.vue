<template>
<div class="navbar">
    <NavbarFull v-if="isMenuOpened" />
    <NavbarMin v-else />
    <button type="button" class="close-menu" @click="toggleMenu" v-if="isMenuOpened">
        <img src="~@/assets/img/menu/close.svg" alt="">
    </button>
    <button type="button" class="open-menu" @click="toggleMenu" v-else>
        <img src="~@/assets/img/menu/open.svg" alt="">
    </button>
</div>
</template>

<script>
import NavbarFull from './NavbarFull.vue'
import NavbarMin from './NavbarMin.vue'
export default {
    name: 'Navbar',
    data() {
        return {
            isMenuOpened: true,
            user: this.$store.getters.user
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpened = this.isMenuOpened ? false : true;
        },
    },
    components: {
        NavbarFull,
        NavbarMin
    }
}
</script>

<style>
.navbar {
    display: flex;
    align-items: stretch;
}
.close-menu {
    position: fixed;
    border: none;
    outline: none;
    bottom: 1px;
    left: 205px;
    padding: 10px;
    background: white;
}
.open-menu {
    position: fixed;
    border: none;
    outline: none;
    bottom: 1px;
    width: 65px;
    padding: 10px;
    background: white;
}
.close-menu:hover, .open-menu:hover {
    cursor: pointer;
}
.el-aside {
    background-color: white;
    min-height: 100vh;
}
.logo-container {
    text-align: center;
    padding: 15px 0;
}
.navbar__user {
    padding: 10px 23px;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.335);
}
.navbar__user-image {
    width: 60px;
    margin-bottom: 5px;
}
.navbar-min__user-image {
    width: 50px;
    display: block;
    margin: auto;
}
.navbar__user-name {
    margin-right: 5px;
}
.navbar__links {
    margin-top: 5px;
    font-size: 12px;
    text-align: left;
    padding-left: 10px;
}
.el-menu {
    border: none;
}
li.el-menu-item {
    padding: 0;
    margin: 0;
    height: 45px;
    line-height: 45px;
}
li.el-menu-item * {
    position: relative;
    bottom: 2px;
}
.navbar-min .el-menu-item {
    height: 45px;
    line-height: 45px;
}
.navbar-min .el-menu-item * {
    position: relative;
    bottom: 2px;
}
.el-menu-item img {
    margin-right: 5px;
}
.navbar__image, .navbar-min__image {
    width: 18px;
}
.navbar-min__image {
    margin-left: 2px;
}
.contact__link {
    margin-left: 5px;
    color: rgba(51, 51, 51, 0.678);
    text-decoration: underline;
}
.fa-skype {
    color: #56D0FE;
}
.fa-github {
    color: #4075C0;
}
.fa-envelope-open {
    color: #EFB61E;
}
</style>