<template>
  <div>
    <BreadCrumb
      :items="[
        { name: 'Products', to: '/products' },
        { name: 'Add Product', to: '' },
      ]"
      :index="1"
    />
    <AddProductForm />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
