<script setup lang="ts">
  const model = defineModel<string>()

  defineProps<{
    type?: string
    placeholder: string
    error?: string
  }>()
</script>
<template>
  <div class="input-wrapper">
    <Input
      :type="type"
      :placeholder="placeholder"
      :v-model="model"
      :class="{ 'input--error': error }"
    />
    <span v-if="error" class="input__error">{{ error }}</span>
  </div>
</template>
