// [%bs.raw {|require('rects.css')|}];

let randColor = () => {
    let red = Js.Math.random_int(255, 0);
    let green = Js.Math.random_int(255, 0);
    let blue = Js.Math.random_int(255, 0);
    let rHex = Js.String2.make(red);
    let gHex = Js.String2.make(green);
    let bHex = Js.String2.make(blue);
    "#" ++ rHex ++ gHex ++ bHex;
};

[@react.component]
let make = () => {
    let numbers = [|1, 2, 3, 4, 5, 6, 7, 8, 9|];
    let red = Js.Math.random_int(0, 255);
    let green = Js.Math.random_int(0, 255);
    let blue = Js.Math.random_int(0, 255);
    let rHex = Js.String2.make(red);
    let gHex = Js.String2.make(green);
    let bHex = Js.String2.make(blue);
    let listRects = Belt.Array.mapWithIndex(numbers, (index, number) => {
        <div style=(
            ReactDOM.Style.make(
                ~width="100px",
                ~height="100px",
                ~marginTop="10px",
                ~border={"1px solid black"},
                ~backgroundColor={randColor()}
                ,()
            )
        )
        key={Belt.Int.toString(index)}>{React.string(Belt.Int.toString(number))}
        </div>
    });
    <div className="child">{React.array(listRects)}</div>;
    
}