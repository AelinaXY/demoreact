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

import Nav from './components/routing/nav';
import Home from './components/routing/home';
import Contact from './components/routing/contact';
import Users from './components/routing/users';

import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NotFound from './components/routing/notfound';
import TestUseContext from './components/useContext';
import JSONNav from './components/jsonRouting/JSONnav';
import JSONrender from './components/jsonRouting/JSONrender';

import userJSON from './resources/users.json';
import albumJSON from './resources/albums.json';
import commentJSON from './resources/comments.json';
import photoJSON from './resources/photos.json';
import todoJSON from './resources/todos.json';
import postJSON from './resources/posts.json';


function App() {

  const trainers =
    [{
      "firstName": "fName1",
      "lastName": "lName1"
    },
    {
      "firstName": "fName2",
      "lastName": "lName2"
    },
    {
      "firstName": "fName3",
      "lastName": "lName3"
    },
    ]

  let trainerList = trainers.map((item) => {
    return <TrainerRender fname={item.firstName} lname={item.lastName} />
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
        {/* { <InputAdder/>} */}
        
        {/* Router */}


        {/*Regular Routing */}
{/*
        <BrowserRouter>
        <Nav />

        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/users" element={<Users/>} />
            <Route exact path="/users/:id" element={<Users/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/*" element={<NotFound/>} />


            </Routes>
            </BrowserRouter> */}

            {/* <TestUseContext/> */}

            

        {/* JSON Rendering*/}
        <BrowserRouter>
        <JSONNav />

        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/albums" element={<JSONrender data={albumJSON}/>} />
            <Route exact path="/comments" element={<JSONrender data={commentJSON}/>} />
            <Route exact path="/photos" element={<JSONrender data={postJSON}/>} />
            <Route exact path="/posts" element={<JSONrender data={photoJSON}/>} />
            <Route exact path="/todos" element={<JSONrender data={todoJSON}/>} />
            <Route exact path="/users" element={<JSONrender data={userJSON}/>} />


            </Routes>
            </BrowserRouter>
      
      
      </header>
    </div>



  );
}

export default App;
