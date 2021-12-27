import React from "react";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";


const person = {
  name: "Pavel",
  lastname: "Semenov"
}






function App() {
 return (
   <div>
  <ClassComponent name = "Pavel Semenov"/>,
  <FuncComponent props={person} />
   </div>
  )

}




export default App;
