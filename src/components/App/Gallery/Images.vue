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

        <h2
          class="text-5xl font-black text-blue-950 mt-2"
        >
          Project Images
        </h2>
      </div>

    </div>

    <!-- IMAGE GRID -->
    <div
      class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
    >

      <!-- IMAGE CARD -->
      <div
        class="group overflow-hidden rounded-[2rem] shadow-xl relative"
      >
        <img
          src="/assets/images/IMG-20260508-WA0019.jpg"
          alt="Borehole Drilling"
          class="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-8"
        >
          <div>
            <h3 class="text-3xl font-black text-white">
              Borehole Drilling
            </h3>

            <p class="text-slate-200 mt-2">
              Professional drilling project completed successfully.
            </p>
          </div>
        </div>
      </div>

      <!-- IMAGE CARD -->
      <div
        class="group overflow-hidden rounded-[2rem] shadow-xl relative"
      >
        <img
          src="/assets/images/IMG-20260508-WA0015.jpg"
          alt="Water Solutions"
          class="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-8"
        >
          <div>
            <h3 class="text-3xl font-black text-white">
              Water Infrastructure
            </h3>

            <p class="text-slate-200 mt-2">
              Reliable water systems for residential projects.
            </p>
          </div>
        </div>
      </div>

      <!-- IMAGE CARD -->
      <div
        class="group overflow-hidden rounded-[2rem] shadow-xl relative"
      >
        <img
          src="/assets/images/IMG-20260508-WA0014.jpg"
          alt="Solar Pump"
          class="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-8"
        >
          <div>
            <h3 class="text-3xl font-black text-white">
              Solar Pump Installation
            </h3>

            <p class="text-slate-200 mt-2">
              Sustainable solar powered water solution.
            </p>
          </div>
        </div>
      </div>

      <!-- IMAGE CARD -->
      <div
        class="group overflow-hidden rounded-[2rem] shadow-xl relative"
      >
        <img
          src="/assets/images/IMG-20260508-WA0013.jpg"
          alt="Tank Stand"
          class="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-8"
        >
          <div>
            <h3 class="text-3xl font-black text-white">
              Tank Stand Construction
            </h3>

            <p class="text-slate-200 mt-2">
              Strong and durable elevated water systems.
            </p>
          </div>
        </div>
      </div>

      <!-- IMAGE CARD -->
      <div
        class="group overflow-hidden rounded-[2rem] shadow-xl relative"
      >
        <img
          src="/assets/images/IMG-20260508-WA0001.jpg"
          alt="Construction"
          class="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-8"
        >
          <div>
            <h3 class="text-3xl font-black text-white">
              Construction Work
            </h3>

            <p class="text-slate-200 mt-2">
              Professional infrastructure and water engineering.
            </p>
          </div>
        </div>
      </div>

      <!-- IMAGE CARD -->
      <div
        class="group overflow-hidden rounded-[2rem] shadow-xl relative"
      >
        <img
          src="/assets/images/IMG-20260508-WA0046.jpg"
          alt="Filtration"
          class="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
        />

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-8"
        >
          <div>
            <h3 class="text-3xl font-black text-white">
              Filtration Systems
            </h3>

            <p class="text-slate-200 mt-2">
              Clean and healthy water filtration solutions.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>

</section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>