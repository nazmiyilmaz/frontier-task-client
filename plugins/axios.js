export default function ({ $axios, store }, inject) {
  const api = $axios.create()
  api.setBaseURL(process.env.SERVER_URL)
  inject('api', api)
  api.onRequest(() => {
    const token = store.getters['auth/token']
    api.setToken(token, 'Bearer')
  })
}
