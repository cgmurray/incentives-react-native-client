import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/reward/List";
import Create from "../components/reward/Create";
import Show from "../components/reward/Show";
import Update from "../components/reward/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.rewardCreate()}
    key="rewardList"
    component={List}
    title="List of Rewards"
    initial
  />,
  <Scene key="rewardCreate" component={Create} title="Add a new reward" />,
  <Scene
    key="rewardShow"
    component={Show}
    title="Reward"
    leftTitle="< List of Rewards"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene key="rewardUpdate" component={Update} title="Update Reward" />,
];
