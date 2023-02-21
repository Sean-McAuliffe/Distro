
type statProps = {
  title:string,
  stat: number|string,
  updateDesc:string
}

const StatCard = (props:statProps) => {
  return (
    <div className="stat w-1/3 h-36 bg-base-100 shadow rounded-lg">
      <div className="stat-figure text-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <div className="stat-title">{props.title}</div>
      <div className="stat-value">{props.stat}</div>
      <div className="stat-desc">{props.updateDesc}</div>
    </div>
  )
}



export default StatCard;