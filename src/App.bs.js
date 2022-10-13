

import * as React from "react";
import * as NameHunter$RectsRandomColor from "./NameHunter/NameHunter.bs.js";
import * as RectsRandomColors$RectsRandomColor from "./RectsRandom/RectsRandomColors.bs.js";

function App(Props) {
  return React.createElement("div", undefined, React.createElement(NameHunter$RectsRandomColor.make, {
                  name: "Pradist"
                }), React.createElement("div", {
                  style: {
                    margin: "10px",
                    padding: "10px",
                    flex: "30%"
                  }
                }, React.createElement(RectsRandomColors$RectsRandomColor.make, { })));
}

var make = App;

export {
  make ,
  
}
/* react Not a pure module */
