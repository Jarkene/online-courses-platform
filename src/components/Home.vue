<template>
<el-container>
    <el-main class="app__home">
        <el-row class="app-home__main" type="flex">
            <el-col :span="12">
                <Ads />
            </el-col>
        </el-row>
    </el-main>
</el-container>
</template>

<script>
import Ads from './Ads.vue'
export default {
    name: 'Home',
    components: {
        Ads
    }
}
</script>
