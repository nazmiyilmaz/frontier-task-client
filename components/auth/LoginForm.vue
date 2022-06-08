<template>
  <div class="card login-card">
    <div class="logo-cont">
      <img class="logo" src="/logo.svg" alt="storymental" />
      <span>Login</span>
    </div>

    <div v-if="error" class="error">
      <span> ERROR: {{ error }} </span>
    </div>

    <div class="my-3">
      <b-input
        v-model="username"
        icon="user"
        type="text"
        placeholder="Username"
      />
    </div>

    <div class="my-3">
      <b-input
        v-model="password"
        icon="key-skeleton"
        placeholder="Password"
        type="password"
        password-reveal
      />
    </div>

    <button class="button" expanded @click.prevent="send">Login</button>

    <nuxt-link class="button signup" to="/auth/signup"> Sign Up </nuxt-link>

    <div class="columns is-mobile pt-4">
      <div class="column is-narrow">
        <nuxt-link to="/auth/forgot-password"> Forgot password? </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      username: null,
      password: null,
      error: null,
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
    }),
    async send() {
      this.$isLoading(true)
      const props = {
        username: this.username,
        password: this.password,
      }
      try {
        await this.login(props)
        this.$isLoading(false)
        window.location.href = `/products`
      } catch (error) {
        this.error = error.response ? error.response.data.error : error.message
        this.$isLoading(false)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.login-card {
  padding: 30px 25px;
  border-radius: 25px;
  border: 1px solid $main-border-color;
  background: white;
}
.login-lb {
  text-align: center;
  font-size: 2.3em;
  font-weight: 900 !important;
  color: #000 !important;
}
.button {
  width: 100%;
  border-radius: 12px;
  margin-top: 10px;
  background: $primary;
  color: $white;
  height: 48px;
}

.app-name {
  text-align: center;
  font-size: 1.2em;
}

.error {
  color: $danger;
  text-align: center;
}

.signup {
  background: $dark;
}

.has-text-danger {
  background: #900604 !important;
  border-radius: 8px !important;
  color: #fff !important;
  padding: 8px 10px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
}

.logo-cont {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  row-gap: 20px;
  span {
    font-weight: 700;
    font-size: 2.5em;
  }
  .logo {
    width: 100%;
    image-rendering: -moz-crisp-edges;
  }
}
</style>
