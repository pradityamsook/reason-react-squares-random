

import * as React from "react";

function NameHunter(Props) {
  var name = Props.name;
  return React.createElement("div", undefined, "Name :" + name);
}

var make = NameHunter;

export {
  make ,
  
}
/* react Not a pure module */
