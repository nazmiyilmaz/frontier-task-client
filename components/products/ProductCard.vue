<template>
  <div class="product-card">
    <span class="p-image">
      <img :src="$publicURL(product.image)" />
    </span>
    <span class="p-title">{{ product.title }}</span>
    <span class="p-desc">{{ product.description }}</span>
    <div class="p-bottom">
      <span class="p-btn">
        <a>
          <i class="uil uil-trash" />
          <span>Remove</span>
        </a>
      </span>
      <span class="p-price">
        <span>{{ product.price }}$</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
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
  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.p-title {
  font-size: 1.5em;
  font-weight: 700;
  text-indent: 10px;
  box-sizing: border-box;
}

.p-desc {
  font-size: 0.9em;
  padding: 0px 10px;
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
  padding: 5px 10px;
  justify-content: space-between;
}

.p-btn {
  border: 1px solid $main-border-color;
  border-radius: 12px;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 6px;
  padding-right: 14px;
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
}
</style>
