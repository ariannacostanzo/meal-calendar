import { useState } from "react";
import Calendar from "./components/calendar/Calendar";
import DaysList from "./components/daysList/DaysList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const totalBoxes = 7 * 5;
  const [texts, setTexts] = useState(() => {
    const saved = localStorage.getItem("mealNotes");
    return saved ? JSON.parse(saved) : Array(totalBoxes).fill("");
  });

  const downloadJSON = () => {
    const data = JSON.stringify(texts);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "mealsData.json";
    link.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const fileContents = reader.result as string;
          const parsedData = JSON.parse(fileContents);

          if (Array.isArray(parsedData) && parsedData.length === texts.length) {
            setTexts(parsedData);
          } else {
            alert(
              "Il formato del file non è corretto o la lunghezza dei dati non corrisponde."
            );
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          alert("Errore nel parsing del file JSON.");
        }
      };
      reader.readAsText(file);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (index: any, value: string) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setTexts(newTexts);
  };

  return (
    <div className="myApp">
      <div className="container">
        <Header
          downloadJSON={downloadJSON}
          handleFileUpload={handleFileUpload}
        />
        <DaysList />
        <Calendar texts={texts} handleChange={handleChange} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
