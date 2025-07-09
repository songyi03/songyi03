// src/App.tsx

import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventListner from "./pages/EventListener";
import ReactOnclick from "./pages/ReactOnclick";
import EventBubbling from './pages/EventBubbling';
import FileInput from "./pages/FileInput"
import DragDrop from './pages/DragDrop';

// export default function App() {
  // const texts = ['hello', 'world'].map((text, index) => (
  //   <p key={index}>{text}</p>
  // ));

  // return <div>{texts}</div>;
  // key 예시였습니다.

  // const texts = ['hello', 'world'].map((text, index) => (
  //   <p key={index} children={text} />
  // ));

  // return <div children={texts} />;
  //children 예시였습니다. 

  export default function EventListener() {
  return(
    <div>
      {/* <EventListner /> */}
      {/* <ReactOnclick /> */}
      {/* <EventBubbling /> */}
      {/* <FileInput /> */}
      <DragDrop />
    </div> 
  )

}
