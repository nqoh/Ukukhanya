<template>
   <!-- HERO -->
   <section class="relative  overflow-hidden py-5">
        <div class="relative max-w-7xl mx-auto text-center">
            
          <!-- <span class="bg-blue-700/40 text-white px-5 py-2 rounded-full font-semibold uppercase tracking-widest text-sm">
            <slot name="title"></slot>
          </span> -->
  
          <h1 class="text-4xl md:text-7xl font-black text-blue-950 leading-tight uppercase">
            <slot name="sub-title"></slot>
          </h1>
  
          <blockquote class="text-gray text-lg leading-relaxed px-2 mt-2 max-w-3xl mx-auto">
            <slot name="description"></slot>
          </blockquote>
  
        </div>
      </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>