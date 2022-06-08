export const state = () => ({
  isLoading: false,
})

export const mutations = {
  isLoading(state, val) {
    state.isLoading = val
  },
}

export const actions = {
  isLoading({ commit }, val) {
    commit('isLoading', val)
  },
}

export const getters = {
  isLoading(state) {
    return state.isLoading
  },
}
