import { useState } from "react";
import styled from "styled-components";

const TabButton = styled.button`
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

export default function TypeTab({onTabChange}) {
  const [activate, setActivate] = useState(0);

  const tabClickHandler = (index) => {
    setActivate(index);
    if(onTabChange) {
      onTabChange(index)
    }
  }

  const tabContArr = [
    {
      tabTitle: (
        <li>
          <TabButton
            style={{
              borderBottom: activate === 0 ? "2px solid gray" : "none",
              color: activate===0 ? "black" : "rgb(187, 187, 187)"
            }}
            onClick={() => tabClickHandler(0)}
          >
            전체큐
          </TabButton>
        </li>
      ),
    },
    {
      tabTitle: (
        <li>
          <TabButton
            style={{
              borderBottom: activate === 1 ? "2px solid gray" : "none",
              color: activate===1 ? "black" : "rgb(187, 187, 187)"
            }}
            onClick={() => tabClickHandler(1)}
          >
            솔로랭크
          </TabButton>
        </li>
      ),
    },
    {
      tabTitle: (
        <li>
          <TabButton
            style={{
              borderBottom: activate === 2 ? "2px solid gray" : "none",
              color: activate===2 ? "black" : "rgb(187, 187, 187)"
            }}
            onClick={() => tabClickHandler(2)}
          >
            자유랭크
          </TabButton>
        </li>
      ),
    },
    {
      tabTitle: (
        <li>
          <TabButton
            style={{
              borderBottom: activate===3 ? "2px solid gray" : "none",
              color: activate===3 ? "black" : "rgb(187, 187, 187)"
            }}
            onClick={() => tabClickHandler(3)}
          >
            일반
          </TabButton>
        </li>
      ),
    },
  ];

  return (
    <div className="Record__Tab__Container">
      <div className="Tab__Title">종류별 전적</div>
      <div className="Tab__Type">
        {tabContArr.map((section) => {
          return section.tabTitle;
        })}
      </div>
    </div>
  );
}
