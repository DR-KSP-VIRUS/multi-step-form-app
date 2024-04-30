<template>
    <li :class="service.active? 'selected-plan add-on' :'add-on'" v-for="service in services" :key="service.id">
        <input type="checkbox" class="check-input"
            @change="onSelected" :name="service.id" 
            :value="service.title" :checked="service.active"
        />
        <label class="description">{{ service.title }}
            <span>{{ service.description }}</span>
        </label>
        <p class="price" v-if="service.duration==='yr'">+${{ service.yearlyPrice }}/{{ service.duration }}</p> 
        <p v-else class="price">+${{ service.monthlyPrice }}/{{service.duration}}</p> 
    </li>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { usePlanStore } from '@/stores/planStore';
import { useAddOnStore } from '@/stores/addOnServicesStore';

const planStore = usePlanStore();
const servicesStore = useAddOnStore();
const { services} = storeToRefs(servicesStore);

const props = defineProps({
    services: {
        type: Array,
        required: true
    },
});

const emit = defineEmits(['selected']);


onMounted(() => {
    services.value = services.value.map((service) => {
        if (planStore.getSelectedPlan.duration === 'yr') {
            return { ...service, duration: 'yr' }
        } else {
            return { ...service, duration: 'mo' }
        }
    });
});

const onSelected = (evt) => {
    emit('selected',evt)
}
</script>

<style scoped>
    .selected-plan{
        background-color: var(--magnolia);
    }
</style>