import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";

export default function routes() {
  return (
    <Switch>
      <Redirect from="/" to="/consultar" exact />

      <Route path="/incluir">
        <p>incluir</p>
      </Route>

      <Route path="/alterar" exact>
        <p>alterar</p>
      </Route>

      <Route path="/deletar" exact>
        <p>deletar</p>
      </Route>

      <Route path="/consultar" exact>
        <p>consultar</p>
      </Route>

      <Route render={() => <div>Página não encontrada</div>} />
    </Switch>
  );
}
