import React, { Component } from 'react'
import { connect } from 'react-redux'

import labels from 'data/labels'

class Contacts extends Component {
  render () {
    return (
      <p>{labels.navigation.contacts[this.props.lang]}</p>
    )
  }
}

export default
  connect(
    state => ({
      lang: state.app.lang
    })
  )(Contacts)
