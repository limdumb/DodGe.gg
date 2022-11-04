import {lol} from "../dummy_data/data"

export const Profile = ()=>{
    return(
        <div>
            <img src={lol.data.Aatrox.image.full} alt="아트록스"></img>
        </div>
    )
}