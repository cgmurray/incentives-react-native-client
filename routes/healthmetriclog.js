import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/healthmetriclog/List";
import Create from "../components/healthmetriclog/Create";
import Show from "../components/healthmetriclog/Show";
import Update from "../components/healthmetriclog/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.healthmetriclogCreate()}
    key="healthmetriclogList"
    component={List}
    title="List of HealthMetricLogs"
    initial
  />,
  <Scene
    key="healthmetriclogCreate"
    component={Create}
    title="Add a new healthmetriclog"
  />,
  <Scene
    key="healthmetriclogShow"
    component={Show}
    title="HealthMetricLog"
    leftTitle="< List of HealthMetricLogs"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene
    key="healthmetriclogUpdate"
    component={Update}
    title="Update HealthMetricLog"
  />,
];
