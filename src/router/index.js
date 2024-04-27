import { createRouter, createWebHashHistory} from 'vue-router';
import PersonalInfo from '../views/PersonalInfo.vue';


const router  = createRouter({
  history: createWebHashHistory(import.meta.env.BASEURL),
  routes: [
    {
      path: '/',
      name: 'personal',
      component: PersonalInfo
    },
    { 
      path:'/plans', 
      component: () => import("../views/SubscriptionPlan.vue"),
    },
    { 
      path:'/plan-add-ons', 
      component: () => import("../views/PlansAddOn.vue"),
    },
    { 
      path:'/summary', 
      component: () => import("../views/Summary.vue"),
    },
    {
      path: '/thanks',
      component: () => import("../views/Subscribed.vue"),
    }
  ]
});

export default router;

