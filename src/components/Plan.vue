<template>
    <li :class="selectedPlan.id === plan.id ? 'plan selected' : 'plan' " v-for="plan in plans" 
        :key="plan.id" @click="onSelected(plan.id)"
    >
        <img :src="plan.photo" :alt="'-icon'+plan.name">
        <span class="plan-text">
            {{ plan.name }}
            <small v-if="duration">${{ plan.yearlyPrice }}/yr</small>
            <p v-if="duration" class="free-month"> 2 months free</p>
            <small v-else>${{ plan.monthlyPrice }}/mo</small>
        </span>
    </li>
</template>

<script setup>

    const emit = defineEmits(['selected']);
    const props = defineProps({
        plans: {
            type:Array,
            required:true
        },
        duration: {
            type: Boolean,
            required: true
        },
        selectedPlan: {
            type: Object,
            required: true
        }
    });

    const onSelected = (id) => {
        emit("selected",id)
    }
</script>

<style scoped>
    .selected {
        background-color: var(--magnolia);
        border: 1px solid var(--purplish-blue);
    }
</style>