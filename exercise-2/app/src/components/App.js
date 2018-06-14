import '../static/style.css';

import React from 'react'
import { Camera } from './camera/camera';

const App = () => {
  return (
    <div className="app">
      <h1>Exercise 2: Custom Vision</h1>
      <Camera />
    </div>
  );  
}

export default App