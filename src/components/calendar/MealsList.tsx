import "./mealsList.scss";
interface MealsListProps {
  texts: string[];
  handleChange: (index: number, value: string) => void;
}
const MealsList: React.FC<MealsListProps> = ({ texts, handleChange }) => {
  const totalBoxes = 7 * 5;

  return (
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
  );
};
export default MealsList;
