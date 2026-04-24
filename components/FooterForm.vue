<script setup lang="ts">
  import { useEmailSubscription } from '~/composables/useEmailSubscription'

  import ArrowForm from './icons/ArrowForm.vue'
  import BaseInput from './BaseInput.vue'

  const { email, emailError, submitEmail } = useEmailSubscription()

  defineOptions({
    inheritAttrs: false,
  })
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
  <label class="footer-form__checkbox-label">
    <input type="checkbox" class="footer-form__checkbox" />
    i agree to the website's terms and conditions
  </label>
</template>
<style scoped lang="scss">
  .footer-button {
    all: unset;
    height: 30px;
    cursor: pointer;
  }

  .footer-button svg {
    @media (max-width: $bp-sm) {
      width: 15px;
    }
  }

  .footer-form {
    display: flex;
    justify-content: end;
    order: 1;
    width: 100%;
    max-width: 396px;
    border-bottom: 1px solid #000;

    @media (max-width: $bp-md) {
      max-width: 280px;
      height: 38px;
    }

    @media (max-width: $bp-sm) {
      box-sizing: border-box;
      justify-content: space-between;
      width: 100%;
      max-width: 383px;
      height: 26px;
      margin: 0 auto;
      font-size: var(--body-sm-fs);
    }
  }

  .footer-form__checkbox-label {
    display: none;
    gap: 8px;
    align-items: center;
    margin-top: 24px;

    @media (max-width: $bp-sm) {
      display: flex;
      gap: 0;
      width: 288px;
      font-size: var(--body-sm-fs);
    }
  }
</style>
