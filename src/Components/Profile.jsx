import styled from "styled-components";
import {lol} from "../dummy_data/data";

const InfoDiv = styled.div`
    color:red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

export const Profile = ()=>{
    return(
        <InfoDiv>
            {/* <img src={lol.data.Aatrox.image.full} alt="아트록스"></img> */}
            {/* <p>{lol.data.Aatrox.name}</p> */}
            {/* <p>{lol.data.Aatrox.tags}</p> */}
        </InfoDiv>
    )
}