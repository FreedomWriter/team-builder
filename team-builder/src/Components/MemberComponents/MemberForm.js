import React, { useState } from "react";
// import { Route, Link } from "react-router-dom";

export default function Form(props) {
  console.log(`Props from the Form: ${props}`);

  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = e => {
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addMemberFn(teamMember);
    setTeamMember({ ...teamMember, name: "", email: "", role: "" });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {/*keeping labels in as best practice for accessibility, setting to hidden because I don't want to display them */}
        <div>
          <label htmlFor="name">What should we call you?</label>
          <br></br>
          <input
            id="name"
            placeholder="Name"
            name="name"
            value={teamMember.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">How can we reach you?</label>
          <br></br>
          <input
            id="email"
            placeholder="email@email.com"
            name="email"
            value={teamMember.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="role">What's your Role?</label>
          <br></br>
          <input
            id="role"
            placeholder="Role"
            name="role"
            value={teamMember.role}
            onChange={handleChange}
          />
        </div>
        <div>
          <br></br>
          <button type="submit">Join</button>
        </div>
      </form>
    </div>
  );
}
