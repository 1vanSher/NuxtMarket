<script setup lang="ts">
  import ProfileIcon from './icons/ProfileIcon.vue'
  import SearchIcon from './icons/SearchIcon.vue'
  import CartIcon from './icons/CartIcon.vue'

  const iconLinks = [
    { name: 'search', label: 'поиск', icon: SearchIcon },
    { name: 'cart', label: 'корзина', icon: CartIcon },
    { name: 'profile', label: 'профиль', icon: ProfileIcon },
  ]
</script>
<template>
  <div class="header-inner-content-icons">
    <button
      v-for="icon in iconLinks"
      :key="icon.name"
      :class="['header__icon-btn', `header__icon-${icon.name}`]"
    >
      <component :is="icon.icon" />
    </button>
  </div>
</template>
<style scoped lang="scss">
  .header-inner-content-icons {
    display: flex;
    gap: 29px;
    align-items: start;
    justify-content: end;
    color: inherit;
    cursor: pointer;
    background: none;
    border: none;
  }

  .header__icon-btn {
    all: unset;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .header__icon-search {
    display: block;

    @media (max-width: $bp-md) {
      display: none;
    }
  }

  .header__icon-profile {
    display: block;

    @media (max-width: $bp-md) {
      display: none;
    }
  }
</style>
