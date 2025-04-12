import { meals } from "../../scripts/interfaces";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        {meals.map((meal, i) => (
          <div className="mealType" key={`meal${i}`}>
            {meal}
          </div>
        ))}
      </div>
    </>
  );
};
export default Sidebar;
