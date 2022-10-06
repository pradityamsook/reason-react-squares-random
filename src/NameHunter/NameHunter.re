[@react.component]
let make = (~name) => {
    <div>{React.string("Name :" ++ name)}</div>
}