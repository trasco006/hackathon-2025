import React from 'react'

export default class AddressScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    }
    this.handleLocationName = this.handleLocationName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.render = this.render.bind(this)
  }

  handleLocationName(evt) {
    this.setState({
      location: evt.target.value,
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addRegion(this.state.location)
    this.props.onClose()
  }

  render() {
    return (
      <div className="address-screen">
        <form name=""
              className={`address-screen__form`}>
          <button className="address-screen__close-button"
                  onClick={this.props.onClose}/>
          <p className="address-screen__title">Введите город</p>
          <input type="text"
                 maxLength={10}
                 className="address-screen__input"
                 placeholder="Введите город"
                 onInput={this.handleLocationName}/>
          <button className="address-screen__submit-button"
                  onClick={this.handleSubmit}>Отправить
          </button>
        </form>
        <div className="popup__overlay"/>
      </div>
    )
  }
}