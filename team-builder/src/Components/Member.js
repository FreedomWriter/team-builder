import React from "react";
import styled from "styled-components";

export default function Member({ members, deleteMemberFn }) {
  console.log(members);
  const AppStyling = styled.div`
    display: flex;
    flex-flow: column nowrap;
    color: hotpink;
  `;
  return (
    <AppStyling>
      {members.map(member => {
        return (
          <div key={member.id}>
            <h2>{member.name}</h2>
            <h2>{member.email}</h2>
            <h2>{member.role}</h2>
            <button onClick={() => deleteMemberFn(member.id)}>Delete</button>
          </div>
        );
      })}
    </AppStyling>
  );
}
