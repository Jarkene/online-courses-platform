<template>
<div id="app">
    <el-container>
        <Navbar/>
        <el-container>
            <el-header class="header shadow"></el-header>
            <router-view></router-view>
            <ChangeLangBtn />
        </el-container>
    </el-container>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ChangeLangBtn from './components/ChangeLangBtn.vue'
export default {
    name: 'app',
    data() {
        return {
            lesson: false
        }
    },
    components: {
        Navbar,
        ChangeLangBtn
    },
    created() {
        this.$store.dispatch('setLang', localStorage.lang ? localStorage.lang : 'ru');
        this.$store.dispatch('setAds', 'all');
        this.$store.dispatch('setUser');
        this.$store.dispatch('setLessons');
        this.$store.dispatch('setTeacherDialog')
    },
}
</script>
