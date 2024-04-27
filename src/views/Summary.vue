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
                        Arcade (Monthly)
                        <RouterLink to="/plans">Change</RouterLink>
                        </p>
                        <p>$90/yr</p>
                    </div>
                    <ul class="services">
                        <li class="service">
                            <p class="service-type">Online</p>
                            <p class="price">+$10/yr</p>
                        </li>
                        <li class="service">
                            <p>Large Storage</p>
                            <p class="price">+$20/yr</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="total">
                <p>Total (per year)</p>
                <p class="total-amount">$120/yr</p>
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
    import { ref } from 'vue';
    import BottomNav from '../components/BottomNav.vue';

    // const nextLink = ref('');
    
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