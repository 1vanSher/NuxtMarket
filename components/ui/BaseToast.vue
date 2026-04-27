<script setup lang="ts">
  import { useToast } from '~/composables/useToast'

  const { isVisible, message } = useToast()
</script>

<template>
  <Transition name="toast">
    <div v-if="isVisible" class="toast">
      {{ message }}
    </div>
  </Transition>
</template>

<style scoped>
  .toast {
    position: fixed;
    right: 32px;
    bottom: 32px;
    z-index: 1000;
    padding: 12px 24px;
    color: #fff;
    background: #000;
  }

  .toast-enter-active,
  .toast-leave-active {
    transition:
      opacity 0.3s,
      transform 0.3s;
  }

  .toast-enter-from,
  .toast-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
</style>
