<template>
   <!-- CTA -->
   <section class="bg-blue-900 py-12">
    <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">

      <div>
        <h2 class="lg:text-5xl text-2xl  font-black text-white">
          Need Professional Water Solutions ?
        </h2>

        <p class="text-blue-100 mt-4 text-xl">
          Contact us today for a free assessment and quotation.
        </p>
      </div>
      
      <button class="border-2 border-white text-white hover:bg-white hover:text-blue-700 transition px-4 py-5 rounded-2xl font-black text-lg">
           <span class="phone">📞</span> CALL NOW +27 83 727 4638
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.phone {
    display: inline-block;
    animation: ring 0.8s infinite;
    transform-origin: top center;
}

@keyframes ring {
    0%   { transform: rotate(0deg); }
    15%  { transform: rotate(15deg); }
    30%  { transform: rotate(-15deg); }
    45%  { transform: rotate(12deg); }
    60%  { transform: rotate(-12deg); }
    75%  { transform: rotate(8deg); }
    100% { transform: rotate(0deg); }
}
</style>