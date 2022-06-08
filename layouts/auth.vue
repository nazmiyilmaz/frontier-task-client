<template>
  <div class="outer">
    <b-loading :active="isLoading" :is-full-page="true" :can-cancel="false" />
    <!--STAR ANIMATION-->
    <div class="stars-outer">
      <div id="stars-sky" />
    </div>
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
  mounted() {
    window.$stars()
  },
}
</script>

<style scoped lang="scss">
.stars-outer {
  position: absolute;
}

.outer {
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.inner {
  margin: auto;
  min-width: 450px;
  max-width: 600px;
}
</style>
