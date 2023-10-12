const dogs = ["כלב", "זאב", "שועל"];
const cats = ["חתול", "נמר", "אריה"];

import Animal from "./Animal";
import TextField from "./TextField";
const Body = () => {

  return (<div style={{display: "flex", flexDirection: "column"}}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", marginTop: "10px"}}>
      <Animal animals={dogs} color="orange"/>
      <Animal animals={cats} color="green"/>
    </div>
    <TextField />
    </div>
  );
};

export default Body;
