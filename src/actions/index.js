import * as types from './actionTypes'
import { makeActionCreator } from './utilities'

export const loadLanguage = makeActionCreator(types.LOAD_LANGUAGE, 'lang')
export const toggleLanguage = makeActionCreator(types.TOGGLE_LANGUAGE)
export const toggleNavigation = makeActionCreator(types.TOGGLE_NAVIGATION)
