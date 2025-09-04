import { useEffect, useState } from "react";
import "./App.scss";
import { Day, emptyMeals, Meal } from "./scripts/interfaces";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [savedMeals, setSavedMeals] = useState<Day[]>(() => {
    const saved = localStorage.getItem("SavedMeals");
    return saved ? JSON.parse(saved) : emptyMeals;
  });
  const [savedNotes, setSavedNotes] = useState<string>(() => {
    const saved = localStorage.getItem("SavedNotes");
    return saved ? JSON.parse(saved) : "";
  });
  const [editingNotes, setEditingNotes] = useState<boolean>(false);

  const [newIngredients, setNewIngredients] = useState<string>("");
  const [editingMealId, setEditingMealId] = useState<string | null>(null);

  // modale
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const activeDay = savedMeals.find((day) => day.index === activeIndex)!;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const fileContents = reader.result as string;
          const parsedData = JSON.parse(fileContents);

          if (
            Array.isArray(parsedData) &&
            parsedData.length === savedMeals.length
          ) {
            setSavedMeals(parsedData);
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

  const downloadJSON = () => {
    const data = JSON.stringify(savedMeals);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "diet.json";
    link.click();
  };

  const changeDayShown = (meal: Day) => {
    setActiveIndex(meal.index);
  };

  const modifyIngredients = (meal: Meal) => {
    const modifiedMeals = savedMeals.map((day) => {
      if (day.index === activeDay.index) {
        return {
          ...day,
          meals: day.meals.map((m) => {
            if (m.id === meal.id) {
              return {
                ...m,
                ingredients: newIngredients,
              };
            }
            return m;
          }),
        };
      }
      return day;
    });
    setSavedMeals(modifiedMeals);
    setEditingMealId(null);
  };

  useEffect(() => {
    setSavedNotes(
      "Quantità della mattina: pane 15gr, gallette di mais 10gr, fette integrali wasa 12gr, salumi 20gr, oppure bresaola 15gr"
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("SavedMeals", JSON.stringify(savedMeals));
  }, [savedMeals]);

  return (
    <div className="myApp">
      {isModalOpen && (
        <div className="notes-modal">
          {savedNotes}
          {/* fare meglio */}
          <div className="notes-add-btn">
            <button
              className="modify-btn"
              onClick={() => {
                setEditingNotes(true);
              }}
            >
              ✒️
            </button>
          </div>
          <button onClick={() => setIsModalOpen(false)} className="closeBtn">
            x
          </button>
        </div>
      )}

      <div className="app-container">
        {/* <div className="background-container">
          <img src="/mobilebg.webp" alt="" className="background-img" />
        </div> */}
        <div className="weekdays">
          {savedMeals.map((meal, i) => (
            <div
              className={`day-label ${activeIndex == i ? "active-day" : ""}`}
              key={`day${i}`}
              onClick={() => changeDayShown(meal)}
            >
              {meal.day}
            </div>
          ))}
        </div>
        <div className="dayShow">
          {activeDay.meals.map((meal, i) => (
            <div key={`meal${i}-day${activeDay.index}`}>
              <div className="meal-type"> {meal.type}</div>
              {editingMealId === meal.id ? (
                <div className="meal-ingredients">
                  <input
                    type="text"
                    value={newIngredients}
                    onChange={(e) => setNewIngredients(e.target.value)}
                  />
                  <button
                    className="modify-btn"
                    onClick={() => modifyIngredients(meal)}
                  >
                    ✔️
                  </button>
                </div>
              ) : (
                <div className="meal-ingredients">
                  {meal.ingredients}
                  <button
                    className="modify-btn"
                    onClick={() => {
                      setEditingMealId(meal.id);
                      setNewIngredients(meal.ingredients);
                    }}
                  >
                    ✒️
                  </button>
                </div>
              )}
            </div>
          ))}
          <div className="newHeader">
            <div className="button-container">
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
              <button onClick={downloadJSON}>💾</button>
              <button
                className="buttonStyle"
                onClick={() => setIsModalOpen(true)}
              >
                Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
