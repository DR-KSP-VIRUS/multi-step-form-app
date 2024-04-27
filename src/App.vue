<template>
    <main>
      <section class="sidebar">
        <!-- <button v-for="(_, tab) in tabs"  -->
          <!-- :key="tab" -->
          <!-- :class="['tab-button',{active:currentTab===tab}]" -->
          <!-- @click="currentTab = tab"> -->
          <!-- {{ tab }} -->
        <!-- </button> -->
        <!-- <component :is="tabs[currentTab]" class="tab"></component> -->
        <SideBar />
      </section>
      <section class="content-box">
          <RouterView />
      </section>
    </main>
</template>


<script setup>
  // import { ref } from 'vue';
  import SideBar from './views/SideBar.vue';

  // const currentTab = ref("PersonalInfo");
// 
  // const tabs = {
    // PersonalInfo,
    // PlansAddOn,
    // SubscriptionPlan,
    // Subsription,
    // Summary
  // };


</script>
