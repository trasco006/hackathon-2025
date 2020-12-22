import React from 'react'
import Card from '../Card/Card'

export class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        <div className="main-quote"/>
        <p className="main__quote">Даже за легкий «фак» в эфире нас отфакают по полной.<br/>
          Рок-волна (The Boat That Rocked)</p>
        <button className="main__add-request">
          <p className="main__add-request-text">Добавить заявку</p>
          <div className="main__add-request-border"/>
        </button>
        <div className="request-filter">
          <p>Все обращения <span className="request-filter__location">Минск</span></p>
        </div>
        <div className="elements">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    )
  }
}