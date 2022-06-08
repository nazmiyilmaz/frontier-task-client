<template>
  <b-pagination
    v-model="current"
    :total="total"
    :range-before="3"
    :range-after="3"
    order="is-centered"
    :simple="true"
    :per-page="limit"
    size="is-small"
    icon-prev="angle-left"
    icon-next="angle-right"
  >
  </b-pagination>
</template>

<script>
export default {
  model: {
    prop: 'page',
    event: 'navigate',
  },
  props: {
    limit: {
      type: Number,
      default: 20,
    },
    total: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      current: this.page,
    }
  },
  watch: {
    current(newVal) {
      if (newVal) this.$emit('navigate', newVal)
    },
  },
}
</script>

<style scoped>
* {
  color: rgb(92, 88, 88);
}
</style>
