<template>
    <li :class="plan.selected ? 'plan selected' : 'plan' " v-for="plan in plans" 
        :key="plan.id" @click="onSelected(plan.id)"
    >
        <img :src="plan.photo" :alt="'-icon'+plan.name">
        <span class="plan-text">
            {{ plan.name }}
            <small v-if="plan.duration==='yr'">${{ plan.yearlyPrice }}/yr
            </small>
            <small v-else>${{ plan.monthlyPrice }}/mo</small>
            <p class="free-month"> {{ plan.bonus }}</p>
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