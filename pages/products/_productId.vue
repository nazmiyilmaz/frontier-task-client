<template>
  <div>
    <BreadCrumb
      :items="[
        { name: 'Products', to: '/products' },
        { name: title, to: '' },
      ]"
      :index="1"
    />
    <EditProductForm />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      product: 'products/product',
    }),
    title() {
      return this.product?.title
    },
  },
}
</script>

<style></style>
