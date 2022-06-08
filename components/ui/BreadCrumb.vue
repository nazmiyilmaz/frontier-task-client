<template>
  <nav class="breadcrumb is-medium" aria-label="breadcrumbs">
    <ul>
      <li
        v-for="(item, i) of items"
        :key="item.name"
        :class="i === index ? 'is-active subtitle is-5' : 'subtitle is-5'"
      >
        <nuxt-link :to="item.to">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    index: {
      type: Number,
      default: -1,
    },
  },
}
</script>

<style></style>
