import { useEffect } from "react";
import "./calendar.scss";
import MealsList from "./MealsList";
import Sidebar from "./Sidebar";

interface CalendarProps {
  texts: string[];
  handleChange: (index: number, value: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ texts, handleChange }) => {
  useEffect(() => {
    localStorage.setItem("mealNotes", JSON.stringify(texts));
  }, [texts]);

  return (
    <div className="calendar-container">
      <Sidebar />
      <MealsList texts={texts} handleChange={handleChange} />
    </div>
  );
};

export default Calendar;
