import Cookie from 'js-cookie'

export const state = () => ({
  token: null,
  userId: null,
  username: null,
  me: null,
})

export const mutations = {
  // SET AUTH DATA
  authData(state, authData) {
    state.username = authData.username
    state.token = authData.token
    state.userId = authData.userId
  },
  // SET ME
  me(state, me) {
    state.me = me
  },
  // LOGOUT
  logout(state) {
    state.username = null
    state.token = null
  },
}

export const actions = {
  // GET ME
  async getMe({ commit }) {
    const url = '/auth/me'
    const result = await this.$api.$get(url)
    commit('me', result?.data)
  },
  // LOGIN
  async login({ commit }, authData) {
    const result = await this.$api.$post('/auth/login', authData)

    commit('authData', result.data)

    const { token, id, username } = result.data

    if (process.client) {
      localStorage.setItem('username', username)
      localStorage.setItem('jwt', token)
      localStorage.setItem('userId', id)
    }

    Cookie.set('username', username)
    Cookie.set('jwt', token)
    Cookie.set('userId', id)
  },

  // SIGNUP
  async signup({ commit }, payload) {
    // url
    const url = `/auth/signup`
    // post data
    await this.$api.$post(url, payload)
  },

  // LOGOUT
  logout({ commit }) {
    commit('logout')

    if (process.client) {
      localStorage.clear()
    }
    Cookie.remove('username')
    Cookie.remove('jwt')
    Cookie.remove('userId')
  },

  // INITIALIZE AUTH
  initAuth({ commit }, req) {
    if (!req) {
      return commit('authData', {
        username: localStorage.getItem('username'),
        token: localStorage.getItem('jwt'),
        userId: localStorage.getItem('userId'),
      })
    } else {
      if (!req.headers.cookie) {
        return
      }
      const cookies = req.headers.cookie.split(';')
      commit('authData', {
        username: extractCookie(cookies, 'username'),
        token: extractCookie(cookies, 'jwt'),
        userId: extractCookie(cookies, 'userId'),
      })
    }
  },
}

export const getters = {
  token(state) {
    return state.token
  },
  isLoggedIn(state) {
    return state.token
  },
  username(state) {
    return state.username
  },
  userId(state) {
    return state.userId
  },
  pp(state) {
    return state?.me?.pp
  },
  me(state) {
    return state.me
  },
}

const extractCookie = (cookies, key) => {
  const cookie = cookies.find((c) => c.trim().startsWith(`${key}=`))
  const value = cookie ? cookie.split('=')[1] : null
  return value
}
