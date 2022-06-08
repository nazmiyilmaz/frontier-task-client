export default function ({ store, req, redirect, $axios }) {
  // init auth
  store.dispatch('auth/initAuth', req)

  const token = store.getters['auth/token']
  if (!token) {
    return redirect(`/auth/login?redirect=${req.url}`)
  } else {
    $axios.setToken(token, 'Bearer')
  }
}
