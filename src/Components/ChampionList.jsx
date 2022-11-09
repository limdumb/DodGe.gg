import Position from "./Position"

export default function ChampionList() {
    return (
        <div className="champion_container">
            <Position />
            <div className="champion_list">
                <div>
                    <div className="search_champ">
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