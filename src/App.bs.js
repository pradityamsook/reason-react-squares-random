'use strict';

var React = require("react");
var NameHunter$RectsRandomColor = require("./NameHunter/NameHunter.bs.js");
var RectsRandomColors$RectsRandomColor = require("./RectsRandom/RectsRandomColors.bs.js");

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

exports.make = make;
/* react Not a pure module */
