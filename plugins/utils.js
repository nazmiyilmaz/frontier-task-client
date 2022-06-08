export default (context, inject) => {
  // GLOBAL FUNCTION FOR SWITCHING LOADING STATE
  const isLoading = function (val) {
    context.store.dispatch('isLoading', val)
  }
  inject('isLoading', isLoading)
  context.$isLoading = isLoading

  // GLOBAL FUNCTION FOR OPTIONAL CHAINING
  const safeGet = function (obj = {}, keyChain) {
    let val = obj || {}
    try {
      const keys = keyChain.split('.')
      for (const k of keys) {
        val = val[k]
        if (val === undefined || val === null) {
          return val
        }
      }
      return val
    } catch (e) {
      return val
    }
  }
  inject('safeGet', safeGet)

  // GLOBAL FUNCTION TO GET PUBLIC FILE URL
  const publicURL = function (name) {
    const base = process.env.SERVER_URL
    return `${base}/public/${name}`
  }
  inject('publicURL', publicURL)
  context.$publicURL = publicURL
}
