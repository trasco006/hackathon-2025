import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a className="header__logo logo"/>
        <a className="header__menu menu"/>
      </header>
    )
  }
}