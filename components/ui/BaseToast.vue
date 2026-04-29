<script setup lang="ts">
  import { useToast } from '~/composables/useToast'

  const { isVisible, message, type, hideToast } = useToast()
</script>

<template>
  <Transition name="toast">
    <div v-if="isVisible" class="toast" :class="`toast--${type}`">
      <span class="toast__icon">{{ type === 'success' ? '✓' : '✕' }}</span>
      <span class="toast__message">{{ message }}</span>

      <button class="toast__action">View Cart</button>
      <button class="toast__close" @click="hideToast">✕</button>
    </div>
  </Transition>
</template>
<style scoped>
  .toast {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
    padding: 0 calc((100% - 1248px) / 2);
    background: #ede8df;
    border-bottom: 1px solid #d9d3c7;
  }

  .toast--error {
    background: #fdf0f0;
    border-bottom-color: #e0c0c0;
  }

  .toast__content {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .toast__icon {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    font-size: 11px;
    color: #8a7d6b;
    border: 1.5px solid #8a7d6b;
    border-radius: 50%;
  }

  .toast--error .toast__icon {
    color: #c0392b;
    border-color: #c0392b;
  }

  .toast__message {
    font-size: 14px;
    color: #4a4035;
  }

  .toast__action {
    padding: 0;
    font-size: 13px;
    font-weight: 500;
    color: #8a7d6b;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    cursor: pointer;
    background: transparent;
    border: none;
  }

  .toast__action:hover {
    color: #4a4035;
  }

  .toast-enter-active,
  .toast-leave-active {
    transition: all 0.3s ease;
  }

  .toast-enter-from,
  .toast-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
</style>
