<script setup lang="ts">
  import { useDrawerStore } from '~/stores/drawer'

  const props = defineProps<{
    name: string
  }>()

  const drawer = useDrawerStore()
</script>

<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div v-if="drawer.isOpen(props.name)" class="drawer">
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
  .drawer {
    position: fixed;
    top: 48px;
    z-index: 101;
    box-sizing: border-box;
    display: none;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    padding-right: 16px;
    padding-left: 16px;
    overflow: hidden;
    background: #fff;

    @media (max-width: $bp-md) {
      display: block;
    }
  }
</style>
