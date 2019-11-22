import React from 'react';
import './App.css';
import  HomePage  from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import  ShopPage  from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/login/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {
        setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
        })
      })
    }
    
    setCurrentUser(userAuth)
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/shop'} component={ShopPage}/>
          <Route exact path={'/signIn'} component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
