import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDrawerStore = defineStore('drawer', () => {
  const activeDrawer = ref<string | null>(null)

  const open = (name: string) => {
    activeDrawer.value = name
  }

  const close = () => {
    activeDrawer.value = null
  }

  const toggle = (name: string) => {
    activeDrawer.value = isOpen(name) ? null : name
  }

  const isOpen = (name: string) => {
    return activeDrawer.value === name
  }

  return { open, close, toggle, isOpen }
})
