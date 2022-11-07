

export default function RecordList(props) {
const getChartList = (tab) => {
  if(tab === "All__Game__Record") {
    return(
      <div className="Record__List__Container">
        <div className="List__Contents">전체큐</div>
      </div>
    )
  }
  
  if(tab === "Solo__Rank__Record") {
    return(
      <>
        <div className="Record__List__Container">
          <div className="List__Contents">자랭</div>
          <div className="List__Contents">자랭</div>
        </div>
      </>
    )
  }

  if(tab === "Free__Rank__Record") {
    return(
      <div className="Record__List__Container">
        <div className="List__Contents">솔랭</div>
      </div>
    )
  }

  if(tab === "Normal__Game__Record") {
    return(
      <div className="Record__List__Container">
        <div className="List__Contents">일반</div>
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