import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/birth/List";
import Create from "../components/birth/Create";
import Show from "../components/birth/Show";
import Update from "../components/birth/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.birthCreate()}
    key="birthList"
    component={List}
    title="List of Births"
    initial
  />,
  <Scene key="birthCreate" component={Create} title="Add a new birth" />,
  <Scene
    key="birthShow"
    component={Show}
    title="Birth"
    leftTitle="< List of Births"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene key="birthUpdate" component={Update} title="Update Birth" />,
];
