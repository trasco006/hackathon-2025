import React from 'react'

export default class AddNewRequest extends React.Component {

  render() {
    return (
      <form className="request-form">
        <div className="request-form__address">
          <p className="request-form__title">Введите адрес</p>
          <input type="text" className="request-form__input"/>
        </div>
        <div className="request-form__category-box">
          <p className="request-form__title">Выберите категорию</p>
          <div className="request-form__radio-container">
            <input name="Дороги" type="radio" value="Дороги"/>Дороги
            <input name="Дураки" type="radio" value=" Дураки"/>Дураки
            <input name="Что делать" type="radio" value="Что делать"/>Что делать
            <input name="Улица, фонарь" type="radio" value="Улица, фонарь"/>Улица, фонарь
            <input name="До водки охотники" type="radio" value="До водки охотники"/>До водки охотники
            <input name="Документы-бумажки" type="radio" value="Документы-бумажки"/>Документы-бумажки
            <input name="Братья наши меньшие" type="radio" value="Братья наши меньшие"/>Братья наши меньшие
          </div>
        </div>
      </form>
    )
  }
}