'use strict';

var React = require("react");

function NameHunter(Props) {
  var name = Props.name;
  return React.createElement("div", undefined, "Name :" + name);
}

var make = NameHunter;

exports.make = make;
/* react Not a pure module */
