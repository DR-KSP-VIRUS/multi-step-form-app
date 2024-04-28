<template>
    <div class="content">
        <div class="summary-container">
            <h3>Finishing up</h3>
            <p>Double-check everything looks OK
                before confirming.
            </p>
            <ul class="summary-list">
                <li class="item-summary">
                    <div class="item">
                        <p class="plan-item">
                        {{ planStore.selectedPlan.name }}
                        <RouterLink to="/plans">Change</RouterLink>
                        </p>
                        <p v-if="planStore.selectedPlan.duration === 'yr'">{{ planStore.selectedPlan.yearlyPrice }}/{{ planStore.selectedPlan.duration }}</p>
                        <p v-else>{{ planStore.selectedPlan.monthlyPrice }}/{{ planStore.selectedPlan.duration }}</p>
                    </div>
                    <ul class="services" v-for="service in serviceStore.services" :key="service.id">
                        <li class="service" v-if="service.active">
                            <p class="service-type">{{service.title}}</p>
                            <p class="price" v-if="planStore.selectedPlan.duration === 'yr'">+${{ service.yearlyPrice }}/yr</p>
                            <p v-else> +${{ service.monthlyPrice }}/{{ planStore.selectedPlan.duration }}</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="total">
                <p v-if="planStore.selectedPlan.duration === 'yr'">Total (per year)</p>
                <p v-else>Total (per month)</p>
                <p class="total-amount" v-if=" planStore.selectedPlan.duration === 'yr' ">${{  (serviceStore.totalYearlyServiceCost+planStore.selectedPlan.yearlyPrice) }}/yr</p>
                <p v-else> ${{  serviceStore.totalMonthlyServiceCost+planStore.selectedPlan.monthlyPrice }}</p>
            </div>
        </div>
    </div>
    <div class="mobile-nav">
        <BottomNav link="/plan-add-ons" linkName="Go Back"
            color="var(--cool-gray)" bgColor="var(--white)"
        />
        <BottomNav link="/thanks" linkName="Confirm"
            color="var(--alabaster)" bgColor="var(--purplish-blue)"
        />
    </div>
</template>

<script setup>
import { usePlanStore } from '@/stores/planStore';
import { useAddOnStore } from '@/stores/addOnServicesStore';
import BottomNav from '../components/BottomNav.vue';

const planStore = usePlanStore();
const serviceStore = useAddOnStore();
    
</script>

<style>
    .summary-container {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
    }

    .summary-container h3 {
        font-family: 'Ubuntu-Bold';
        padding-bottom: 1rem;
    }

    .summary-container > p {
        font-family: 'Ubuntu-Regular';
        padding: 0 5rem 0 0;
        line-height: 1.3rem;
        color: var(--cool-gray);
    }
    .summary-list {
        display: flex;
        flex-direction: column;
        padding-block: 2rem;
    }
    .item-summary {
        display: flex;
        flex-direction: column;
        background: var(--alabaster);
        padding-block: 1rem;
        padding-inline: 1rem;
    }

    .item {
        display: flex;
        font-family: 'Ubuntu-Bold';
        color: var(--marine-blue);
        border-bottom: 1px solid var(--light-gray);
    }

    .plan-item {
        display: flex;
        flex-direction: column;
        flex: 1 1 0px;
    }

    .plan-item a {
        font-family: 'Ubuntu-Regular';
        color: var(--cool-gray);
        padding-block: 0 .7rem;
    }

    .services {
        display: flex;
        flex-direction: column;
        font-family: 'Ubuntu-Medium';
    }
    
    .service {
        color: var(--cool-gray);
        display: flex;
        padding-block: 0.3rem;
        justify-content: space-between;
    }

    .service .price {
        color:var(--cool-gray)
    }

    .total {
        display: flex;
        justify-content: space-between;
        padding-block: 1.4rem;
        padding-block-end: 3rem;
        font-family: 'Ubuntu-Medium';
        color: var(--cool-gray);
    }
    .total-amount {
        color: var(--purplish-blue);
        font-family: 'Ubuntu-Bold';
        margin-right: 1rem;
    }
</style>