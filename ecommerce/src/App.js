import logo from './logo.svg';
import './App.css';
import Homepage from './components/pages/homepage/Homepage';
import './components/pages/homepage/Homepage.scss';
import Shop from './components/pages/shop/Shop';
import Header from './components/pages/Header/Header';
import Signinsignout from './components/pages/signinsignout/signinsignout';
import { auth } from './firebase/firebase.utils';
import { Routes ,Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, {Component} from 'react';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user_selectors';
import { setCurrentUser } from './redux/user/user.actions';
import Checkout from './components/pages/checkout/checkout';

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
    <Routes>
    <Route exact path="/" element={<Homepage/ >} />
    <Route exact path="/shop" element={<Shop/ >} />
    <Route exact path="/signin" element={<Signinsignout/ >} />
    <Route exact path="/checkout" element={<Checkout/ >} />
    </Routes>
    </div>
  )
}
}

 const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
 })  

  const mapDispatchToProps =  dispatch  => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
 })


export default App;
