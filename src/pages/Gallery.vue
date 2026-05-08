<template>
    <div class="bg-blue-50 text-slate-800">
  
      <!-- HERO -->
      <section
        class="relative  overflow-hidden"
      >
        
        <div class="relative max-w-7xl mx-auto px-6 py-6 text-center">
  
          <span
            class="bg-blue-700/40 text-white px-5 py-2 rounded-full font-semibold uppercase tracking-widest text-sm"
          >
            UKUKHANYA GALLERY
          </span>
  
          <h1
            class="text-5xl md:text-7xl font-black text-blue-950 leading-tight mt-2 uppercase"
          >
            Our Recent Projects 
          </h1>
  
          <p
            class="text-blue-700 text-xl leading-relaxed mt-2 max-w-3xl mx-auto"
          >
            Explore our completed projects including borehole drilling,
            solar pump installations, water systems and infrastructure work.
          </p>
  
        </div>
      </section>
  
      <!-- IMAGE GALLERY -->
      <Images />
  
      <!-- VIDEO SECTION -->
      <videos />
  
      <!-- CTA -->
      <section class="bg-blue-900 py-10">
  
        <div class="max-w-6xl mx-auto px-6 text-center">
  
          <h2
            class="text-5xl font-black text-white leading-tight"
          >
            Need Professional Water Solutions?
          </h2>
  
          <p
            class="text-blue-100 text-xl leading-relaxed mt-6 max-w-3xl mx-auto"
          >
            Contact Ukukhanya Equip Solutions today for
            professional borehole drilling, filtration systems
            and sustainable water infrastructure solutions.
          </p>
  
          <div
            class="flex flex-wrap items-center justify-center gap-5 mt-2"
          >
            <button
              class="border-2 border-white text-white hover:bg-white hover:text-blue-700 transition px-10 py-5 rounded-2xl font-black text-lg"
            >
              📞 CALL NOW +27 83 727 4638
            </button>
  
          </div>
  
        </div>
  
      </section>
  
    </div>
  </template>
  
<script setup lang="ts">
  import Images from '../components/App/Gallery/Images.vue';
  import videos from '../components/App/Gallery/videos.vue';
</script>

<style scoped>

</style>