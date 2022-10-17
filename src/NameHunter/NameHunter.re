[@react.component]
let make = (~name) => {
    <div className="border-h1">{React.string("Name : " ++ name)}</div>
}