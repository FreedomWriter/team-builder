import React, { useState } from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";

export default function Form(props) {
  console.log(`Props from the Form: ${props}`);

  const AppStyling = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-content: center;
    padding: 2%;
    margin: 2%;
    width: 50%;
  `;

  const ButtonLayout = styled(AppStyling)`
    justify-content: center;
    align-self: center;
    width: 20%;
    // margin: 0 16%;
  `;

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
    <div>
      <form onSubmit={handleSubmit}>
        {/*keeping labels in as best practice for accessibility, setting to hidden because I don't want to display them */}
        <label htmlFor="name" hidden />{" "}
        <input
          id="name"
          placeholder="Name"
          name="name"
          value={teamMember.name}
          onChange={handleChange}
        />
        <label htmlFor="email" hidden />
        <input
          id="email"
          placeholder="email@email.com"
          name="email"
          value={teamMember.email}
          onChange={handleChange}
        />
        <label htmlFor="role" hidden />
        <input
          id="role"
          placeholder="Role"
          name="role"
          value={teamMember.role}
          onChange={handleChange}
        />
        <Link to="/welcome">
          <button type="submit">Join</button>
        </Link>
      </form>
    </div>
  );
}
