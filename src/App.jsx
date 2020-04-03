import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Details from "./views/Details"
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
import "./App.css";
import { fetchUsers } from "./store/actionCreator";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/details/:i'>
          <Details />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
