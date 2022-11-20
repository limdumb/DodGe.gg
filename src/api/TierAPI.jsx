// BestChampion
//  1. 금주 라인별로 승률이 가장 높은 챔피언의 로딩 이미지 사진을 사용한다.
//  2. BestChampion 같은 경우 대체적으로 정할 수 없는 기준이 없으므로 따로 롤에서 관련된 API를 제공해주지 않는다.
//  따라서 OP.GG 전적 검색 사이트에 '크롤링'이라는 것을 사용하거나 수동으로 챔피언 이미지를 바꾸어준다.



// ChampionPrice
//  1. splash이미지/이름/가격을 api로 받아온 뒤 각 포지션에 맞게 배열해 줄 수 있도록 한다.
//        splash이미지 O  /  챔피언이름 O /  가격 X (따로 알아봐야 함)
//  2. filter를 사용하여 각 포지션에 맞는 탭에 배열해 줄 수 있도록 한다.
//      어떤 기준으로 포지션을 정해주는지를 알 수 없어 추가적인 API 검색이 필요함. 
//      관련 API가 없을 시 더미데이터를 만들어 해당 챔피언 속성에 position을 부여하여 필터링 하는 수 밖에 없음.
//  3. 챔피언 검색에 챔피언 이름을 쳤을 경우 해당 챔피언을 filter하여 그 챔피언만 나올 수 있도록 한다.



// Champion
//  1.  이름을 api로 받아온 뒤 각 포지션에 맞게 배열해 줄 수 있도록 한다.
//      추가적으로 티어에 맞는 이미지와 순위를 내림차순 부여해야 한다. 티어 이미지를 api를 쓸지 생각 필요.
//  2.  챔피언의 이미지를 가로로 사용하기 때문에 따로 관련 이미지는 직접 수정하여 CSS로 부여하는 수 밖에 없음.





// 알아본 API : (http://ddragon.leagueoflegends.com/cdn/12.22.1/data/ko_KR/champion.json)
//               = 챔피언 이름, 이미지(full, splash), 태그
//             > 아직까지 이미지 제공은 해주지만 렌더가 되는지는 알 수 없음. 만약 position을 제공해주지 않는다면 태그에 position을 넣는 식으로 더미데이터 작업을 해야할 것 같음.

// 알아봐야 할 것 : Position 관련 API, 크롤링