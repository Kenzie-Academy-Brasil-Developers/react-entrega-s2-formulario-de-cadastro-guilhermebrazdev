import { Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Approved from "../pages/Approved";

const Routes = () => {
  return (
    <Switch>
      {/*Página inicial Login */}
      <Route exact path="/">
        <Login />
      </Route>
      {/*Login Aprovado sucesso */}
      <Route path="/loginSuccess/:name">
        <Approved />
      </Route>
    </Switch>
  );
};

export default Routes;
