<template>
  <div>
    <div class="top-bar">
      <span class="page-title">
        <span> Products </span>
        <span style="text-indent: 10px; opacity: 0.4"> #{{ total }} </span>
      </span>
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
      total: 'products/total',
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

.button {
  width: 163px;
  height: 54px;
  background: #000000;
  border-radius: 28px;
  color: white;
}
</style>
