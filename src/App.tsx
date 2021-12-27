import React from 'react';
import Greet from './components/Greet'
import './App.css';
import Person from './components/Person'
import { PersonList } from './components/PersonList';
function App() {
  const personName={
    first:'Bruce',
    last:'wayne'
  }
  const NameList=[
    {first:'xiao', last:'cai'},
    {first:'emily', last:'cai'},
    {first:'yao', last:'cai'}
  ]
  return (
    <div className="App">
      <Greet name="xiaohua" isLoggedIn={false}/>
      <Person personName={personName}/>
      <PersonList NameList={NameList}/>
    </div>
  );
}

export default App;
