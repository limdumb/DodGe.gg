import "./SerchInput.css";
import styled from "styled-components";

const SubmitSection = styled.div`
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

export const SerchInput = () => {
  return (
    <SubmitSection
      height="2rem"
      right="1.8rem"
      backgroundColor="white"
    >
      <input id="Serch_Input" type="text" placeholder="소환사명"></input>
      <button className="Serch_Button">.GG</button>
    </SubmitSection>
  );
}
