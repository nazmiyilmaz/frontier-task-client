export const state = () => ({
  products: [],
  total: 0,
  product: null,
  query: {
    page: 1,
    limit: 50,
  },
})

export const mutations = {
  products(state, products) {
    state.products = products
  },
  total(state, total) {
    state.total = total
  },
  query(state, query) {
    state.query = { ...state.query, ...query }
  },
  product(state, product) {
    state.product = product
  },
}

export const actions = {
  async fetchProducts({ commit, state }) {
    const url = `/products`
    const result = await this.$api.$get(url, { params: state.query })
    commit('products', result?.data)
    commit('total', result?.total)
  },
  async getSingleProduct({ commit }, productId) {
    // url
    const url = `/products/${productId}`
    const result = await this.$api.$get(url)
    commit('product', result.data)
  },
  async addProduct({ dispatch }, payload) {
    // url
    const url = `/products`
    await this.$api.$post(url, payload)
    await dispatch('fetchProducts')
  },
  async updateProduct({ dispatch }, props) {
    const { productId, payload } = props
    // url
    const url = `/products/${productId}`
    await this.$api.$put(url, payload)
    await dispatch('fetchProducts')
  },
  async removeProduct({ dispatch }, productId) {
    // url
    const url = `/products/${productId}`
    await this.$api.$delete(url)
    await dispatch('fetchProducts')
  },
}

export const getters = {
  products(state) {
    return state.products || []
  },
  product(state) {
    return state.product
  },
  total(state) {
    return state.total
  },
  query(state) {
    return state?.query
  },
}
