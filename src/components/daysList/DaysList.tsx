import { days } from "../../scripts/interfaces";
import "./daysList.scss";

const DaysList = () => {
  return (
    <>
      <div className="daysList">
        {days.map((day, i) => (
          <div className="day" key={`day${i}`}>
            {day}
          </div>
        ))}
      </div>
    </>
  );
};
export default DaysList;
