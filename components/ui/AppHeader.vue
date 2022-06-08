<template>
  <!--HEADER-->
  <div id="header">
    <!--BRAND-->
    <div id="brand" @click="$router.push('/')">
      <img src="/logo.svg" />
    </div>

    <!--BURGER-->
    <span id="burger">
      <i class="uil uil-bars" />
    </span>

    <!--MENU-->
    <div id="header-menu">
      <span class="menu-item">
        <nuxt-link to="/products" class="menu-item-lb">Products</nuxt-link>
      </span>
      <span id="others" class="menu-item">
        <a class="menu-item-lb">Others</a>
        <span id="menu-dd-items">
          <nuxt-link to="/about" class="menu-dd-item">About</nuxt-link>
          <nuxt-link to="pricing" class="menu-dd-item">Contact</nuxt-link>
        </span>
      </span>
    </div>

    <!--HEADER RIGHT-->
    <div id="header-right">
      <span class="profile-image">
        <img :src="$publicURL(pp)" />
        <span>{{ firstName }} {{ lastName }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      userId: 'auth/userId',
      pp: 'auth/pp',
      me: 'auth/me',
    }),
    firstName() {
      return this.me?.firstName
    },
    lastName() {
      return this.me?.lastName
    },
  },
}
</script>

<style scoped lang="scss">
.profile-image {
  height: 45px;
  display: flex;
  padding: 3px 10px;
  border: 1px solid $main-border-color;
  border-radius: 12px;
  align-items: center;
  column-gap: 5px;
  font-size: 0.9em;
  font-weight: 500;
  color: black;
  img {
    width: 32px;
    height: 32px;
    border-radius: 100%;
    object-fit: cover;
  }
}
</style>
