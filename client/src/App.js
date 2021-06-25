import React, {useState} from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/home/Home";
import Write from "./components/pages/Write/Write";
import SigninPage from "./components/pages/Signin/SigninPage";
import RegisterPage from "./components/pages/Register/RegisterPage";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(false);

  const handleUserSignin = (id) => {
    setUser(id)
  }
  const handleLogout = () => {
    setUser(false)
  }
  return (
    <Router>
      <TopBar user={user} logout={handleLogout}/>
      <Switch>
        <Route exact path="/">
          {user ? <Home user={user} /> : <RegisterPage handleUserSignin={handleUserSignin} />}
        </Route>
        <Route path="/register">
          <RegisterPage handleUserSignin={handleUserSignin} />
        </Route>
        <Route path="/signin">
          <SigninPage handleUserSignin={handleUserSignin} />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
