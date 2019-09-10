import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './Create'
import Team from './Team'

function App() {
  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      <Create team={team} setTeam={setTeam}/>
      <Team team={team} />
    </div>
  );
}

export default App;
