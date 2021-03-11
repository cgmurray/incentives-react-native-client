import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/incentive/List";
import Create from "../components/incentive/Create";
import Show from "../components/incentive/Show";
import Update from "../components/incentive/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.incentiveCreate()}
    key="incentiveList"
    component={List}
    title="List of Incentives"
    initial
  />,
  <Scene
    key="incentiveCreate"
    component={Create}
    title="Add a new incentive"
  />,
  <Scene
    key="incentiveShow"
    component={Show}
    title="Incentive"
    leftTitle="< List of Incentives"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene key="incentiveUpdate" component={Update} title="Update Incentive" />,
];
