<template>
    <div class="bg-blue-50 text-slate-800">
      <Hero>
       <template #title>
         UKUKHANYA SERVICES
       </template>

       <template #sub-title>
        What we Offer
       </template>

       <template #description>
        We provide complete water infrastructure services
        including borehole drilling, filtration systems,
        solar pump installations and water backup solutions.
       </template>
      </Hero>

      <!-- SERVICES -->
      <services />
  
    </div>
  </template>
  
<script setup lang="ts">
  import Hero from '../components/App/Hero.vue';
  import services from '../components/App/Services/services.vue';
</script>

<style scoped>

</style>