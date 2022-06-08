<template>
  <span></span>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  layout: 'empty',
  mounted() {
    this.logout()
    this.$router.push('/')
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
    }),
  },
}
</script>

<style></style>
