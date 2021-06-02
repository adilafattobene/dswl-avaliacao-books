import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import BooksContainer from "./components/Container/BooksContainer";
import DeleteContainer from "./components/Container/DeleteContainer";
import ChangeContainer from "./components/Container/ChangeContainer";
import IncludeContainer from "./components/Container/IncludeContainer";

export default function routes() {
  return (
    <Switch>
      <Redirect from="/" to="/consultar" exact />

      <Route path="/incluir">
        <IncludeContainer />
      </Route>

      <Route path="/alterar" exact>
        <ChangeContainer />
      </Route>

      <Route path="/deletar" exact>
        <DeleteContainer />
      </Route>

      <Route path="/consultar" exact>
        <BooksContainer />
      </Route>

      <Route render={() => <div>Página não encontrada</div>} />
    </Switch>
  );
}
