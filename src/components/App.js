import '../App.css';
import React from 'react'
import Header from './Header/Header'
import {Main} from "./Main/Main";
import AddNewRequest from "./AddNewRequest/AddNewRequest";
import AddressScreen from "./AddressScreen/AddressScreen";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddressScreenOpen: false,
      isAddRequestOpen: false,
      isMainScreenOpen: true,
      region: ''
    }
    this.closeAllScreens = this.closeAllScreens.bind(this)
    this.render = this.render.bind(this)
    this.handleAddressScreenOpen = this.handleAddressScreenOpen.bind(this)
    this.handleAddRegion = this.handleAddRegion.bind(this)
    this.handleAddRequestOpen = this.handleAddRequestOpen.bind(this)
  }

//закрытие попапа
  closeAllScreens() {
    this.setState({
      isAddressScreenOpen: false,
      isAddRequestOpen: false,
      isMainScreenOpen: true
    })
  }

//открытие окна ввода адреса
  handleAddressScreenOpen() {
    this.setState({
      isAddressScreenOpen: !this.state.isAddressScreenOpen,
      isMainScreenOpen: false,
      isAddRequestOpen: false
    })
  }

//открытие окна ввода заявки
  handleAddRequestOpen() {
    this.setState({
      isAddRequestOpen: !this.state.isAddRequestOpen,
      isAddressScreenOpen: false,
      isMainScreenOpen: false,
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
          {this.state.isMainScreenOpen === true ? <Main openAddressScreen={this.handleAddressScreenOpen}
                                                        openAddNewRequest={this.handleAddRequestOpen}
                                                        addRegion={this.state.region}/> : null}
          {this.state.isAddRequestOpen === true ? <AddNewRequest onClose={this.closeAllScreens}/> : null}
          {this.state.isAddressScreenOpen === true ? <AddressScreen onClose={this.closeAllScreens}
                                                                    addRegion={this.handleAddRegion}/> : null}
        </div>
      </div>
    );
  }
}