import React, {useState} from 'react'
import Tab from '../TapComponent/Tab'
import ChampionsList from './ChampionsList'
const OPList = () => {
  const [line, setLine] = useState([
    "TOP",
    "JUNGLE",
    "MID",
    "ADC",
    "SUPPORT"
  ]);
  const [CheckLine, setCheckLine] = useState("TOP")
  return (
    <>
      <Tab line={line} setCheckLine ={setCheckLine}/>
      <ChampionsList CheckLine={CheckLine}/>
    </>
  )
}

export default OPList