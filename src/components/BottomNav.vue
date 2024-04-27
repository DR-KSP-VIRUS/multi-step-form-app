<template>
    <RouterLink class="nav-link" :to="link" 
        :style="{'background-color':bgColor,'color':color}"
        @click="onButtonClicked"> 
        {{ linkName }}
    </RouterLink>
</template>

<script setup>
    defineProps({
        link: {
            type: String,
            required: false
        },
        linkName: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            required: true
        }
    });


    const emit = defineEmits(['onBtnClick']);

    const onButtonClicked = () => {
        emit("onBtnClick");
    }
</script>

<style scoped>
    .nav-link {
        text-decoration: none;
        padding: .5rem 1rem;
        font-family: 'Ubuntu-Regular';
        display: flex;
        place-items: center;
        border-radius: 0.4rem;
        transition: transform 89ms ease;
    }

    .nav-link:active {
        transform: scale(0.89);
    }
</style>