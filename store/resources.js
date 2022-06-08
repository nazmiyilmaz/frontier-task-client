export const state = () => ({})

export const mutations = {}

export const actions = {
  async upload(_, file) {
    // formData instance
    const formData = new FormData()
    // append pp
    formData.append('file', file)
    // url
    const url = `/resources`
    const result = await this.$api.$post(url, formData)
    return result?.data
  },
}

export const getters = {}
