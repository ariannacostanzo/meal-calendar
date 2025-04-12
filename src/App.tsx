import Calendar from "./components/calendar/Calendar";
import DaysList from "./components/daysList/DaysList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="myApp">
        <div className="container">
          <Header />
          <DaysList />
          <Calendar />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
