import React from 'react'

export default class PopupWitchForm extends React.Component {
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
      <div className="popup popup_opened">
        <form name=""
              className={`popup__form popup__form-${this.props.name}`}>
          <button className="popup__close-button"
                  onClick={this.props.onClose}>X
          </button>
          <p className="popup__title">{this.props.title}</p>
          <input type="text"
                 maxLength={10}
                 className="popup__input"
                 placeholder="Введите город"
                 onInput={this.handleLocationName}/>
          <button className="popup__submit-button"
                  onClick={this.handleSubmit}>Сохранить
          </button>
        </form>
        <div className="popup__overlay"/>
      </div>
    )
  }
}