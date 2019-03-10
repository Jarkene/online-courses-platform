<template>
    <Chat header="Чат с преподавателем" :messages="teacherDialog"/>
</template>

<script>
import Chat from './Chat.vue';
export default {
    name: 'TeacherChat',
    components: {
        Chat
    },
    computed: {
        teacherDialog() {
            return this.$store.getters.TeacherDialog
        }
    }
}
</script>
