<template>
  <div class="bk-grid">
    <slot />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  async fetch() {
    try {
      this.$isLoading(true)
      await this.fetchProducts()
      this.$isLoading(false)
    } catch (error) {
      this.error = error.response ? error.response.data.error : error.message
      this.$isLoading(false)
    }
  },
  methods: {
    ...mapActions({
      fetchProducts: 'products/fetchProducts',
    }),
  },
}
</script>

<style scoped>
.bk-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 20px;
  column-gap: 20px;
  grid-auto-rows: 360px;
  height: 100%;
}
</style>
