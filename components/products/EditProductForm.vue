<template>
  <div class="p-outer">
    <div class="form-wr">
      <div class="p-image">
        <b-upload v-model="file" type="file" class="image-input">
          <img v-if="draft.image" :src="$publicURL(draft.image)" alt="" />
          <span v-else class="placeholder">
            <i class="uil uil-image" />
          </span>
        </b-upload>
      </div>

      <div class="fields">
        <div class="inline">
          <b-input
            v-model="draft.title"
            type="text"
            placeholder="Title"
            expanded
          />
          <b-input
            v-model="draft.price"
            type="number"
            placeholder="Price"
            expanded
          />
        </div>
        <b-input
          v-model="draft.description"
          placeholder="Description"
          type="textarea"
          expanded
          custom-class="p-ta"
        />
      </div>
    </div>

    <div class="btns">
      <button class="button" expanded @click.prevent="update">
        Save Changes
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      draft: {
        price: null,
        image: null,
        title: null,
        description: null,
      },
      file: null,
    }
  },
  async fetch() {
    try {
      this.$isLoading(true)
      await this.getSingleProduct(this.productId)
      this.load()
      this.$isLoading(false)
    } catch (error) {
      this.$isLoading(false)
    }
  },
  computed: {
    ...mapGetters({
      product: 'products/product',
    }),
    productId() {
      return this.$route.params.productId
    },
  },
  watch: {
    async file() {
      try {
        this.$isLoading(true)
        const id = await this.upload(this.file)
        this.draft.image = id
        this.$isLoading(false)
      } catch (error) {
        this.error = error.response ? error.response.data.error : error.message
        this.$isLoading(false)
      }
    },
  },
  methods: {
    ...mapActions({
      updateProduct: 'products/updateProduct',
      upload: 'resources/upload',
      getSingleProduct: 'products/getSingleProduct',
    }),
    async update() {
      try {
        this.$isLoading(true)
        const props = {
          productId: this.productId,
          payload: {
            title: this.draft.title,
            description: this.draft.description,
            image: this.draft.image,
            price: this.draft.price,
          },
        }
        await this.updateProduct(props)
        this.$isLoading(false)
        this.$router.push(`/products`)
      } catch (error) {
        this.error = error.response ? error.response.data.error : error.message
        this.$isLoading(false)
      }
    },
    load() {
      this.draft.title = this.product.title
      this.draft.description = this.product.description
      this.draft.image = this.product.image
      this.draft.price = this.product.price
    },
  },
}
</script>

<style scoped lang="scss">
.p-outer {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.button {
  padding: 0 40px;
  border-radius: 12px;
  background: $primary;
  color: $white;
  height: 52px;
}

.p-image {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    min-width: 300px;
    min-height: 300px;
    height: 300px;
    width: 300px;
    cursor: pointer;
    display: flex;
    border-radius: 16px;
    overflow: hidden;
    object-fit: contain;
    transition: 0.5s;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #dddde9;
  }
  .placeholder {
    min-width: 300px;
    min-height: 300px;
    height: 300px;
    width: 300px;
    cursor: pointer;
    border-radius: 16px;
    padding: 10px;
    background: #dddde9;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    i {
      font-size: 3em;
      color: white;
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

  .image-input {
    border-radius: 100%;
  }
}

.fields {
  height: 100%;
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  .inline {
    display: flex;
    column-gap: 8px;
  }
}

.form-wr {
  display: flex;
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px 0px;
}

.btns {
  display: flex;
  column-gap: 10px;
  justify-content: flex-end;
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
