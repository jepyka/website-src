import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'

import labels from 'data/labels'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { toggleLanguage, toggleNavigation } from 'actions'

class Header extends Component {
  render () {
    return (
      <Navbar className='navbar navbar-expand-md navbar-dark fixed-top bg-dark' color='faded' light expand='md'>
        <NavbarBrand href='/'>{labels.corporation.name[this.props.lang]}</NavbarBrand>
        <NavbarToggler onClick={() => this.props.toggleNavigation()} />
        <Collapse isOpen={this.props.navigation.open} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink
                style={{'cursor': 'pointer'}}
                onClick={() => this.props.toggleLanguage()}>
                {labels.language.toggle[this.props.lang]}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default connect(
  state => ({
    lang: state.app.lang,
    navigation: state.app.navigation
  }),
  { toggleLanguage,
    toggleNavigation }
)(Header)
