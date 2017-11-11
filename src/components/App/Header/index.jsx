import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Link,
  withRouter
} from 'react-router-dom'
import './styles.css'

import labels from 'data/labels'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { toggleLanguage, toggleNavigation } from 'actions'

class Header extends Component {
  render () {
    return (
      <Navbar className='fixed-top' color='faded' light expand='md'>
        <NavbarBrand tag={Link} to='/company'>{labels.corporation.name[this.props.lang]}</NavbarBrand>
        <NavbarToggler onClick={() => this.props.toggleNavigation()} />
        <Collapse isOpen={this.props.navigation.open} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink tag={Link} to='/products'>{labels.navigation.products[this.props.lang]}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/company'>{labels.navigation.company[this.props.lang]}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/recipes'>{labels.navigation.recipes[this.props.lang]}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/contacts'>{labels.navigation.contacts[this.props.lang]}</NavLink>
            </NavItem>
          </Nav>
          <Nav className='ml-auto tools' navbar>
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

export default
  withRouter(
    connect(
      state => ({
        lang: state.app.lang,
        navigation: state.app.navigation
      }),
      { toggleLanguage,
        toggleNavigation }
    )(Header)
  )
