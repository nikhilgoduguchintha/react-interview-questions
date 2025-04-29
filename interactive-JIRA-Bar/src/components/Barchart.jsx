import { useEffect, useState } from "react";

const Bar = ({ name, ticketCount, colour, height }) => {
  return (
    <div
      className="bar"
      style={{ backgroundColor: `${colour}`, height: `${height}%` }}
    >
      <div className="legend">
        {name} : {ticketCount}
      </div>
    </div>
  );
};

const Barchart = ({ data }) => {
  const [chartData, setData] = useState(() => data);
  const maxTicketCount = () => {
    let max = 0
    data.map( item => {
        max = Math.max(max,item.ticketCount)
    })
    return max
  };
  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <div>
      <div className="chart">
        {chartData.map((item, index) => {
          return (
            <Bar height={(item.ticketCount / maxTicketCount()) * 100} {...item} />
          );
        })}
      </div>
      <div className="x-label">Departments</div>
      <div className="y-label">No of tickets</div>
    </div>
  );
};

export default Barchart;
