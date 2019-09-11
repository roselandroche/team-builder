import React, { useState } from 'react';
import './App.css';
import Create from './Create'
import Team from './Team'

function App() {
  const [team, setTeam] = useState([
    {
    // name: 'Rose', 
    // email: 'r.landroche@gmail.com', 
    // role: 'Full Stack Web Developer'
    // },
    // {
    // name: 'Joe', 
    // email: 'joe@gmail.com', 
    // role:'Developer'
  }]);

  return (
    <div className="App">
      <Create team={team} setTeam={setTeam}/>
      <Team team={team} />
    </div>
  );
}

export default App;
