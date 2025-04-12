import "./calendar.scss";
import MealsList from "./mealsList";
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
