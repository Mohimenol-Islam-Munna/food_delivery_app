import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInFrom from "./components/LogIn/LogInFrom/LogInFrom";
import PasswordReset from "./components/LogIn/PasswordReset/PasswordReset";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurents } from "./store/actions/restaurent";
import DishType from "./components/DishType/DishType";
import Shop from "./components/Shop/Shop";

const App = () => {
  const { token, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurents());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/dish-type">
            <DishType></DishType>
          </Route>

          <Route exact path="/shop">
            <Shop></Shop>
          </Route>

          <Route exact path="/login">
            <LogInFrom></LogInFrom>
          </Route>
          <Route exact path="/passwordreset">
            <PasswordReset></PasswordReset>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
