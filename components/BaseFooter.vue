<script setup lang="ts">
  import BaseInput from './BaseInput.vue'
  import ProfileIcon from './icons/ProfileIcon.vue'
  import { ref } from 'vue'

  const footerLinks = [
    { label: 'CONTACT', to: '/shop' },
    { label: 'TERMS OF SERVICES', to: '/blog' },
    { label: 'SHIPPING AND RETURNS', to: '/our-story' },
  ]

  const footerIcons = [
    { id: 'instagram', icon: ProfileIcon, to: '/instagram' },
    { id: 'facebook', icon: ProfileIcon, to: '/facebook' },
  ]

  const email = ref('')
  const emailError = ref('')
</script>

<template>
  <footer class="footer">
    <div class="footer__section footer__section--top">
      <nav class="footer__nav">
        <NuxtLink v-for="link in footerLinks" :key="link.to" :to="link.to" class="footer__nav-link">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <form class="footer__form">
        <BaseInput
          v-model="email"
          :error="emailError"
          placeholder="Give an email, get the newsletter."
          class="footer__input"
        />
        <button type="submit" class="footer__button">Subscribe</button>
      </form>
    </div>

    <div class="footer__section footer__section--bottom">
      <div class="footer__policy">
        © 2021 Shelly.
        <NuxtLink to="/terms" class="footer__policy-link">Terms of use</NuxtLink>
        and
        <NuxtLink to="/privacy" class="footer__policy-link">privacy policy.</NuxtLink>
      </div>

      <div class="footer__icons">
        <NuxtLink
          v-for="link in footerIcons"
          :key="link.id"
          :to="link.to"
          class="footer__icon-link"
        >
          <component :is="link.icon" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
