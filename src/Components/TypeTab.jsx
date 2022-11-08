import { useState } from "react";
import styled from "styled-components";

const TabButton = styled.button`
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
  font-weight: bold;
  font-size: 28px;
  border-bottom: ${(props) => (props.borderBottom ? "2px solid gray" : "none")};
  color: ${(props) => (props.color ? "black" : "rgb(187, 187, 187)")};
`;

export default function TypeTab({ onTabChange }) {
  const [activate, setActivate] = useState(0);

  const tabClickHandler = (index) => {
    setActivate(index);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  const tabContArr = [
    {
      tabTitle: (
        <li>
          <TabButton
            borderBottom={activate === 0}
            color={activate === 0}
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
            borderBottom={activate === 1}
            color={activate === 1}
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
            borderBottom={activate === 2}
            color={activate === 2}
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
            borderBottom={activate === 3}
            color={activate === 3}
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
      <div className="Tab__Type">
        {tabContArr.map((section) => {
          return section.tabTitle;
        })}
      </div>
    </div>
  );
}
