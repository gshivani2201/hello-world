import './App.css';
//import React, {Component} from 'react'
import Greet from './components/Greet'
//import Hello from './components/Hello';
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
    <NameList />
    {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
     {/* <Counter /> */}
     {/* <Greet name="Tony Stark" heroName="Iron Man"/> 
     <Greet name="Peter Parker" heroName="SpiderMan"/>
     <Greet name="Natasha" heroName="Black Widow"/> */}
     {/* <Welcome name="Tony Stark" heroName="Iron Man"/>
     <Welcome name="Peter Parker" heroName="SpiderMan"/>
     <Welcome name="Bruce" heroName="Hulk"/> */}
     {/* <Message /> */}
     {/* <Hello /> */}
    </div>
  );
}

export default App;
