import React from 'react'
import './ChampionsList.css'
import Champion from './Champion'
import useChampions from './useChampions'
const ChampionsList = ({CheckLine}) => {
  const championsList = useChampions(CheckLine);
  return (
    <div className='OPList_Box'>
      <div className='Champion_HeaderBox'>
        <span className='HeaderBox_Rank'>순위</span>
        <span className='HeaderBox_Champion'>챔피언</span>
        <span className='HeaderBox_WinRate'>승률</span>
        <span className='HeaderBox_PickRate'>픽률</span>
        <span className='HeaderBox_BanRate'>밴률</span>
        <span className='HeaderBox_Counter'>카운터</span>
      </div>
      {
        championsList.map((data, index) => {
          return <Champion key={index} data={data}/>
        })
      }
      
    </div>
  )
}

export default ChampionsList