<template>
    <el-aside width="65px" class="navbar-min shadow">
        <div class="app__menu header-color">
                <div class="logo-container">
                    <img src="~@/assets/img/logo.png" alt="" width="50px">
                </div>
                <img src="../assets/img/user_photo.jpg" alt="" class="navbar-min__user-image">
                <el-menu default-active="1">
                    <router-link to="/" tag="span">
                        <el-menu-item index="1">
                            <img src="~@/assets/img/menu/home.svg" class="navbar-min__image" alt="">
                        </el-menu-item>
                    </router-link>
                    <router-link to="/user" tag="span">
                        <el-menu-item index="2">
                            <img src="~@/assets/img/menu/person.svg" class="navbar-min__image" alt="">
                        </el-menu-item>
                    </router-link>
                    <router-link to="/materials" tag="span">
                        <el-menu-item index="3">
                            <img src="~@/assets/img/menu/book.svg" class="navbar-min__image" alt="">
                        </el-menu-item>
                    </router-link>
                    <router-link to="/general_chat" tag="span">
                        <el-menu-item index="4">
                            <img src="~@/assets/img/menu/general_chat.svg" class="navbar-min__image" alt="">
                        </el-menu-item>
                    </router-link>
                    <router-link to="/teacher_chat" tag="span">
                        <el-menu-item index="5">
                            <img src="~@/assets/img/menu/teacher_chat.svg" class="navbar-min__image" alt="">
                        </el-menu-item>
                    </router-link>
                    <router-link to="/rating" tag="span">
                        <el-menu-item index="6">
                            <img src="~@/assets/img/menu/rating.svg" class="navbar-min__image" alt="">
                        </el-menu-item>
                    </router-link>
                    <router-link to="/webinars" tag="span">
                        <el-menu-item index="7">
                            <img src="~@/assets/img/menu/webinars.svg" class="navbar-min__image" alt="">
                        </el-menu-item>
                    </router-link>
                    <router-link to="/exit" tag="span">
                        <el-menu-item index="8">
                            <img src="~@/assets/img/menu/exit.svg" class="navbar-min__image" alt="">
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </div>
    </el-aside>
</template>

<script>
export default {
    name: 'NavbarMin'
}
</script>
