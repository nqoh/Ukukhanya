<template>
<section class="py-4 bg-white">
  <div class="max-w-7xl mx-auto px-6">

    <div class="flex items-center justify-between flex-wrap gap-5">

      <div>
        <span
          class="text-blue-700 font-black uppercase tracking-widest text-sm"
        >
          Photo Gallery
        </span>

       
      </div>

    </div>
    <!-- IMAGE GRID -->
    <template v-for="item in items" :key="item.id" >
    <h2 class="text-3xl font-black text-blue-950 mt-4 ml-6">
      {{ item.name }}
    </h2>
   
    <div  class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-2" >
      <!-- IMAGE CARD -->
      <div class="group overflow-hidden rounded-[2rem] shadow-xl relative" v-for="image in item.images">
        <img
          :src="'/assets/images/'+image"
          :alt="item.name"
          class="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-8"
        >
          <div>
             <h3 class="text-xl font-bold text-white">
              {{ item.name }}
            </h3> 

            <p class="text-slate-200 mt-2">
              Professional drilling project completed successfully.
            </p>
          </div>
        </div>
      </div>


      <!-- IMAGE CARD -->
    </div>
  </template>

  </div>

</section>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  const items  = reactive([
    {id:1,name:'Borehole Drilling', images:['borhole.jpg','borhole2.jpg','IMG-20260508-WA0013.jpg']},
    {id:2,name:'Borehole Cleaning & Rehabilitation', images:['clearning.jpg','clearning2.jpg','clearning3.jpg']},
    {id:3,name:'Yield Testing', images:['testing.jpg','testing2.jpg','testing3.jpg']},
    {id:4,name:'Pump Supply & Installation', images:['pump.jpg','pump2.jpg','pump3.jpg']},
    {id:5,name:'Solar Pump Solution', images:['solar.jpg','solar2.jpg','solar3.jpg']},
    {id:6,name:'Water Backup System', images:['IMG-20260518-WA0004.jpg','backup.jpg','backup2.jpg']},
    {id:7,name:'Tank Stand Construction', images:['tank2.jpg','tank.jpg','IMG-20260518-WA0002.jpg']},
    {id:8,name:'Filteration System', images:['filter.jpg','filter2.jpg','filter3.jpg']}
    ])
</script>

<style scoped>

</style>