import '../App.css';
import React from 'react'
import Header from './Header/Header'
import {Main} from "./Main/Main";
import PopupWithForm from "./PopupWithForm/PopupWithForm";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddLocationPopupOpen: false,
      region: ''
    }
    this.closeAllPopup = this.closeAllPopup.bind(this)
    this.render = this.render.bind(this)
    this.handlePopupSelectRegionOpen = this.handlePopupSelectRegionOpen.bind(this)
    this.handleAddRegion = this.handleAddRegion.bind(this)
  }

//закрытие попапа
  closeAllPopup() {
    this.setState({
      isAddLocationPopupOpen: false
    })
  }

//открытие попапа
  handlePopupSelectRegionOpen() {
    this.setState({
      isAddLocationPopupOpen: !this.state.isAddLocationPopupOpen
    })
  }

//добавление региона в стейт
  handleAddRegion(name) {
    this.setState({
      region: name
    })

  }

  render() {
    return (<div className="App">
        <div className="page">
          <Header/>
          <Main openPopup={this.handlePopupSelectRegionOpen} region={this.state.region}/>
          {this.state.isAddLocationPopupOpen === true ? <PopupWithForm name={"add-location"}
                                                                       title={"Откуда вы?"}
                                                                       isOpen={this.state.isAddLocationPopupOpen}
                                                                       onClose={this.closeAllPopup}
                                                                       addRegion={this.handleAddRegion}/> : null}
        </div>
      </div>
    );
  }
}