<script setup>
  import BaseHeader from '@/components/BaseHeader.vue'
</script>

<template>
  <div>
    <BaseHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
