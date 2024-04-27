<template>
    <div class="content">
        <div class="subscription-container">
            <h3>Pick add-ons</h3>
            <p>Add-ons help enhance your gaming experience</p>
            <ul class="add-ons">
                <AddOnService :services="services" />
            </ul>
        </div>
    </div>
    <div class="mobile-nav">
        <BottomNav to="/plans" linkName="Go Back"
            color="var(--cool-gray)" bgColor="var(--white)"
        />
        <BottomNav to="/summary" linkName="Next Step"
            color="var(--alabaster)" bgColor="var(--marine-blue)"
        />
    </div>
</template>


<script setup>
    import { ref } from 'vue';
    import AddOnService from '../components/AddOnService.vue';
    import BottomNav from '../components/BottomNav.vue';
    
    // const nextLink = ref('');
    const services = ref([
        {
            id: 1,
            title: "Online services",
            description: "Access to multiplayer games",
            monthlyPrice: 1,
            yearlyPrice: 10
        },
        {
            id: 2,
            title: "Larger storage",
            description: "Extra 1TB of cloud save",
            monthlyPrice: 2,
            yearlyPrice: 20
        },
        {
            id: 3,
            title: "Customizable profile",
            description: "Custom theme on your profile",
            monthlyPrice: 2,
            yearlyPrice: 20
        }
    ]);

</script>
<style>
.subscription-container {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
}

.subscription-container h3 {
    font-family: 'Ubuntu-Bold';
    padding: 1rem 0;
}

.subscription-container > p {
    font-family: 'Ubuntu-Regular';
    padding: 0 5rem 0 0;
    line-height: 1.7rem;
    color: var(--cool-gray);
}

.add-ons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-block-end: 2rem;
}

.add-on {
    display: flex;
    width: 100%;
    align-items: center;
    color: var(--marine-blue);
    justify-content: space-between;
    padding: .7rem .5rem;
    border: 1px solid var(--cool-gray);
    margin: 1rem 0;
    border-radius: .5rem;
}

.add-on .description {
    flex: 1 1 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-family: 'Ubuntu-Bold';
    margin: 0 .5rem;
}

.check-input,
.add-on p:last-of-type {
    flex: 0 0 50px;
}

.add-on .check-input {
    cursor: pointer;
}

.add-on .description span {
    color: var(--cool-gray);
    font-family: 'Ubuntu-Regular';
}

.price {
    color: var(--marine-blue);
    font-family: 'Ubuntu-Medium';
}

.check-input:checked {
    border: 1px solid var(--marine-blue);
    background: var(--magnolia);
}
</style>