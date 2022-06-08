<template>
  <div>
    <div class="login-form-cont p-1">
      <LoginForm />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>

<style scoped lang="scss">
.login-form-cont {
  animation: anim 3s;
}
@keyframes anim {
  0% {
    transform: scale(0.5);
  }

  100% {
    transform: scale(1);
  }
}
</style>
