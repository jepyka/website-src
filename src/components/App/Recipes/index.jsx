import React, { Component } from 'react'
import { connect } from 'react-redux'

import labels from 'data/labels'

class Recipes extends Component {
  render () {
    return (
      <p>{labels.navigation.recipes[this.props.lang]}</p>
    )
  }
}

export default
  connect(
    state => ({
      lang: state.app.lang
    })
  )(Recipes)
