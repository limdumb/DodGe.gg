import top from '../Image/top.jpg'
import mid from '../Image/mid.jpg'
import jungle from '../Image/jungle.jpg'
import bottom from '../Image/bottom.jpg'
import support from '../Image/support.jpg'
import all from '../Image/all.jpg'
import styled from 'styled-components'

const LineImage = styled.img`
    height: 50px;
    width: 50px;
    cursor: pointer;
`



export default function ChampionTear() {
    return (
    <div>
        <LineImage src={all}></LineImage>
        <LineImage src={top}></LineImage>
        <LineImage src={jungle}></LineImage>
        <LineImage src={mid}></LineImage>
        <LineImage src={bottom}></LineImage>
        <LineImage src={support}></LineImage>
    </div>
    )
}