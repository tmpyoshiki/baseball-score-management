import React from "react";
import { hydrate } from "react-dom";
import IndexView from "./IndexView";

hydrate(<IndexView />, document.getElementById("app"));
