import React from "react";

const person = {
  name: "Pavel",
  lastname: "Semenov"
}






function Welcome({props}) {
  return <h1>Привет, {props.name} {props.lastname}!</h1>;
}

function App() {
 return (

    <Welcome props={person}  />
 
  )

}




export default App;
