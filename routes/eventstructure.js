import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/eventstructure/List";
import Create from "../components/eventstructure/Create";
import Show from "../components/eventstructure/Show";
import Update from "../components/eventstructure/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.eventstructureCreate()}
    key="eventstructureList"
    component={List}
    title="List of EventStructures"
    initial
  />,
  <Scene
    key="eventstructureCreate"
    component={Create}
    title="Add a new eventstructure"
  />,
  <Scene
    key="eventstructureShow"
    component={Show}
    title="EventStructure"
    leftTitle="< List of EventStructures"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene
    key="eventstructureUpdate"
    component={Update}
    title="Update EventStructure"
  />,
];
