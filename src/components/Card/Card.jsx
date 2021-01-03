import React from 'react'

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h3 className="card__title">Улица, фонарь</h3>
        <p className="card__address">г.Москва, ул.Правды, д. 15</p>
        <div className="card__image"/>
        <p className="card__poem">Казалось мне, что все слова истёрты.</p>
        <div className="card__footer">
          <div className="card__status">
            <p className="card__status-text" >В обработке</p>
          </div>
          <button className="card__likes">
            <div className="card__like-ico"/>
            <p className="card__like">10</p>
          </button>
        </div>
      </div>
    )
  }
}