'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var NameHunter$RectsRandomColor = require("./NameHunter/NameHunter.bs.js");
var ExampleStyles$RectsRandomColor = require("./ExampleStyles.bs.js");
var RectsRandomColors$RectsRandomColor = require("./RectsRandom/RectsRandomColors.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$RectsRandomColor.style;

function makeContainer(param) {
  var container = document.createElement("div");
  container.className = "container";
  var content = document.createElement("div");
  content.className = "child";
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(NameHunter$RectsRandomColor.make, {
          name: "Pradist"
        }), makeContainer(undefined));

ReactDom.render(React.createElement(RectsRandomColors$RectsRandomColor.make, { }), makeContainer(undefined));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
