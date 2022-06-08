<template>
  <div>
    <b-loading :active="isLoading" :is-full-page="true" :can-cancel="false" />
    <AppHeader />
    <div id="content">
      <div class="custom-container">
        <nuxt />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  middleware: ['auth'],
  async fetch() {
    try {
      this.$isLoading(true)
      await this.getMe()
      this.$isLoading(false)
    } catch (error) {
      this.error = error.response ? error.response.data.error : error.message
      this.$isLoading(false)
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
    }),
  },
  methods: {
    ...mapActions({
      getMe: 'auth/getMe',
    }),
  },
}
</script>

<style scoped></style>
