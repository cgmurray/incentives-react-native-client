import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/earnedachievement/List";
import Create from "../components/earnedachievement/Create";
import Show from "../components/earnedachievement/Show";
import Update from "../components/earnedachievement/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.earnedachievementCreate()}
    key="earnedachievementList"
    component={List}
    title="List of EarnedAchievements"
    initial
  />,
  <Scene
    key="earnedachievementCreate"
    component={Create}
    title="Add a new earnedachievement"
  />,
  <Scene
    key="earnedachievementShow"
    component={Show}
    title="EarnedAchievement"
    leftTitle="< List of EarnedAchievements"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene
    key="earnedachievementUpdate"
    component={Update}
    title="Update EarnedAchievement"
  />,
];
