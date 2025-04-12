import Calendar from "./components/calendar/Calendar";
import DaysList from "./components/daysList/DaysList";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="myApp">
        <div className="container">
          <Header />
          <DaysList />
          <Calendar />
        </div>
      </div>
    </>
  );
}

export default App;
