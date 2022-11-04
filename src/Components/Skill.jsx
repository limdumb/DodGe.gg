import styled from "styled-components";
import { lol } from "../dummy_data/data";


const InfoDiv = styled.div`
    color:blue;
`   

const SkillUl = styled.ul`
    display:flex;
`

export const Skill = ()=>{

    // lol.data.Aatrox.spells[0].image.full
    //  lol.data.Aatrox.passive.image.full

    return(
        <InfoDiv>
            <SkillUl>
            </SkillUl>
        </InfoDiv>
    )
}