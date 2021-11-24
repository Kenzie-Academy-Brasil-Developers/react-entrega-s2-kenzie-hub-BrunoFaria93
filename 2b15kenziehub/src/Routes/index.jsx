import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import DevPage from '../pages/DevPage'

const Routes = () => {
  const [auth, setAuth] = useState(false)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem("KenzieHub:user"))
    const token = localStorage.getItem("@KenzieHub:token")
    console.log(token)
    if (token) {
      return setAuth(true);
    }
    if (user){
      console.log(user)
    }
  }, []);


  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} />
      </Route>

      <Route path="/cadastro">
        <Cadastro auth={auth} />
      </Route>

      <Route path="/devpage">
        <DevPage auth={auth} setAuth={setAuth} />
      </Route>

    </Switch>
  );
};

export default Routes;