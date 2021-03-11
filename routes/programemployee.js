import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/programemployee/List";
import Create from "../components/programemployee/Create";
import Show from "../components/programemployee/Show";
import Update from "../components/programemployee/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.programemployeeCreate()}
    key="programemployeeList"
    component={List}
    title="List of ProgramEmployees"
    initial
  />,
  <Scene
    key="programemployeeCreate"
    component={Create}
    title="Add a new programemployee"
  />,
  <Scene
    key="programemployeeShow"
    component={Show}
    title="ProgramEmployee"
    leftTitle="< List of ProgramEmployees"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene
    key="programemployeeUpdate"
    component={Update}
    title="Update ProgramEmployee"
  />,
];
