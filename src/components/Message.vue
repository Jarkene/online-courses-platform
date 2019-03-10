<template>
<div class="message">
    <img class="message__photo" src="~@/assets/img/user_photo.jpg" alt="">
    <div class="message__block">
        <div class="message__main">
            <div class="message__sender">{{ message.sender }}</div>
            <div class="message__text">{{ message.text }}</div>
        </div>
        <div class="message__info">
            <span class="message__date">{{ message.date }}</span>
            <span class="message__time">{{ message.time }}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MyMessage',
    props: ['message']
}
</script>
