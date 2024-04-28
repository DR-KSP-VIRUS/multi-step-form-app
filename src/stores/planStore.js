import { defineStore } from "pinia";

export const usePlanStore = defineStore("planStore", {
    state: () => ({
        plans: [
            {
                id: 1,
                name: "Arcade",
                monthlyPrice: 9,
                yearlyPrice: 90,
                duration: 'mo',
                bonus: '',
                photo: "/images/icon-arcade.svg"
            },
            {
                id: 2,
                name: "Advanced",
                monthlyPrice: 12,
                yearlyPrice: 120,
                duration: 'mo',
                bonus: '',
                photo: "/images/icon-advanced.svg"
            },
            {
                id: 3,
                name: "Pro",
                monthlyPrice: 15,
                yearlyPrice: 150,
                duration: 'mo',
                bonus: '',
                photo: "/images/icon-pro.svg",
            }
        ],
        selectedPlan: {}
    }),

    actions: {
        addChangePricing(changedPlan) {
            this.plans = changedPlan;
        },
        addSelectedPlan(plan) {
            this.selectedPlan = plan;
        }
    }
});