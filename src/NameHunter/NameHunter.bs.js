'use strict';

var React = require("react");

function NameHunter(Props) {
  var name = Props.name;
  return React.createElement("div", {
              className: "border-h1"
            }, "Name : " + name);
}

var make = NameHunter;

exports.make = make;
/* react Not a pure module */
