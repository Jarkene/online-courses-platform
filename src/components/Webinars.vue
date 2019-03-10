<template>
<el-container>
    <el-main class="webinars__main">
        <el-row>
            <el-col :span="12">
                <div class="webinar__info shadow" v-for="webinar in webinars" :key="webinar.title">
                    <el-col :span="24">
                        <h4 class="webinar__title">{{ webinar.title }}</h4>
                        <span class="webinar__date">{{ webinar.date }}</span>
                        <span class="webinar__time">{{ webinar.time }}</span>
                        <p class="webinar__description">{{ webinar.description }}</p>
                    </el-col>
                    <el-row>
                        <div class="webinar__question-menu">
                            <el-col :span="12">
                                <div>Просмотреть вопросы</div>
                            </el-col>
                            <el-col :span="12">
                                <div>Мои вопросы</div>
                            </el-col>
                            <el-col :span="12">
                                <div>Оставить вопрос</div>
                            </el-col>
                        </div>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </el-main>
</el-container>
</template>

<script>
import webinars from '../assets/json/webinars.json'
export default {
    name: "Webinars",
    data() {
        return {
            webinars: webinars,
        }
    }
}
</script>