import '../static/style.css';

import React from 'react'
import { Camera } from './camera/camera';

const App = () => {
  return (
    <div className="app">
      <h1>Exercise 1: Face API </h1>
      <Camera />
    </div>
  );  
}

export default App