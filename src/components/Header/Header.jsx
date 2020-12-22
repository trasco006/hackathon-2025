import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a className="header__menu menu"/>
        <a className="header__logo logo"/>
      </header>
    )
  }
}