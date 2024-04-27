<template>
    <li :class="serviceSelected? 'selected-plan add-on' :'add-on'" v-for="service in services" :key="service.id">
        <input type="checkbox" class="check-input"
            v-model="selectedService" :name="service.id" 
            :value="service.title"
        />
        <label class="description">{{ service.title }}
            <span>{{ service.description }}</span>
        </label>
        <!-- <p class="price" v-if="condition">+${{ service.yearlyPrice }}/yr</p>  -->
        <p class="price">+${{ service.monthlyPrice }}/mo</p> 
    </li>
</template>

<script setup>
    import { ref, computed } from 'vue';

    const selectedService = ref([]);

    const props = defineProps({
        services: {
            type: Array,
            required: true
        },
    });

    const serviceSelected = computed(() => {
        props.services.forEach((el,i) => {
            return selectedService.value[i]=== el.title
        });
    });

    console.log(serviceSelected.value);
</script>