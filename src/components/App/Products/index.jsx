import React, { Component } from 'react'
import { connect } from 'react-redux'

import labels from 'data/labels'

class Products extends Component {
  render () {
    return (
      <p>{labels.navigation.products[this.props.lang]}</p>
    )
  }
}

export default
  connect(
    state => ({
      lang: state.app.lang
    })
  )(Products)
