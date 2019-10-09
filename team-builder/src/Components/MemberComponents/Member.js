import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import styled from "styled-components";

export default function Member({ members, deleteMemberFn }) {
  console.log(members);
  const AppStyling = styled.div`
    display: flex;
    flex-flow: column nowrap;
  `;
  return (
    <AppStyling>
      {members.map(member => {
        return (
          //   <div key={member.id}>
          //     <h2>{member.name}</h2>
          //     <h2>{member.email}</h2>
          //     <h2>{member.role}</h2>
          //     <button onClick={() => deleteMemberFn(member.id)}>Delete</button>
          //   </div>
          <Card>
            <CardBody>
              <CardTitle>{member.name}</CardTitle>
              <CardSubtitle>{member.role}</CardSubtitle>
              <CardText>{member.email}</CardText>
              <CardLink>
                <Button onClick={() => deleteMemberFn(member.id)}>
                  Delete
                </Button>
              </CardLink>
              <CardLink>
                <Button onClick={() => deleteMemberFn(member.id)}>
                  Delete
                </Button>
              </CardLink>
              {/* <CardLink ><Route to="/mybook" render={(props)=><Button {...props} NEED TO PASS ADDMEMBER addMemberFn(addMember)/></CardLink>Save to Book</Button> */}
            </CardBody>
          </Card>
        );
      })}
    </AppStyling>
  );
}

{
  /* <divkey={member.id}>
<Card>
  <CardBody>
    <CardTitle>{member.name}</CardTitle>
    <CardSubtitle>{member.role}</CardSubtitle>
    <CardText>{member.email}</CardText>
    <CardLink ><Button/onClick={() => deleteMemberFn(member.id)}></CardLink>
    <CardLink ><Button/onClick={() => deleteMemberFn(member.id)}></CardLink>
    <CardLink ><Route to="/mybook" render={(props)=><Button {...props} NEED TO PASS ADDMEMBER addMemberFn(addMember)/></CardLink>
  </CardBody>
</Card>
</div> */
}
