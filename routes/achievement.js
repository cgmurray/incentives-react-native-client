import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/achievement/List";
import Create from "../components/achievement/Create";
import Show from "../components/achievement/Show";
import Update from "../components/achievement/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.achievementCreate()}
    key="achievementList"
    component={List}
    title="List of Achievements"
    initial
  />,
  <Scene
    key="achievementCreate"
    component={Create}
    title="Add a new achievement"
  />,
  <Scene
    key="achievementShow"
    component={Show}
    title="Achievement"
    leftTitle="< List of Achievements"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene
    key="achievementUpdate"
    component={Update}
    title="Update Achievement"
  />,
];
