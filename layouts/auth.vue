<template>
  <div class="outer">
    <b-loading :active="isLoading" :is-full-page="true" :can-cancel="false" />
    <!--CONTENT-->
    <div class="inner">
      <nuxt />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  middleware: ['log'],
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
    }),
  },
}
</script>

<style scoped lang="scss">
.outer {
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #f2f2f6;
}

.inner {
  margin: auto;
  min-width: 450px;
  max-width: 600px;
}
</style>
