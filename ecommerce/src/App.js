import logo from './logo.svg';
import './App.css';
import Homepage from './components/pages/homepage/Homepage';
import './components/pages/homepage/Homepage.scss';
import Shop from './components/pages/shop/Shop';
import Header from './components/pages/Header/Header';
import Signinsignout from './components/pages/signinsignout/signinsignout';
import { auth } from './firebase/firebase.utils';
// import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, {Component} from 'react';
import { createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component  {
  constructor(){
    super()
    this.state = {
      currentUser : null
    }
  }

  unsubscribefromauth = null

  componentDidMount(){
    this.unsubscribefromauth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userref = await createUserProfileDocument(userAuth)

        userref.onSnapshot( snapShot =>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          } )
        } )
      }
      else{
        this.setState ( { currentUser: userAuth})
      }
      
    } )
    
  }
  componentWillUnmount(){
    this.unsubscribefromauth()
  }



  render(){
  return (
    <div className="App">
    <Header currentuser={this.state.currentUser} />
    <Router>
    <Routes>
    <Route path="/" element={<Homepage/ >} />
    <Route path="/shop" element={<Shop/ >} />
    <Route path="/signin" element={<Signinsignout/ >} />
    </Routes>
    </Router>
    </div>
  )
}
}

export default App;
