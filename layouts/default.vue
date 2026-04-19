<script setup>
  import BaseHeader from '@/components/BaseHeader.vue'
  import BaseFooter from '~/components/BaseFooter.vue'
</script>

<template>
  <div>
    <BaseHeader />
    <main>
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>
