<template>
  <div class="card login-card">
    <span class="brand">
      <img src="/logo-hr.svg" alt="storymental" />
    </span>

    <div v-if="error" class="error">
      <span> ERROR: {{ error }} </span>
    </div>

    <div class="form-wr">
      <div class="pp">
        <b-upload v-model="file" type="file" class="pp-input">
          <img v-if="pp" :src="$publicURL(pp)" alt="" />
          <span v-else class="placeholder">
            <i class="uil uil-user" />
          </span>
        </b-upload>
      </div>

      <div class="fields">
        <span class="inline">
          <b-input
            v-model="firstName"
            icon="paragraph"
            type="text"
            placeholder="First Name"
            expanded
          />
          <b-input
            v-model="lastName"
            icon="paragraph"
            type="text"
            placeholder="Last Name"
            expanded
          />
        </span>
        <b-input
          v-model="username"
          icon="user"
          type="text"
          placeholder="Username"
          expanded
        />
        <b-input
          v-model="password"
          icon="key-skeleton"
          placeholder="Password"
          type="password"
          password-reveal
          expanded
        />
      </div>
    </div>

    <button class="button" expanded @click.prevent="send">Sign Up</button>

    <nuxt-link class="button signup" to="/auth/login">
      Return to Login
    </nuxt-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      pp: null,
      file: null,
      firstName: null,
      lastName: null,
      username: null,
      password: null,
      error: null,
    }
  },
  watch: {
    async file() {
      try {
        this.$isLoading(true)
        const id = await this.upload(this.file)
        this.pp = id
        this.$isLoading(false)
      } catch (error) {
        this.error = error.response ? error.response.data.error : error.message
        this.$isLoading(false)
      }
    },
  },
  methods: {
    ...mapActions({
      signup: 'auth/signup',
      upload: 'resources/upload',
    }),
    async send() {
      try {
        this.$isLoading(true)
        const payload = {
          username: this.username,
          password: this.password,
          firstName: this.firstName,
          lastName: this.lastName,
          pp: this.pp,
        }
        await this.signup(payload)
        this.$isLoading(false)
        window.location.href = `/auth/login`
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
  padding: 35px 30px;
  background: rgb(255, 255, 255);
  border-radius: 24px;
}

.button {
  width: 100%;
  border-radius: 12px;
  margin-top: 10px;
  background: $primary;
  color: $white;
  height: 48px;
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

.pp {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    cursor: pointer;
    display: flex;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 4px solid $primary-half-opacity;
    outline: 5px solid $primary-min-opacity;
    overflow: hidden;
    object-fit: cover;
    transition: 0.5s;
  }
  .placeholder {
    cursor: pointer;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    border: 6px solid rgba(0, 0, 0, 0.05);
    outline: 6px solid rgba(0, 0, 0, 0.02);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    i {
      font-size: 3em;
    }
  }

  img,
  .placeholder {
    &:hover {
      transition: 0.5s;
      border-color: $primary-half-opacity;
      outline-color: $primary-min-opacity;
    }
  }

  .pp-input {
    border-radius: 100%;
  }
}

.fields {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  .inline {
    display: flex;
    column-gap: 8px;
  }
}

.brand {
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 60%;
  }
}

.form-wr {
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px 0px;
}

@media (max-width: 1000px) {
  .form-wr {
    flex-direction: column;
  }
  .fields {
    max-width: unset;
  }
}
</style>
