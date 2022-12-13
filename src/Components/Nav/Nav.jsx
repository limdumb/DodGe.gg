import React from "react";
import "./Nav.css";
import styled from "styled-components";
import { useState } from "react";

const NavBody = styled.div`
  position: fixed;
  right: 5vw;
  top: 60vh;
  width: 89px;
  height: 89px;
  z-index: 10000;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px;
    border: 5px solid transparent;
    background: linear-gradient(
        90deg,
        rgba(251, 190, 59, 1) 0%,
        rgba(247, 147, 30, 1) 100%
      )
      border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  .NavButton_top {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => (props.clickCheck ? "45.3px" : "58.5px")};
    height: ${(props) => (props.clickCheck ? "45.3px" : "58.5px")};
    background-color: #ffdc6e;
    border-radius: ${(props) => (props.clickCheck ? "45.3px" : "58.5px")};
    transition: 1s;
    z-index: 10005;
  }
  .NavButton_top2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    width: ${(props) => (props.clickCheck ? "58.5px" : "71.7px")};
    height: ${(props) => (props.clickCheck ? "58.5px" : "71.7px")};
    border-radius: ${(props) => (props.clickCheck ? "58.5px" : "71.7px")};
    background: linear-gradient(
      315deg,
      rgba(241, 90, 36, 0) 0%,
      rgba(247, 147, 30, 1) 100%
    );
    transition: 1s;
    z-index: 10001;
  }
  .NavButton_top3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => (props.clickCheck ? "45.3px" : "58.5px")};
    height: ${(props) => (props.clickCheck ? "45.3px" : "58.5px")};
    background: linear-gradient(
      135deg,
      rgba(241, 90, 36, 0) 0%,
      rgba(247, 147, 30, 1) 100%
    );
    border-radius: ${(props) => (props.clickCheck ? "45.3px" : "58.5px")};
    transition: 1s;
    z-index: 10006;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  width: ${(props) => (props.clickCheck ? "58.5px" : "71.7px")};
  height: ${(props) => (props.clickCheck ? "58.5px" : "71.7px")};
  border-radius: ${(props) => (props.clickCheck ? "58.5px" : "71.7px")};
  background: linear-gradient(
    90deg,
    rgba(241, 90, 36, 0) 0%,
    rgba(247, 147, 30, 1) 100%
  );
  transition: 1s;
  z-index: 10000;
`;

// const NavEffect = styled.div`
//   position: absolute;
//   left: ${(props) => (props.clickCheck ? "0" : "50%")};
//   top: ${(props) => (props.clickCheck ? "0" : "50%")};
//   transform: ${(props) =>
//     props.clickCheck ? "none" : "translate(-50%, -50%)"};
//   width: 50px;
//   height: 50px;
//   border-radius: 50px;
//   animation: ${(props) =>
//     props.clickCheck ? "spin 5s linear infinite" : "none"};
// `;

const SubNavBtn = styled.button`
  border: none;
  transform: ${(props) => (props.clickCheck ? "none" : "translate(0%, 0%)")};
  width: ${(props) => (props.clickCheck ? "50px" : "30px")};
  height: ${(props) => (props.clickCheck ? "50px" : "30px")};
  border-radius: ${(props) => (props.clickCheck ? "50px" : "30px")};
  transition: ${(props) => props.speed};
  z-index: 999;
  background-color: #ffdc6e;
  position: absolute;
  bottom: ${(props) => (props.clickCheck ? props.bottom : "30%")};
  right: ${(props) => (props.clickCheck ? props.right : "30%")};
  .subBox {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  .sub_nav {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      135deg,
      rgba(241, 90, 36, 0) 0%,
      rgba(247, 147, 30, 1) 100%
    );
    border-radius: 100%;
    z-index: 1000;
  }
  .sub_nav2 {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      315deg,
      rgba(241, 90, 36, 0) 0%,
      rgba(247, 147, 30, 1) 100%
    );
    border-radius: 100%;
    z-index: 1001;
  }
`;

const Nav = ({ modalCheck, setModalCheck }) => {
  const [clickCheck, setClickCheck] = useState(false);
  function NavClick() {
    setClickCheck(!clickCheck);
  }

  const ChampionSearchScroll = () => {
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
    setModalCheck([!modalCheck[0], false]);
  };

  const OPListOpen = () => {
    setModalCheck([false, !modalCheck[1]]);
  };

  return (
    <NavBody clickCheck={clickCheck} onClick={NavClick}>
      <div clickCheck={clickCheck} className="NavButton_top2"></div>
      <div clickCheck={clickCheck} className="NavButton_top2"></div>
      <div clickCheck={clickCheck} className="NavButton_top3"></div>
      <div clickCheck={clickCheck} className="NavButton_top3"></div>
      <div clickCheck={clickCheck} className="NavButton_top"></div>
      <NavButton clickCheck={clickCheck} />

      {/* <NavEffect clickCheck={clickCheck} className="Effect-blind1">
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
      </NavEffect> */}
      <SubNavBtn
        clickCheck={clickCheck}
        backgroundColor={"red"}
        bottom={"100px"}
        right={"40px"}
        speed={"0.5s"}
        onClick={ChampionSearchScroll}
      >
        <div className="subBox">
          <div className="sub_nav"></div>
          <div className="sub_nav2"></div>
          <div className="sub_nav2"></div>
          <div className="sub_nav3"></div>
          <div className="sub_nav3"></div>
        </div>
      </SubNavBtn>
      <SubNavBtn
        clickCheck={clickCheck}
        backgroundColor={"blue"}
        bottom={"50px"}
        right={"100px"}
        speed={"0.7s"}
        onClick={OPListOpen}
      >
        <div className="subBox">
          <div className="sub_nav"></div>
          <div className="sub_nav2"></div>
          <div className="sub_nav2"></div>
          <div className="sub_nav3"></div>
          <div className="sub_nav3"></div>
        </div>
      </SubNavBtn>
      <SubNavBtn
        clickCheck={clickCheck}
        backgroundColor={"green"}
        bottom={"-20px"}
        right={"100px"}
        speed={"0.9s"}
        onClick={SummonerSerchOpen}
      >
        <div className="subBox">
          <div className="sub_nav"></div>
          <div className="sub_nav2"></div>
          <div className="sub_nav2"></div>
          <div className="sub_nav3"></div>
          <div className="sub_nav3"></div>
        </div>
      </SubNavBtn>
      <SubNavBtn
        clickCheck={clickCheck}
        backgroundColor={"yellow"}
        bottom={"-65px"}
        right={"40px"}
        speed={"1s"}
        onClick={TopScroll}
      >
        <div className="subBox">
          <div className="sub_nav"></div>
          <div className="sub_nav2"></div>
          <div className="sub_nav2"></div>
          <div className="sub_nav3"></div>
          <div className="sub_nav3"></div>
        </div>
      </SubNavBtn>
    </NavBody>
  );
};

export default Nav;
