<template>
    <div class="bg-blue-50 text-slate-800">
      <Hero>
       <template #title>
         UKUKHANYA GALLERY
       </template>

       <template #sub-title>
         Our Recent Projects 
       </template>

       <template #description>
        Explore our completed projects including borehole drilling,
        solar pump installations, water systems and infrastructure work.
       </template>
      </Hero>

      <!-- IMAGE GALLERY -->
      <Images />
  
      <!-- VIDEO SECTION -->
      <videos />
    </div>
  </template>
  
<script setup lang="ts">
  import Images from '../components/App/Gallery/Images.vue';
  import videos from '../components/App/Gallery/videos.vue';
  import Hero from '../components/App/Hero.vue';
</script>

<style scoped>

</style>