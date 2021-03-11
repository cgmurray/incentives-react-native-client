import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/userprogramemployee/List";
import Create from "../components/userprogramemployee/Create";
import Show from "../components/userprogramemployee/Show";
import Update from "../components/userprogramemployee/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.userprogramemployeeCreate()}
    key="userprogramemployeeList"
    component={List}
    title="List of UserProgramEmployees"
    initial
  />,
  <Scene
    key="userprogramemployeeCreate"
    component={Create}
    title="Add a new userprogramemployee"
  />,
  <Scene
    key="userprogramemployeeShow"
    component={Show}
    title="UserProgramEmployee"
    leftTitle="< List of UserProgramEmployees"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene
    key="userprogramemployeeUpdate"
    component={Update}
    title="Update UserProgramEmployee"
  />,
];
