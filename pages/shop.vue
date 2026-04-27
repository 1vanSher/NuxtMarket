<script setup lang="ts">
  import BaseButton from '~/components/ui/BaseButton.vue'
  import { useGetAllProducts } from '~/composables/api/products/useGetAllProducts'

  const PRODUCTS_LIMIT = 10
  const { data: products, pending, error, refresh } = useGetAllProducts({ limit: PRODUCTS_LIMIT })
</script>
<template>
  <div>
    <div v-if="pending">Загрузка...</div>

    <div v-else-if="error">Произошла ошибка: {{ error.message }}</div>

    <ul v-else>
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>

    <BaseButton @click="refresh">Обновить данные</BaseButton>
  </div>
</template>
<style>
  .wrapper {
    display: flex;
    justify-content: center;
  }
</style>
