<template>
<el-container>
    <el-main>
        <div class="lesson__main">
            <div class="lesson-main__block">
            <el-row>
                <el-col :span="14">
                    <youtube class="lesson_video" :video-id="lesson.videoSrc" ref="youtube" @ready="ready" player-width="100%" player-height="400"></youtube>
                    <div class="lesson__video" id="player"></div>
                </el-col>
                <el-col :span="8" :push="2">
                    <ul class="lesson__timecodes">
                        <li v-for="(description, timecode) in lesson.timecodes" :key="timecode" @click="seekTo(timecode)">
                            <span class="timecode">{{ timecode }}</span>
                            <span>{{ description }}</span>
                        </li>
                    </ul>
                </el-col>
            </el-row>
            </div>
            <el-row>
                <el-col :span="10">
                    <h3 class="materials__title">{{ 'main.lesson.materials' | localize }}</h3>
                    <div class="lesson__materials">
                        <i class="fas fa-file-alt"></i>
                        <div class="materials-document">
                            <h4 class="materials__document-title main-color">Название документа</h4>
                            <div class="materials__document-info">
                                <span class="materials__document-type">Формат: PDF</span>
                                <span class="materials__document-size">Размер: 295 Кб</span>
                            </div>
                        </div>
                    </div>
                    <div class="lesson__hometask">
                        <h3 class="hometask__title">{{ 'main.lesson.hometask' | localize }}</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id ea blanditiis quas dolores ipsa ducimus perspiciatis nulla velit quaerat, tempore sed natus tenetur quia magnam dolor quisquam magni ipsum officiis.</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </el-main>
</el-container>
</template>

<script>
import lessons from '../assets/json/lessons.json'

export default {
    name: 'Lesson',
    data() {
        return {
            lesson: lessons[this.number - 1]
        }
    },
    computed: {
        player() {
            return this.$refs.youtube.player;
        }
    },
    methods: {
        seekTo(time) {
            const mins = Number(time.split(':')[0]);
            const secs = Number(time.split(':')[1]);
            const total = mins * 60 + secs;
            this.player.seekTo(total, true);
        }
    },
    props: ['number'],
}
</script>
