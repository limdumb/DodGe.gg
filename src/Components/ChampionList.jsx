import Position from "./Position"

export default function ChampionList() {
    return (
        <div className="champion_container">
            <Position />
            <div className="champion_list">
                <div>
                    <div className="search_champ">
                        챔피언검색: <input type="text" placeholder="챔피언을 검색하세요."></input>
                    </div>
                    <tr>
                        <th className="champ">챔피언</th>
                        <th>가격</th>
                    </tr>
                </div>
            </div>
        </div>
    )
}