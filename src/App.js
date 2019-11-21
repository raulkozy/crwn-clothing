import React from 'react';
import './App.css';
import  HomePage  from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import  ShopPage  from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/login/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";


class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser : null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {
        this.setState({
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
        },
        () => console.log(this.state)
        )
      })
    }
      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/shop'} component={ShopPage}/>
          <Route exact path={'/signIn'} component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
}

export default App;
