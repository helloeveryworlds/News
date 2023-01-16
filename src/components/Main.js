import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";

import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function Main(props) {
 const { isLoggedIn, handleLoggedIn } = props;

 const showLogin = () => {
   return isLoggedIn ? (
     <Redirect to="/home" />
   ) : (
     <Login handleLoggedIn={handleLoggedIn} />
   );
 };

 const showHome = () => {
  //如果成功就返回home，否则redirect到login
   return isLoggedIn ? <Home /> : <Redirect to="/login" />;
 };
 // exact render={showLogin} />定义根目录。
 return (
   <div className="main">
     <Switch>
       <Route path="/" exact render={showLogin} />
       <Route path="/login" render={showLogin} />
       <Route path="/register" component={Register} />
       <Route path="/home" render={showHome} />
     </Switch>
   </div>
 );
}

export default Main;