import React from "react";
import Member from "./MemberComponents/MemberForm";
import { Route, Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome to my welcome page</h1>
      <Member />
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
}
