import React from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/home/Home";
// import Posts from "./components/posts/Posts";
import RichEditor from "./components/RichEditor";
import SigninPage from "./components/pages/Signin/SigninPage";
import RegisterPage from "./components/pages/Register/RegisterPage";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          { user? <Home/> :<RegisterPage />}
        </Route>
        <Route path="/signin">
          <SigninPage />
        </Route>
        <Route path="/write">
          <RichEditor />
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;
