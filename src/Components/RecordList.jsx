

export default function RecordList(props) {
const getChartList = (tab) => {
  if(tab === "All__Game__Record") {
    return(
      <div className="Record__List__Container">
        <div className="List__Contents"></div>
      </div>
    )
  }
  
  if(tab === "Solo__Rank__Record") {
    return(
      <>
        <div className="Record__List__Container">
          <div className="List__Contents"></div>
        </div>
        <div className="Record__List__Container">
          <div className="List__Contents"></div>
        </div>
      </>
    )
  }

  if(tab === "Free__Rank__Record") {
    return(
      <div className="Record__List__Container">
        <div className="List__Contents"></div>
      </div>
    )
  }

  if(tab === "Normal__Game__Record") {
    return(
      <div className="Record__List__Container">
        <div className="List__Contents"></div>
      </div>
    )
  }
}

return(
  <>
    {getChartList(props.tab)}
  </>  
)
}