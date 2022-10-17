'use strict';

var React = require("react");
var Js_math = require("bs-platform/lib/js/js_math.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function randColor(param) {
  var red = Js_math.random_int(0, 255);
  var green = Js_math.random_int(0, 255);
  var blue = Js_math.random_int(0, 255);
  var rHex = red.toString(16);
  var gHex = green.toString(16);
  var bHex = blue.toString(16);
  return "#" + (rHex + (gHex + bHex));
}

function RectsRandomColors(Props) {
  var numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ];
  var listRects = Belt_Array.mapWithIndex(numbers, (function (index, number) {
          return React.createElement("div", {
                      key: String(index),
                      style: {
                        backgroundColor: randColor(undefined),
                        border: "1px solid black",
                        height: "100px",
                        marginTop: "25px",
                        width: "100px"
                      }
                    }, String(number));
        }));
  return React.createElement("div", {
              className: "child"
            }, listRects);
}

var make = RectsRandomColors;

exports.randColor = randColor;
exports.make = make;
/* react Not a pure module */
