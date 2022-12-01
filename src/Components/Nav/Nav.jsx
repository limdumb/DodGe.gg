import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav-Body">
      <div className="Nav-Countor">
        <div className="Nav-Btn"></div>
        <div className="Nav-Effect Effect-blind1">
          <div className="Nav-Effect quadrant1"></div>
        </div>
        <div className="Nav-Effect Effect-blind2">
          <div className="Nav-Effect quadrant2"></div>
        </div>
        <div className="Nav-Effect Effect-blind3">
          <div className="Nav-Effect quadrant3"></div>
        </div>
        <div className="Nav-Effect Effect-blind4">
          <div className="Nav-Effect quadrant4"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
