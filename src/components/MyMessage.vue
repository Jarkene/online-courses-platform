<template>
<div class="my-message">
    <div class="my-message__block">
        <div class="my-message__text">
            {{ message.text }}
        </div>
        <div class="my-message__info">
            <span class="my-message__date">{{ message.date }}</span>
            <span class="my-message__time">{{ message.time }}</span>
        </div>
    </div>
    <img class="message-photo" src="~@/assets/img/user_photo.jpg" alt="">
</div>
</template>

<script>
export default {
    name: 'MyMessage',
    props: ['message']
}
</script>