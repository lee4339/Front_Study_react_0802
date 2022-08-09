import React from 'react';
import './App.css';
import Boxs from './component/boxs';
import Hello from './component/hello';

function App() {
  return (
    <div>
      <Hello name='apple' color='gold' isSpecial={false}/>
      <Hello name='banana' color='yellowgreen' isSpecial={true}/>
      <Boxs/>
    </div>
  );
}

export default App;
