<script setup lang="ts">
  import { useDrawer } from '~/composables/useDrawer'
  import HeaderIcon from './icons/HeaderIcon.vue'
  import Logo from './icons/Logo.vue'
  import HeaderLine from './icons/HeaderLine.vue'

  const { isOpen, close, toggle } = useDrawer()

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Blog', to: '/blog' },
    { label: 'Our Story', to: '/our-story' },
  ]

  const navLinksMobile = [
    { label: 'Shop', to: '/shop' },
    { label: 'Blog', to: '/blog' },
    { label: 'Our Story', to: '/our-story' },
    { label: 'Contact', to: '/contact' },
    { label: 'Terms Of Services', to: '/terms-of-services' },
    { label: 'Shipping And Returns', to: '/shipping-and-returns' },
  ]

  const navAccount = [
    { label: 'My Account', to: '/account', icon: 'profile' },
    { label: 'Logout', to: '/logout', icon: 'logout' },
  ] as const

  const iconLinks = [
    { name: 'search', label: 'поиск' },
    { name: 'cart', label: 'корзина' },
    { name: 'profile', label: 'профиль' },
  ] as const
</script>
<template>
  <header class="header">
    <div class="header__inner">
      <NuxtLink to="/" class="header__logo"><Logo /></NuxtLink>
      <div class="header__content">
        <nav class="header__nav">
          <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="header__nav-link">
            {{ link.label }}
          </NuxtLink>
        </nav>
        <span class="header__span"><HeaderLine /></span>
        <div class="header__icons">
          <button
            v-for="icon in iconLinks"
            :key="icon.name"
            :class="['header__icon-btn', `header__icon-${icon.name}`]"
          >
            <HeaderIcon :name="icon.name" />
          </button>
        </div>
      </div>
      <button class="header__burger" aria-label="Открыть меню" @click="toggle">
        <HeaderIcon :name="isOpen ? 'burger-close' : 'burger'" />
      </button>
    </div>
  </header>
  <DrawerMenu :is-open="isOpen" @close="close">
    <div class="search">
      <HeaderIcon :size="12" name="search-mobile" class="search__icon" />
      <input type="text" class="mobile-nav__input" placeholder="Search" />
    </div>

    <nav class="mobile-nav">
      <NuxtLink
        v-for="link in navLinksMobile"
        :key="link.to"
        :to="link.to"
        class="mobile-nav__link"
      >
        {{ link.label }}
      </NuxtLink>
      <hr class="mobile-nav__divider" />
      <NuxtLink v-for="link in navAccount" :key="link.to" :to="link.to" class="mobile-nav__link">
        <HeaderIcon :name="link.icon" />
        {{ link.label }}
      </NuxtLink>
    </nav>
  </DrawerMenu>
</template>

<style scoped lang="scss">
  .header {
    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1200px;
      height: 64px;
      padding: 0 24px;
      margin: 0 auto;

      @media (width <= 425px) {
        max-width: 320px;
        height: 48px;
        padding: 0 16px;
      }
    }

    &__logo {
      font-size: 20px;
      font-weight: 700;
      color: inherit;
      letter-spacing: 0.1em;
      text-decoration: none;

      @media (width <= 425px) {
        height: 36px;
      }
    }

    &__logo svg {
      width: 120px;
      height: 40px;

      @media (width <= 425px) {
        width: 99px;
        height: 36px;
      }
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    @media (width <= 425px) {
      padding-right: 36px;
    }

    &__span {
      padding: 0 48px;

      @media (width <= 425px) {
        display: none;
      }
    }

    &__nav {
      display: flex;
      gap: 64px;

      @media (width <= 425px) {
        display: none;
      }

      &-link {
        font-size: 14px;
        color: inherit;
        text-decoration: none;
      }
    }

    &__burger {
      display: none;
      color: inherit;
      cursor: pointer;
      background: none;
      border: none;

      @media (width <= 425px) {
        position: absolute;
        top: 16px;
        left: 87%;
        display: flex;
      }
    }

    &__icons {
      display: flex;
      gap: 29px;
      align-items: start;
      justify-content: end;
      color: inherit;
      cursor: pointer;
      background: none;
      border: none;
    }

    &__icon-btn {
      all: unset;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    &__icon-search {
      display: block;

      @media (width <= 425px) {
        display: none;
      }
    }

    &__icon-profile {
      display: block;

      @media (width <= 425px) {
        display: none;
      }
    }
  }

  .search {
    position: relative;
    display: flex;
    align-items: center;

    &__icon {
      position: absolute;
      top: 15%;
      left: 10px;
      color: #999;
      pointer-events: none;
    }
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &__link {
      display: flex;
      gap: 12px;
      align-items: center;
      font-size: 20px;
      color: inherit;
      text-decoration: none;
    }

    &__divider {
      margin: 0;
      border: none;
      border-top: 1px solid #efefef;
    }

    &__input {
      width: 100%;
      height: 32px;
      padding-left: 30px;
      margin-bottom: 39px;
      font-size: 14px;
      outline: none;
      background-color: #efefef;
      border: 1px solid #efefef;
      border: none;
      border-radius: 4px;
    }
  }
</style>
