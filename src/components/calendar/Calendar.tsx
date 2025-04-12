import "./calendar.scss";
import MealsList from "./MealsList";
import Sidebar from "./Sidebar";

const Calendar = () => {
  return (
    <>
      <div className="calendar-container">
        <Sidebar></Sidebar>
        <MealsList></MealsList>
      </div>
    </>
  );
};
export default Calendar;
