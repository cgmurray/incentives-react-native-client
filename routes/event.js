import React from "react";
import { Scene, Actions } from "react-native-router-flux";
import List from "../components/event/List";
import Create from "../components/event/Create";
import Show from "../components/event/Show";
import Update from "../components/event/Update";
import { delayRefresh } from "../utils/helpers";

export default [
  <Scene
    rightTitle="Add"
    onRight={() => Actions.eventCreate()}
    key="eventList"
    component={List}
    title="List of Events"
    initial
  />,
  <Scene key="eventCreate" component={Create} title="Add a new event" />,
  <Scene
    key="eventShow"
    component={Show}
    title="Event"
    leftTitle="< List of Events"
    onLeft={() => {
      Actions.pop();
      delayRefresh();
    }}
  />,
  <Scene key="eventUpdate" component={Update} title="Update Event" />,
];
