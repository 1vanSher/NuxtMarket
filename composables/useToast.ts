import { ref } from 'vue'

const isVisible = ref(false)
const message = ref('')

const showToast = (text: string) => {
  message.value = text
  isVisible.value = true

  setTimeout(() => {
    isVisible.value = false
  }, 3000)
}

export const useToast = () => ({ isVisible, message, showToast })
