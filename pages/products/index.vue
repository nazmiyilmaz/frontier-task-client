<template>
  <div>
    <div class="top-bar">
      <span class="page-title">Products</span>
      <nuxt-link to="/products/add" class="button">Add Product</nuxt-link>
    </div>
    <ProductGrid>
      <ProductCard v-for="p of products" :key="p._id" :product="p" />
    </ProductGrid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'products/products',
    }),
  },
}
</script>

<style scoped lang="scss">
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
