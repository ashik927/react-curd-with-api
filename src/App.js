import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/HomePage/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddCase from './components/AddCase/AddCase';
import Form from './components/Form/Form';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUp from './components/Login/SignUp';
import HcdForm from './components/Form/HcdForm';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import LawyersLink from './components/LawyersLink/LawyersLink';
import HcdFormWithoutDistrict from './components/Form/HcdFormWithoutDistrict';
import JcdForm from './components/Form/JcdForm';
import TodaySearchListAd from './components/Features/TodaySearchListAd';
import TodaySearchListHcd from './components/Features/TodaySearchListHcd';
import AdFiles from './components/Features/Ad/AdFiles';
import HcdFiles from './components/Features/Hcd/HcdFiles';

import PostDetails from './components/LawyersLink/PostDetails';
import Products from './components/LexMall/Products';
import Cart from './components/LexMall/Cart';
import Checkout from './components/LexMall/Checkout';
import ProductDetails from './components/LexMall/ProductDetails';

import EditAd from './components/Features/Ad/EditAd';
import EditHcd from './components/Features/Hcd/EditHcd';
import Profile from './components/HomePage/Home/Profile';


export const userContext = createContext();


function App() {
  const [loggedInUser , setLoggedInUser]= useState({});
  return (
    <div>
      <br/>
      <br/>
      <userContext.Provider value={[loggedInUser , setLoggedInUser]}>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addcase">
            <AddCase></AddCase>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/form/:formName">
            <Form></Form>
          </PrivateRoute>
          <PrivateRoute path="/hcdform/:formName">
            <HcdForm></HcdForm>
          </PrivateRoute>
          <PrivateRoute path="/hcdforms/:formName">
            <HcdFormWithoutDistrict></HcdFormWithoutDistrict>
          </PrivateRoute>
          <Route path="/aboutus">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/lawyerslink">
            <LawyersLink></LawyersLink>
          </PrivateRoute>
          <PrivateRoute path="/jcdform">
            <JcdForm></JcdForm>
          </PrivateRoute>
          <PrivateRoute path="/todaysearchlistad">
            <TodaySearchListAd></TodaySearchListAd>
          </PrivateRoute>
          <PrivateRoute path="/todaysearchlisthcd">
            <TodaySearchListHcd></TodaySearchListHcd>
          </PrivateRoute>
          <PrivateRoute path="/ad-all-files">
            <AdFiles></AdFiles>
          </PrivateRoute>
          <PrivateRoute path="/hcd-all-files">
            <HcdFiles></HcdFiles>
          </PrivateRoute>

          <PrivateRoute path="/lawyers-link">
            <PostDetails></PostDetails>
          </PrivateRoute>
          <Route path="/lex-mall/products">
            <Products></Products>
          </Route>
          <Route path="/lex-mall/cart">
            <Cart></Cart>
          </Route>
          <Route path="/lex-mall/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/lex-mall/product-details">
            <ProductDetails></ProductDetails>
          </Route>

          <PrivateRoute path="/update-ad/:fileno">
            <EditAd></EditAd>
          </PrivateRoute>
          <PrivateRoute path="/update-hcd/:fileno">
            <EditHcd></EditHcd>
          </PrivateRoute>
          <PrivateRoute path="/Profile/Edit">
            <Profile></Profile>
          </PrivateRoute>
      </Switch>
     
    </Router>
    </userContext.Provider>

    </div>
  );
}

export default App;
