import styled from 'styled-components'

const LineImage = styled.img`
    height: 40px;
    width: 40px;
    cursor: pointer;
`
//스프라이트 이미지로 구현할 것.
export default function SidePosition() {
    return (
        <div className="position_container">
            <LineImage src={process.env.PUBLIC_URL + "/Image/all.jpg"}></LineImage>
            <LineImage src={process.env.PUBLIC_URL + "/Image/top.jpg"}></LineImage>
            <LineImage src={process.env.PUBLIC_URL + "/Image/jungle.jpg"}></LineImage>
            <LineImage src={process.env.PUBLIC_URL + "/Image/mid.jpg"}></LineImage>
            <LineImage src={process.env.PUBLIC_URL + "/Image/bottom.jpg"}></LineImage>
            <LineImage src={process.env.PUBLIC_URL + "/Image/support.jpg"}></LineImage>
        </div>
    )
}