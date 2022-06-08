<template>
  <div class="p-outer">
    <div class="form-wr">
      <div class="p-image">
        <b-upload v-model="file" type="file" class="image-input">
          <img v-if="image" :src="$publicURL(image)" alt="" />
          <span v-else class="placeholder">
            <i class="uil uil-image" />
          </span>
        </b-upload>
      </div>

      <div class="fields">
        <div class="inline">
          <b-input v-model="title" type="text" placeholder="Title" expanded />
          <b-input v-model="price" type="number" placeholder="Price" expanded />
        </div>
        <b-input
          v-model="description"
          placeholder="Description"
          type="textarea"
          expanded
          custom-class="p-ta"
        />
      </div>
    </div>

    <div class="btns">
      <button class="button" expanded @click.prevent="add">Add Product</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      price: null,
      image: null,
      file: null,
      title: null,
      description: null,
    }
  },
  watch: {
    async file() {
      try {
        this.$isLoading(true)
        const id = await this.upload(this.file)
        this.image = id
        this.$isLoading(false)
      } catch (error) {
        this.error = error.response ? error.response.data.error : error.message
        this.$isLoading(false)
      }
    },
  },
  methods: {
    ...mapActions({
      addProduct: 'products/addProduct',
      upload: 'resources/upload',
    }),
    async add() {
      try {
        this.$isLoading(true)
        const payload = {
          title: this.title,
          description: this.description,
          image: this.image,
          price: this.price,
        }
        await this.addProduct(payload)
        this.$isLoading(false)
        this.$router.push(`/products`)
      } catch (error) {
        this.error = error.response ? error.response.data.error : error.message
        this.$isLoading(false)
      }
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
    border: 4px solid $primary-half-opacity;
    outline: 5px solid $primary-min-opacity;
    overflow: hidden;
    object-fit: contain;
    transition: 0.5s;
    justify-content: center;
    align-items: center;
  }
  .placeholder {
    min-width: 300px;
    min-height: 300px;
    height: 300px;
    width: 300px;
    cursor: pointer;
    border-radius: 16px;
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
