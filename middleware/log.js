export default function ({ store, redirect, $axios, req }) {
  // log user
  store.dispatch('auth/initAuth', req)
  const token = store.getters['auth/token']
  if (token) {
    $axios.setToken(token, 'Bearer')
    return redirect(`/products`)
  }
}
