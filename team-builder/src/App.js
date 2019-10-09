import React, { useState } from "react";
import "./App.css";
import MemberForm from "./Components/MemberComponents/MemberForm";
import Member from "./Components/MemberComponents/Member";
import Welcome from "./Components/Welcome";
import { Route } from "react-router-dom";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Natalie",
      email: "natalienetworks@gmail.com",
      role: "Back End"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  const deleteMember = id => {
    const newArray = teamMembers.filter(member => {
      return member.id !== id;
    });
    setTeamMembers(newArray);
  };

  return (
    <div>
      <MemberForm addMemberFn={addMember} />
      <Member members={teamMembers} deleteMemberFn={deleteMember} />
      <Route exact path="/welcome" component={Welcome} />
    </div>
  );
}

export default App;
