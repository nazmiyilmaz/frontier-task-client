<template>
  <span
    :class="{
      'profile-image': true,
      'is-hoverable': hover,
      'is-light': light,
      'is-active': active,
    }"
    :style="{
      width: size,
      height: size,
      'border-width': `${border}px`,
      'outline-width': `${border}px`,
    }"
    @click="hover ? $emit('click') : null"
  >
    <img :src="$ppURL(id)" />
  </span>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '36px',
    },
    hover: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Number,
      default: 2,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped lang="scss">
.profile-image {
  display: flex;
  border: 2px solid rgba(120, 120, 120, 0.3);
  outline: 2px solid rgba(120, 120, 120, 0.15);
  border-radius: 100%;
  overflow: hidden;
  box-sizing: border-box;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.is-hoverable {
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transition: 0.4s;
    border-color: $primary-half-opacity;
    outline-color: $primary-min-opacity;
  }
}

.is-light {
  border-color: rgba(255, 255, 255, 0.3);
  outline-color: rgba(255, 255, 255, 0.2);

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
    outline-color: rgba(255, 255, 255, 0.3);
  }
}

.is-active {
  border-color: rgba(255, 138, 65, 0.7);
  outline-color: rgba(255, 138, 65, 0.45);
  &:hover {
    border-color: rgba(255, 138, 65, 0.7);
    outline-color: rgba(255, 138, 65, 0.45);
  }
}
</style>
