<template>
    <Chat header="Общий чат" :messages="[]"/>
</template>

<script>
import Chat from './Chat.vue'
export default {
    name: 'GeneralChat',
    components: {
        Chat
    }
}
</script>