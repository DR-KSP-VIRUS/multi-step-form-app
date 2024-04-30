import { defineStore } from "pinia";


export const useAddOnStore = defineStore("addOnStore", {
    state: () => ({
        services: [
            {
                id: 1,
                title: "Online services",
                description: "Access to multiplayer games",
                monthlyPrice: 1,
                yearlyPrice: 10,
                duration: 'mo',
                active: false,
            },
            {
                id: 2,
                title: "Larger storage",
                description: "Extra 1TB of cloud save",
                monthlyPrice: 2,
                yearlyPrice: 20,
                duration: 'mo',
                active: false,
            },
            {
                id: 3,
                title: "Customizable profile",
                description: "Custom theme on your profile",
                monthlyPrice: 2,
                yearlyPrice: 20,
                duration: 'mo',
                active: false,
            }
        ],
    }),
    getters: {
        totalYearlyServiceCost() {
            return this.services.filter(p => p.active).reduce((acc, service) => {
                return acc += service.yearlyPrice
            }, 0)
        },
        totalMonthlyServiceCost() {
            return this.services.filter(p => p.active).reduce((acc, service) => {
                return acc += service.monthlyPrice
            }, 0)
        }
    }
    ,

    actions: {
        addSelectedServices(id, services) {
            this.services[id - 1] = services;
        }
    }

})