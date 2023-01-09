import { getRoles } from "@testing-library/react";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledLogo = styled.header`
  display: flex;
`;

const HeaderButton = styled.button`
  padding: 10px;
  background: ${(props) =>
    props.relax2 ? "#453C67" : "teal" && props.longRelax2 ? "#820000" : "teal"};
  margin-left: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  border-color: #c58940;
`;

const Header = ({ relax2, longRelax2 }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <StyledHeader>
        <StyledLogo>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4478/4478107.png"
            style={{ width: 30, marginRight: 18 }}
            alt=""
          />{" "}
          <h1>Potatoes</h1>
        </StyledLogo>
        <div
          className="nav-bar"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <HeaderButton relax2={relax2} longRelax2={longRelax2}>
            <img
              style={{ width: 17, marginRight: 8 }}
              src="https://www.flaticon.com/svg/vstatic/svg/3917/3917058.svg?token=exp=1672347875~hmac=aaba74c36b161c7061a20a630b9988d3"
              alt="Setting"
            ></img>
            Setting
          </HeaderButton>
          <HeaderButton relax2={relax2} longRelax2={longRelax2}>
            <img
              style={{ width: 17, marginRight: 8 }}
              src="https://www.flaticon.com/svg/vstatic/svg/3917/3917559.svg?token=exp=1672347786~hmac=9c5ce98e54c89ac65eb517a01fcb529d"
              alt="Setting"
            ></img>
            Login
          </HeaderButton>
        </div>
      </StyledHeader>
      <hr
        style={{
          width: 700,
          margin: 15,
          marginBottom: 40,
          border: "1px solid #C58940",
          borderBottom: "0px",
        }}
      />
    </div>
  );
};

export default Header;
