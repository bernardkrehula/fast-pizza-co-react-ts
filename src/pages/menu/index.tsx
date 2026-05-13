import { useQuery } from "@tanstack/react-query";
import "./index.css";
import { requestMenu } from "../../api/requestMenu";
import Meal from "./meal";

const Menu = () => {
  const { data: menu, isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: () => requestMenu(),
  });
  if (isLoading) return null;

  return (
    <main className="menu">
      <ul className="menu-list">
        {menu.data.map((meal) => {
          const { id } = meal;

          return <Meal key={id} meal={meal} />;
        })}
      </ul>
    </main>
  );
};
export default Menu;
