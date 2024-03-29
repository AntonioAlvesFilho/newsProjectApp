import Cookie from 'js-cookie'
const TOKEN_NAME = 'token_todo'

export default {
  setToken(token) {
    Cookie.set(TOKEN_NAME, token, { expires: 30 })
  },

  getToken() {
    return Cookie.get(TOKEN_NAME)
  },

  removeToken() {
    Cookie.remove(TOKEN_NAME)
  }
}
