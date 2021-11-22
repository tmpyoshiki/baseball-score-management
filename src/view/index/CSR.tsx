import React from "react";
import { hydrate } from "react-dom";
import IndexMainComponent from "./component/IndexMainComponent";

hydrate(<IndexMainComponent />, document.getElementById("app"));
