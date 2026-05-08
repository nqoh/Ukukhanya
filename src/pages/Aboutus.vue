<template>
    <div class="bg-blue-50 text-slate-800">

      <Hero>
       <template #title>
         ABOUT UKUKHANYA 
       </template>

       <template #sub-title>
        Who We Are
       </template>

       <template #description>
        We are a professional borehole drilling and water solutions company committed to 
        providing reliable access to clean underground water.
       </template>
      </Hero>
      <!-- OurStory -->
      <ourstory />
      <!-- MISSION & VISION -->
     <MissionVission />
      <!-- WHY CHOOSE US -->
      <section class="py-4 bg-white">
  
        <div class="max-w-7xl mx-auto px-6">
  
          <div class="text-center">
  
            <span
              class="text-blue-700 font-black uppercase tracking-widest text-sm"
            >
              Why Choose Us
            </span>
  
            <h2
              class="text-5xl font-black text-blue-950 mt-5"
            >
              Professional Service You Can Trust
            </h2>
  
          </div>
  
          <div
            class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10"
          >
  
            <div
              class="text-center bg-slate-50 rounded-[2rem] p-8 hover:shadow-2xl transition"
            >
              <div class="text-7xl">🛡️</div>
  
              <h3
                class="text-2xl font-black text-blue-950 mt-6"
              >
                Experienced Team
              </h3>
  
              <p class="text-slate-600 mt-4 leading-relaxed">
                Skilled professionals with years of experience.
              </p>
            </div>
  
            <div
              class="text-center bg-slate-50 rounded-[2rem] p-8 hover:shadow-2xl transition"
            >
              <div class="text-7xl">🏅</div>
  
              <h3
                class="text-2xl font-black text-blue-950 mt-6"
              >
                Quality Guaranteed
              </h3>
  
              <p class="text-slate-600 mt-4 leading-relaxed">
                Durable and reliable workmanship every time.
              </p>
            </div>
  
            <div
              class="text-center bg-slate-50 rounded-[2rem] p-8 hover:shadow-2xl transition"
            >
              <div class="text-7xl">⏰</div>
  
              <h3
                class="text-2xl font-black text-blue-950 mt-6"
              >
                On Time Delivery
              </h3>
  
              <p class="text-slate-600 mt-4 leading-relaxed">
                Efficient project execution and support.
              </p>
            </div>
  
            <div
              class="text-center bg-slate-50 rounded-[2rem] p-8 hover:shadow-2xl transition"
            >
              <div class="text-7xl">🤝</div>
  
              <h3
                class="text-2xl font-black text-blue-950 mt-6"
              >
                Customer Focused
              </h3>
  
              <p class="text-slate-600 mt-4 leading-relaxed">
                We prioritize long-term client satisfaction.
              </p>
            </div>
  
          </div>
  
        </div>
  
      </section>
       
    </div>
  </template>  
<script setup lang="ts">
  import ourstory from '../components/App/Aboutus/Ourstory.vue';
  import MissionVission from '../components/App/Aboutus/Mission&Vission.vue';
  import Hero from '../components/App/Hero.vue';
</script>

<style scoped>

</style>