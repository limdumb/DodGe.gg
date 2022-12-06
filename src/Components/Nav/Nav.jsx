import React from "react";
import "./Nav.css";
import styled from "styled-components";
import { useState } from "react";

const NavBody = styled.div`
  position: fixed;
  right: 5vw;
  top: 60vh;
  width: 60px;
  height: 60px;
  z-index: 10000;

  @media screen and (min-device-width: 1024px) {
    display: none;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => (props.clickCheck ? "40px" : "50px")};
  height: ${(props) => (props.clickCheck ? "40px" : "50px")};
  border-radius: 40px;
  background-color: black;
  transition: 1s;
  z-index: 10000;
`;

const NavEffect = styled.div`
  overflow: hidden;
  position: absolute;
  left: ${(props) => (props.clickCheck ? "0" : "50%")};
  top: ${(props) => (props.clickCheck ? "0" : "50%")};
  transform: ${(props) =>
    props.clickCheck ? "none" : "translate(-50%, -50%)"};
  width: 60px;
  height: 60px;
  border-radius: 60px;
  animation: ${(props) =>
    props.clickCheck ? "spin 5s linear infinite" : "none"};
`;

const SubNavBtn = styled.button`
  border: none;
  transform: ${(props) => (props.clickCheck ? "none" : "translate(0%, 0%)")};
  width: ${(props) => (props.clickCheck ? "50px" : "30px")};
  height: ${(props) => (props.clickCheck ? "50px" : "30px")};
  border-radius: ${(props) => (props.clickCheck ? "50px" : "30px")};
  transition: ${(props) => props.speed};
  z-index: 999;
  background-color: ${(props) => props.backgroundColor};
  position: absolute;
  bottom: ${(props) => (props.clickCheck ? props.bottom : "30%")};
  right: ${(props) => (props.clickCheck ? props.right : "30%")};
`;

const Nav = ({modalCheck, setModalCheck}) => {
  const [clickCheck, setClickCheck] = useState(false);
  function NavClick() {
    setClickCheck(!clickCheck);
  }

  const ChampionSerchScroll = () => {
    window.scroll({
      top: 70,
      behavior: "smooth",
    });
  };

  const TopScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const SummonerSerchOpen = () => {
    setModalCheck([!modalCheck[0],false])
  }

  const OPListOpen = () => {
    setModalCheck([false,!modalCheck[1]])
  }

  return (
    <NavBody clickCheck={clickCheck} onClick={NavClick}>
      <NavButton clickCheck={clickCheck} />
      <NavEffect clickCheck={clickCheck} className="Effect-blind1">
        <NavEffect clickCheck={clickCheck} className="quadrant1" />
      </NavEffect>
      <NavEffect clickCheck={clickCheck} className="Effect-blind2">
        <NavEffect clickCheck={clickCheck} className="quadrant2" />
      </NavEffect>
      <NavEffect clickCheck={clickCheck} className="Effect-blind3">
        <NavEffect clickCheck={clickCheck} className="quadrant3" />
      </NavEffect>
      <NavEffect clickCheck={clickCheck} className="Effect-blind4">
        <NavEffect clickCheck={clickCheck} className="quadrant4" />
      </NavEffect>
      <SubNavBtn
        clickCheck={clickCheck}
        backgroundColor={"red"}
        bottom={"80px"}
        right={"20px"}
        speed={"0.5s"}
        onClick={ChampionSerchScroll}
      />
      <SubNavBtn
        clickCheck={clickCheck}
        backgroundColor={"blue"}
        bottom={"40px"}
        right={"80px"}
        speed={"0.7s"}
        onClick={OPListOpen}
      />
      <SubNavBtn
        clickCheck={clickCheck}
        backgroundColor={"green"}
        bottom={"-30px"}
        right={"80px"}
        speed={"0.9s"}
        onClick={SummonerSerchOpen}
      />
      <SubNavBtn
        clickCheck={clickCheck}
        backgroundColor={"yellow"}
        bottom={"-70px"}
        right={"20px"}
        speed={"1s"}
        onClick={TopScroll}
      />
    </NavBody>
  );
};

export default Nav;
