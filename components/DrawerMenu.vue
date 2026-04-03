<script setup lang="ts">
  defineProps<{
    isOpen: boolean
  }>()
</script>

<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div v-if="isOpen" class="drawer">
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
  .drawer {
    @media (width >= 425px) {
      display: none;
    }

    position: fixed;
    top: 48px;
    z-index: 101;
    width: 282px;
    height: 100%;
    padding: 0 16px;
    overflow: hidden;
    background: #fff;
  }
</style>
