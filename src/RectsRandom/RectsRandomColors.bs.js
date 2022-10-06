'use strict';

var React = require("react");
var Js_math = require("bs-platform/lib/js/js_math.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function randColor(param) {
  var red = Js_math.random_int(255, 0);
  var green = Js_math.random_int(255, 0);
  var blue = Js_math.random_int(255, 0);
  var rHex = String(red);
  var gHex = String(green);
  var bHex = String(blue);
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
  var red = Js_math.random_int(0, 255);
  var green = Js_math.random_int(0, 255);
  var blue = Js_math.random_int(0, 255);
  String(red);
  String(green);
  String(blue);
  var listRects = Belt_Array.mapWithIndex(numbers, (function (index, number) {
          return React.createElement("div", {
                      key: String(index),
                      style: {
                        backgroundColor: randColor(undefined),
                        border: "1px solid black",
                        height: "100px",
                        marginTop: "10px",
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
