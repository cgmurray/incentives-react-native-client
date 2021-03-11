import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/employer/List";
import Create from "../components/employer/Create";
import Show from "../components/employer/Show";
import Update from "../components/employer/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.employerCreate()}
    key="employerList"
    component={List}
    title="List of Employers"
    initial
  />,
  <Scene key="employerCreate" component={Create} title="Add a new employer" />,
  <Scene
    key="employerShow"
    component={Show}
    title="Employer"
    leftTitle="< List of Employers"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene key="employerUpdate" component={Update} title="Update Employer" />,
];
