import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/incentivemanagingpartner/List";
import Create from "../components/incentivemanagingpartner/Create";
import Show from "../components/incentivemanagingpartner/Show";
import Update from "../components/incentivemanagingpartner/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.incentivemanagingpartnerCreate()}
    key="incentivemanagingpartnerList"
    component={List}
    title="List of IncentiveManagingPartners"
    initial
  />,
  <Scene
    key="incentivemanagingpartnerCreate"
    component={Create}
    title="Add a new incentivemanagingpartner"
  />,
  <Scene
    key="incentivemanagingpartnerShow"
    component={Show}
    title="IncentiveManagingPartner"
    leftTitle="< List of IncentiveManagingPartners"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene
    key="incentivemanagingpartnerUpdate"
    component={Update}
    title="Update IncentiveManagingPartner"
  />,
];
