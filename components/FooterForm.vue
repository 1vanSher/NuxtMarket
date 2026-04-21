<script setup lang="ts">
  import { useEmailSubscription } from '~/composables/useEmailSubscription'

  import ArrowForm from './icons/ArrowForm.vue'
  import BaseInput from './BaseInput.vue'

  const { email, emailError, submitEmail } = useEmailSubscription()
</script>
<template>
  <form class="footer-form" @submit.prevent="submitEmail">
    <BaseInput
      v-model="email"
      :error="emailError"
      placeholder="Give an email, get the newsletter."
      type="text"
      class="footer__input"
    />
    <button type="submit" class="footer-button"><ArrowForm /></button>
  </form>
</template>
<style scoped lang="scss">
  .footer-button {
    all: unset;
    cursor: pointer;
  }

  .footer-form {
    display: flex;
    justify-content: end;
    width: 100%;
    max-width: 396px;
    border-bottom: 1px solid #000;
  }

  .footer-form :deep(.input__error) {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    font-size: 12px;
    color: red;
  }

  .footer-form :deep(.input-wrapper) {
    position: relative;
  }

  .footer-form :deep(.footer__input) {
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
  }
</style>
