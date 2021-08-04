import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import SignIn from "./components/SignIn/SignIn";
import TopBar from "./components/TopBar/TopBar";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
