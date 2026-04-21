<script setup lang="ts">
  import TwitterIcon from './icons/TwitterIcon.vue'
  import FacebookIcon from './icons/FacebookIcon.vue'
  import InstagramIcon from './icons/InstagramIcon.vue'

  const footerIcons = [
    { id: 'instagram', icon: InstagramIcon, to: '/instagram' },
    { id: 'facebook', icon: FacebookIcon, to: '/facebook' },
    { id: 'twitter', icon: TwitterIcon, to: '/twitter' },
  ]
</script>
<template>
  <div class="footer-icons">
    <NuxtLink v-for="link in footerIcons" :key="link.id" :to="link.to" class="footer__icon-link">
      <component :is="link.icon" />
    </NuxtLink>
  </div>
</template>
<style scoped lang="scss">
  .footer-icons {
    display: flex;
    gap: 30px;
  }
</style>
