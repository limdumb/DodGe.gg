import "./SerchInput.css";
import styled from "styled-components";

const SubmitButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  border-top-right-radius: ${(props) => props.borderTrRadius};
  border-bottom-right-radius: ${(props) => props.borderBrRadius};
  right: ${(props) => props.right};
  border: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 1px;
`;

export default function SerchInput() {
  return (
    <SubmitButton
      width="4rem"
      height="2rem"
      backgroundColor="white"
      borderBrRadius="10px"
      borderTrRadius="10px"
      right="1.8rem"
    >
      <input id="Serch_Input" type="text" placeholder="소환사명"></input>
      <span className="Serch_Button_Name">.GG</span>
    </SubmitButton>
  );
}
