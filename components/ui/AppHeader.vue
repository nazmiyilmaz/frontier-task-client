<template>
  <!--HEADER-->
  <div id="header">
    <!--BRAND-->
    <div id="brand" @click="$router.push('/')">
      <img src="/logo-hr.svg" />
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
      <!--PROFILE PICTURE-->
      <span id="pp" class="hr-item">
        <span class="profile-image">
          <img :src="$publicURL(pp)" />
        </span>
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
    }),
  },
}
</script>

<style scoped lang="scss">
.profile-image {
  width: 45px;
  height: 45px;
  display: flex;
  border-radius: 100%;
  overflow: hidden;
  border: 3px solid $primary-half-opacity;
  outline: 5px solid $primary-min-opacity;
  img {
    object-fit: cover;
  }
}
</style>
