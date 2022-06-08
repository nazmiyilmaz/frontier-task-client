<template>
  <div>
    <b-loading :active="isLoading" :is-full-page="true" :can-cancel="false" />
    <AppHeader />
    <div id="content">
      <nuxt />
    </div>
    <PageUpButton />
    <AppFooter />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  middleware: ['auth-only'],
  async fetch() {
    if (this.isLoggedIn) {
      await this.fetchMe()
      await this.fetchNotifications('page=1&limit=5')
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'isLoading',
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  mounted() {
    window.$initLayout()
  },
  methods: {
    ...mapActions({
      fetchMe: 'auth/fetchMe',
      fetchNotifications: 'notifications/fetchNotifications',
    }),
  },
}
</script>

<style scoped>
#content {
  display: block;
}
</style>
