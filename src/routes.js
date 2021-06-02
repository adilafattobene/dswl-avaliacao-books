import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import BooksContainer from './components/Container/BooksContainer'
import DeleteContainer from "./components/Container/DeleteContainer";

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
        <DeleteContainer/>
      </Route>

      <Route path="/consultar" exact>
        <BooksContainer/>
      </Route>

      <Route render={() => <div>Página não encontrada</div>} />
    </Switch>
  );
}
