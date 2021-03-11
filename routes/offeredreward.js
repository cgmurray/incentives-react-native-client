import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/offeredreward/List";
import Create from "../components/offeredreward/Create";
import Show from "../components/offeredreward/Show";
import Update from "../components/offeredreward/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.offeredrewardCreate()}
    key="offeredrewardList"
    component={List}
    title="List of OfferedRewards"
    initial
  />,
  <Scene
    key="offeredrewardCreate"
    component={Create}
    title="Add a new offeredreward"
  />,
  <Scene
    key="offeredrewardShow"
    component={Show}
    title="OfferedReward"
    leftTitle="< List of OfferedRewards"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene
    key="offeredrewardUpdate"
    component={Update}
    title="Update OfferedReward"
  />,
];
