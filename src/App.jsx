import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Default } from './component/default';

function App() {

  return (
    <>
      {/* <h1>Hello World</h1> */}
      <Routes>
        <Route path="/" element={<Default />}></Route>
      </Routes>
    </>
  );
}

export default App;
