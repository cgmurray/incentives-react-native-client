import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/incentiveprogram/List";
import Create from "../components/incentiveprogram/Create";
import Show from "../components/incentiveprogram/Show";
import Update from "../components/incentiveprogram/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.incentiveprogramCreate()}
    key="incentiveprogramList"
    component={List}
    title="List of IncentivePrograms"
    initial
  />,
  <Scene
    key="incentiveprogramCreate"
    component={Create}
    title="Add a new incentiveprogram"
  />,
  <Scene
    key="incentiveprogramShow"
    component={Show}
    title="IncentiveProgram"
    leftTitle="< List of IncentivePrograms"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene
    key="incentiveprogramUpdate"
    component={Update}
    title="Update IncentiveProgram"
  />,
];
