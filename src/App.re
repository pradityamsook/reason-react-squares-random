// [%bs.raw {|require('/style/index.css')|}];
  
[@react.component]
let make = () => {
    <div>
        <NameHunter name={"Pradist"} />
        <div style=(
            ReactDOM.Style.make(
                ~margin="10px",
                ~padding="10px",
                ~flex="30%",
                ()
            )
        )><RectsRandomColors /></div>
    </div>  
}