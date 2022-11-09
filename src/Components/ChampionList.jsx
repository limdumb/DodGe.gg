import Position from "./Position"

export default function ChampionList() {
    return (
        <div className="Champion__Container">
            <Position />
            <div className="Champion__List">
                <div>
                    <div className="Search__Champ">
                        <label>챔피언검색: </label>
                        <input type="text" placeholder="챔피언을 검색하세요."></input>
                    </div>
                    <div>
                        <span className="champ">챔피언</span>
                        <span>가격</span>
                    </div>
                </div>
            </div>
        </div>
    )
}