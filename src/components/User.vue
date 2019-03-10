<template>
    <el-container>
        <el-main>
            <div class="user__main shadow">
                <el-row>
                    <el-col :span="24">
                        <div class="user__data">
                            <img src="../assets/img/user_photo.jpg" alt="" width="100px" class="user__image">
                            <div class="user-data__fieldset">
                                <el-row>
                                    <el-col :span="10" :offset="1">
                                        <div class="input__block">
                                            <label for="user_name">{{ 'main.user.name' | localize }}</label><br>
                                            <input v-model="user.name" type="text" id="user__name" class="user__input" :placeholder="$t('user.name')">
                                        </div>
                                    </el-col>
                                    <el-col :span="10" :offset="1">
                                        <div class="input__block">
                                            <label for="user_phone">{{ 'main.user.phone' | localize }}</label><br>
                                            <input v-model="user.phone" type="email" id="user__phone" class="user__input" :placeholder="$t('user.phone')">
                                        </div>
                                    </el-col>
                                    <el-col :span="10" :offset="1">
                                        <div class="input__block">
                                            <label for="user_email">{{ 'main.user.email' | localize }}</label><br>
                                            <input v-model="user.email" type="text" id="user__email" class="user__input" :placeholder="$t('user.email')">
                                        </div>
                                    </el-col>
                                    <el-col :span="10" :offset="1">
                                        <div class="input__block">
                                            <label for="user_github">{{ 'main.user.github' | localize }}</label><br>
                                            <input v-model="user.github" type="text" id="user__github" class="user__input" :placeholder="$t('user.github')">
                                        </div>
                                    </el-col>
                                    <el-col :span="10" :offset="1">
                                        <div class="input__block">
                                            <label for="user_skype">{{ 'main.user.skype' | localize }}</label><br>
                                            <input v-model="user.skype" type="text" id="user__skype" class="user__input" :placeholder="$t('user.skype')">
                                        </div>
                                    </el-col>
                                </el-row>    
                            </div>
                        </div>
                        <button type="button" class="save-changes__button">{{ 'main.user.save' | localize }}</button>
                    </el-col>
                </el-row>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'User',
    computed: {
        user() {
            return this.$store.getters.User
        }
    }
}
</script>
