<template>
    <div class="content">
        <div class="plan-container">
            <h3>Select your plan</h3>
            <p>You have the option of monthly or
                yearly billing.
            </p>
            <ul class="plans">
                <Plan :plans="plans" @selected="handleSelected"/>
            </ul>
            <div class="duration">
                <p>Monthly</p>
                <label class="btn-switch">
                    <input type="checkbox" class="input-check" @change="handleChange" :checked="getSelectedPlan &&getSelectedPlan.duration==='yr'">
                    <span class="slider"></span>
                </label>
                <p>Yearly</p>
            </div>
        </div>
    </div>
    <div class="mobile-nav">
        <BottomNav link="/" linkName="Go Back" 
            color="var(--cool-gray)" bgColor="var(--white)"
        />
        <BottomNav link="/plan-add-ons" linkName="Next Step"
            color="var(--alabaster)" bgColor="var(--marine-blue)"
         />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { usePlanStore } from '@/stores/planStore';
import { useUserStore } from '@/stores/userStore';
import Plan from '../components/Plan.vue';
import BottomNav from '../components/BottomNav.vue';
import router from '@/router';

const planStore = usePlanStore();
const userStore = useUserStore()
const { plans,getSelectedPlan} = storeToRefs(planStore);
    
const handleSelected = (id) => {
    let selectedPlan = plans.value.map((plan) => {
        if (plan.id === id) {
            return {...plan,selected:true}
        } else {
            return {...plan,selected:false}
        }
    })
    planStore.addSelectedPlan(selectedPlan);
}

const handleChange = (event) => {
    plans.value = plans.value.map((plan) => {
        if (event.target.checked) {
            return {...plan,duration:'yr',bonus: '2 months free'}
        } else {
            return {...plan,duration:'mo',bonus:''}
        }
    })
    planStore.addChangePricing(plans.value);
}

onMounted(() => {
    if(!userStore.userExists) router.push('/')
})
    
</script>

<style>
.plan-container {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    transition: all 0.8s ease-in-out;
}

.plan-container h3 {
    font-family: 'Ubuntu-Bold';
    padding: 1rem 0;
}

.plan-container > p {
    font-family: 'Ubuntu-Regular';
    padding: 0rem 5rem 0 0 ;
    line-height: 1.7rem;
    color: var(--cool-gray);
}

.plans {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.plan {
    display: flex;
    align-items: center;
    font-family: 'Ubuntu-Medium';
    padding: 1rem;
    border: 1px solid var(--cool-gray);
    width: 100%;
    margin: .5rem 0;
    cursor: pointer;
    border-radius: .5rem;
}

.plan-text {
    display: flex;
    color: var(--marine-blue);
    flex-direction: column;
    margin-left: 1rem ;
}

.plan-text small {
    margin-top: .3rem;
    color: var(--cool-gray);
}

.duration {
    background: var(--alabaster);
    font-family: 'Ubuntu-Bold';
    color: var(--marine-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.3rem 0;
    border-radius: .5rem;
    margin: 2rem 0;
}

.input-check {
    display: none;
}

.btn-switch {
    display: inline-block;
    position: relative;
    width: 35px;
    height: 18px;
    cursor: pointer;
    margin: 0 2rem;
}

.slider {
    background: var(--marine-blue);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: var(--white);
    border-radius: 20px;
    border: 1px solid var(--marine-blue);
    transition: transform 0.3s linear;
}

.slider::before {
    content: "";
    width: 10px;
    height: 10px;
    top: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    position: absolute;
    border-radius: 50%;
    transition: transform 0.3s linear;
}

.input-check:checked + .slider {
    background: var(--marine-blue);
    padding-left: 20px;
    transition: 0.4s;
}

.input-check:not(:checked) + .slider {
    background: var(--marine-blue);
    padding-right: 20px;
    transition: 0.4s;
}

.input-check:checked + .slider::before{
    content: "";
    background-color: rgb(255, 255, 255);
}

.input-check:not(:checked) + .slider::before{
    content: "";
    background-color: var(--white);
}

.duration p:last-of-type {
    color: var(--cool-gray);
}


@media screen and (min-width:1024px) {
    .plan-container {
        padding: 0 2rem;
    }
    .plans {
        flex-direction: row;
    }
    
    .plan {
        margin: .4rem;
        flex-direction: column;
        align-items: flex-start;
        padding: 1.5rem .8rem;
    }

    .plan-text {
        margin-left: 0rem;
        padding-top: 2.5rem;
    }
}
</style>