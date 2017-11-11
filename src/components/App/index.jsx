import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import './App.css'

import Header from 'components/App/Header/'
import Products from 'components/App/Products/'
import Company from 'components/App/Company/'
import Recipes from 'components/App/Recipes/'
import Contacts from 'components/App/Contacts/'

import { loadLanguage } from 'actions'

class App extends Component {
  componentWillMount () {
    this.props.loadLanguage(
      localStorage.getItem('JEPYKA_Language') || 'fra'
    )
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Products} />
          <Route exact path='/products' render={() => {
            return (this.props.lang === 'eng')
            ? <Products />
            : <Redirect to={`/produits`} />
          }} />
          <Route exact path='/produits' render={() => {
            return (this.props.lang === 'eng')
            ? <Redirect to={`/products`} />
            : <Products />
          }} />
          <Route exact path='/company' render={() => {
            return (this.props.lang === 'eng')
            ? <Company />
            : <Redirect to={`/compagnie`} />
          }} />
          <Route exact path='/compagnie' render={() => {
            return (this.props.lang === 'eng')
            ? <Redirect to={`/company`} />
            : <Company />
          }} />
          <Route exact path='/recipes' render={() => {
            return (this.props.lang === 'eng')
            ? <Recipes />
            : <Redirect to={`/recettes`} />
          }} />
          <Route exact path='/recettes' render={() => {
            return (this.props.lang === 'eng')
            ? <Redirect to={`/recipes`} />
            : <Recipes />
          }} />
          <Route exact path='/contacts' render={() => {
            return (this.props.lang === 'eng')
            ? <Contacts />
            : <Redirect to={`/coordonnées`} />
          }} />
          <Route exact path='/coordonnées' render={() => {
            return (this.props.lang === 'eng')
            ? <Redirect to={`/contacts`} />
            : <Contacts />
          }} />
          <Route path='/*' render={() => {
            return (this.props.lang === 'eng')
            ? <Redirect to={`/produits`} />
            : <Redirect to={`/products`} />
          }} />
        </Switch>
      </div>
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
