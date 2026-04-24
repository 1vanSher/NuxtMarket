<script setup lang="ts">
  const model = defineModel<string>()

  defineProps<{
    type?: string
    placeholder: string
    error?: string
    class: string
  }>()
</script>
<template>
  <div class="input-wrapper">
    <input v-model="model" :type="type" :placeholder="placeholder" :class="class" />
    <span v-if="error" class="input__error">{{ error }}</span>
  </div>
</template>
<style lang="scss">
  .input__error {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    font-size: var(--body-sm-fs);
    color: red;
  }

  .input-wrapper {
    position: relative;
  }

  .footer__input {
    width: 370px;
    padding-bottom: 8px;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: 27px;
    color: inherit;
    appearance: none;
    outline: none;
    background: transparent;
    border: none;
    box-shadow: none;

    @media (max-width: $bp-md) {
      max-width: 250px;
    }

    @media (max-width: $bp-sm) {
      max-width: 263px;
    }
  }
</style>
