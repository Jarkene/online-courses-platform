<template>
<el-container>
    <el-main class="materials__main">
        <el-row>
            <el-col :span="24">
                <ul class="materials__list shadow">
                    <router-link class="lesson__link" tag="li" v-for="lesson in lessons"
                    :to="`/lesson/${lesson.number}`" :key="lesson.number">
                        Занятие {{ lesson.number }}. {{ lesson.title }}
                    </router-link>
                </ul>
            </el-col>
        </el-row>
    </el-main>
</el-container>
</template>

<script>
export default {
    computed: {
        lessons() {
            return this.$store.getters.Lessons;
        }
    }
}
</script>