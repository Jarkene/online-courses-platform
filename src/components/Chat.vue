<template>
<el-container>
    <el-main class="chat__main">
        <el-row>
            <el-col :span="18" :offset="3">
                <div class="chat__block">
                    <div class="chat__messages">
                        <div  v-for="message in messages" :key="message.text">
                            <MyMessage class="chat-messages__item" v-if="message.sender == 'Я'" :message="message"/>
                            <Message class="chat-messages__item" v-else :message="message"/>
                        </div>
                    </div>
                </div> 
                <div  class="message__form shadow">
                    <el-input
                    v-model="text" 
                    type="textarea"
                    rows="3"
                    :placeholder="$t('chat.input')"
                    class="message__input"
                    resize="none">
                    </el-input>
                    <button class="send-message-btn" @click="sendMessage">Отправить</button>
                </div>
            </el-col>
        </el-row>
    </el-main>
</el-container>
</template>

<script>
import MyMessage from './MyMessage.vue'
import Message from './Message.vue'
export default {
    name: "Chat",
    data() {
        return {
            created: false,
            text: '',
        }
    },
    props: ['header', 'messages'],
    components: {
        MyMessage,
        Message
    },
    created() {
        setTimeout( this.scrollToBottom, 20 );
    },
    methods: {
        sendMessage() {
            const text = this.text;
            const curDate = new Date();
            if (this.text != '') {
                this.messages.push({
                    sender: 'Я',
                    text: text,
                    date: `${this.addZero(curDate.getDate())}.${this.addZero(curDate.getMonth()+1)}.${curDate.getFullYear()}`,
                    time: `${this.addZero(curDate.getHours())}:${this.addZero(curDate.getMinutes())}`
                });
                this.text = '';
                setTimeout( this.scrollToBottom, 20 );
            }
        },
        scrollToBottom() {
            var chatMessages = document.querySelector(".chat__messages");
            chatMessages.scrollTop = chatMessages.scrollHeight;
        },
        addZero(num) {
            if (num >= 10) return num;
            if (num < 10) return '0' + num;
        }
    },
}
</script>