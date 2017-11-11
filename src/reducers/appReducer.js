import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default (state = initialState.app, action) => {
  switch (action.type) {
    case types.LOAD_LANGUAGE:
      return {
        ...state,
        lang: action.lang
      }
    case types.TOGGLE_LANGUAGE:
      let lang = state.lang === 'fra' ? 'eng' : 'fra'

      localStorage.setItem('JEPYKA_Language', lang)

      return {
        ...state,
        lang: lang
      }
    case types.TOGGLE_NAVIGATION:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          open: !state.navigation.open
        }
      }
    default:
      return state
  }
}
