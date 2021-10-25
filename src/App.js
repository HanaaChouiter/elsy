import React from "react";
import './App.css';
import Box from "./components/box";
import './styles/global.css';

const tempMin = -20
const tempsMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box color="#3A85FF" size="100px" icon="local_drink" value={1.5} unit="L"/>
          {/* Steps */}
          <Box color="black" size="100px" icon="directions_walk" value={3000} unit="steps"/>
          {/* Hearts */}
          <Box color="red" size="100px" icon="favorite" value={120} unit="bpm"/>
          {/* Temperature */}
          <Box color="yellow" size="100px" icon="wb_sunny" value={-10} unit="°C"/>
        </div>
        <p>Heart : {tempMin} </p>
        <p>Temperature : {tempsMax} </p>
        <p>Steps : {stepsMin}</p>
      </div>
    );
  }
}

export default App;
