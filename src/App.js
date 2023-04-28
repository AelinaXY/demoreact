import logo from './logo.svg';
import './App.css';
import './components/Dice';
import Dice from './components/Dice';
import ComponentsWithProps from './components/ComponentWithProps';
import { Component } from 'react';
import TrainerRender from './components/TrainerRender';
import MilesToKm from './components/MilestoKm';
import Car from './components/Cars';
import InputAdder from './components/InputAdder';

function App() {

  const trainers =
  [{"firstName": "fName1",
  "lastName":"lName1"},
  {"firstName": "fName2",
  "lastName":"lName2"},
  {"firstName": "fName3",
  "lastName":"lName3"},
  ]

  let trainerList = trainers.map((item) => {
    return <TrainerRender fname={item.firstName} lname={item.lastName}/>
  })
  
  return (
    // Dice Roller
    // <div class="App">
    //   <header className='App-header'>
    //     <Dice />
    //   </header>
    // </div>
//  <>
//     <ComponentsWithProps header={"I AM HEADER"}
//     content={"I AM CONTENT"} number={15}/>
//     <ul>
//     {trainerList}
//     </ul>
// </>
 <div class="App">
      <header className='App-header'>
        {/* <MilesToKm /> */}
        {/* <Car/> */}
        { <InputAdder/>}
      </header>
    </div>

  );
}

export default App;
