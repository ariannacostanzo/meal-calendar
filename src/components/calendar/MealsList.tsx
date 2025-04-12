import "./mealsList.scss";
import { useEffect, useState } from "react";

const MealsList = () => {
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
      <div className="mealsList">
        {Array.from({ length: totalBoxes }).map((_, index) => (
          <div key={index} className="mealBox">
            <textarea
              value={texts[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button onClick={downloadJSON}>💾</button>
    </>
  );
};
export default MealsList;
