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

    <ul v-else class="products">
      <li v-for="product in products" :key="product.id">
        <p>{{ product.title }}</p>
        <p>{{ product.description }}</p>
        <div>
          <img :src="product.image" alt="" width="200px" height="200px" />
          <p>{{ product.price }} рублей</p>
        </div>
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

  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    width: 500px;
  }
</style>
