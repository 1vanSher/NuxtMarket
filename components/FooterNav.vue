<script setup lang="ts">
  const footerLinks = [
    { label: 'CONTACT', to: '/shop' },
    { label: 'TERMS OF SERVICES', to: '/blog' },
    { label: 'SHIPPING AND RETURNS', to: '/our-story' },
  ]
</script>
<template>
  <nav class="footer-nav">
    <NuxtLink v-for="link in footerLinks" :key="link.to" :to="link.to" class="footer-nav-link">
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>
<style scoped lang="scss">
  .footer-nav {
    display: flex;
    gap: 40px;
  }

  .footer-nav-link {
    font-size: var(--body-lg-fs);
    line-height: var(--body-lg-lh);
    color: var(--dark-gray);
    text-decoration: none;
  }
</style>
