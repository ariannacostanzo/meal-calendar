import { useEffect, useState } from "react";
import "./calendar.scss";
import MealsList from "./MealsList";
import Sidebar from "./Sidebar";

const Calendar = () => {
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
            console.log(parsedData);
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

  useEffect(() => {
    localStorage.setItem("mealNotes", JSON.stringify(texts));
  }, [texts]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (index: any, value: string) => {
    const newTexts = [...texts];
    newTexts[index] = value;
    setTexts(newTexts);
  };
  return (
    <>
      <div className="calendar-container">
        <Sidebar></Sidebar>
        <MealsList texts={texts} handleChange={handleChange}></MealsList>
      </div>
      <div className="button-container">
        <button onClick={downloadJSON}>💾</button>{" "}
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          style={{ display: "none" }}
          id="file-upload"
        />
        <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
          📤 Importa JSON
        </label>
      </div>
    </>
  );
};
export default Calendar;
