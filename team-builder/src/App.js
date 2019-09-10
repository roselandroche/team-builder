import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from './TeamForm'

function App() {
  const [teamMember, setTeamMember] = useState({});

  return (
    <div className="App">
      <TeamForm teamMember={teamMember} setTeamMember={setTeamMember}/>
    </div>
  );
}

export default App;
