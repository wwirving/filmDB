import React from "react";
import { Switch, Route } from "react-router-dom"
import styles from "./Routes.module.scss";
import Search from "../Search";
import Saved from "../Saved";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/saved'>
          <Saved/>
        </Route>
        <Route path='/search'>
          <Search/>
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
