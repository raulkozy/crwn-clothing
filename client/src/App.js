import React, { useEffect, lazy, Suspense } from 'react';
// import './App.css';

import { GlobalStyles } from "./global.styles";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './components/header/header.component';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentuser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";

const ShopPage = lazy(() => import('./pages/shop/shop.component'));

const SignInAndSignUpPage = lazy(() => import('./pages/login/sign-in-and-sign-up.component'));
const CheckoutPage = lazy( () => import('./pages/checkout/checkout.component')) ;

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div >
      <Header />
      <GlobalStyles />
      <Switch>
        <Suspense fallback={<div>...LOADING</div>}>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/shop'} component={ShopPage} />
        <Route exact path={'/signIn'} render={() => currentUser ? (<Redirect to="" />) : (<SignInAndSignUpPage />)} />
        <Route exact path={'/checkout'} component={CheckoutPage} />
        </Suspense>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
})

const mapDispatchToprops = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToprops)(App);
