<template>
  <div class="product-card">
    <span class="p-image">
      <img :src="$publicURL(product.image)" />
    </span>
    <span class="p-title">{{ product.title }}</span>
    <span class="p-desc">{{ product.description }}</span>
    <div class="p-bottom">
      <span class="p-btn">
        <a style="background: #ff4f5a; color: white" @click="confirmRemove">
          <i class="uil uil-trash" />
        </a>
        <nuxt-link
          style="background: #d2e3f7; color: black"
          :to="`/products/${product._id}`"
        >
          <i class="uil uil-pen" />
        </nuxt-link>
      </span>
      <span class="p-price">
        <span>{{ product.price }}$</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions({
      removeProduct: 'products/removeProduct',
    }),
    confirmRemove() {
      this.$buefy.dialog.confirm({
        cancelText: 'No',
        confirmText: 'Yes',
        message: 'Are you sure to delete this product?',
        onConfirm: function () {
          this.remove()
        }.bind(this),
      })
    },
    async remove() {
      try {
        this.$isLoading(true)
        await this.removeProduct(this.product?._id)
        this.$isLoading(false)
      } catch (error) {
        this.$isLoading(false)
        const message = error.response
          ? error.response.data.error
          : error.message
        this.$buefy.dialog.alert(message)
      }
    },
  },
}
</script>

<style scoped lang="scss">
.product-card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid $main-border-color;
  display: flex;
  flex-direction: column;
}

.p-image {
  display: flex;
  overflow: hidden;
  height: 220px !important;
  min-height: 220px !important;
  max-height: 220px !important;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 16px;
  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.p-title {
  font-size: 1.2em;
  font-weight: 900;
  padding: 0 15px;
  box-sizing: border-box;
  color: black;
}

.p-desc {
  opacity: 0.7;
  font-size: 0.9em;
  padding: 0px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  box-sizing: border-box;
}

.p-bottom {
  margin-top: auto;
  background: none;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 5px 15px;
  justify-content: space-between;
}

.p-btn {
  display: flex;
  column-gap: 5px;
}

.p-btn a {
  border-radius: 7px;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 5px 7px;
  i {
    font-size: 1.1em;
  }
}

.p-price {
  display: flex;
  font-weight: 900;
  font-size: 2em;
  display: flex;
  justify-content: flex-end;
  color: black;
}
</style>
