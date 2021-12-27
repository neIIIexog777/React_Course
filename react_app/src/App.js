import React from "react";






function Welcome({person}) {
  return <h1>Привет, {person.name} {person.lastname}!</h1>;
}

function App() {
 return (

    <Welcome person={{name: 'Pavel', lastname: 'Semenov'}}  />
 
  )

}




export default App;
