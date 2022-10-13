

import * as React from "react";
import * as Js_math from "bs-platform/lib/es6/js_math.js";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";

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

export {
  randColor ,
  make ,
  
}
/* react Not a pure module */
