import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import './App.css'
import Header from 'components/App/Header/'
import { loadLanguage } from 'actions'

class App extends Component {
  componentWillMount () {
    this.props.loadLanguage(
      localStorage.getItem('JEPYKA_Language') || 'fra'
    )
  }

  render () {
    return (
      <Header />
    )
  }
}

export default
  withRouter(
    connect(
      state => ({
        lang: state.app.lang
      }),
      { loadLanguage }
    )(App)
  )
