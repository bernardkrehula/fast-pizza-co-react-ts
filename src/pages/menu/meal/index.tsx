import Btn from "../../../components/ui/btn";
import "./index.css";
import type { MealType } from "../../../types/data.types.ts/MealType";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  add,
  decrement,
  increment,
  removeSelectedMeal,
} from "../../../features/counter/orders-slice";

const Meal = (meal: MealType) => {
  const { id, name, unitPrice, imageUrl, ingredients, soldOut } = meal;
  const orders = useAppSelector((state) => state.orders.orders);
  const order = orders.find((meal) => meal.id === id);
  const dispatch = useAppDispatch();
  const amount = order?.amount ?? 0;

  const increaseAmount = () => {
    dispatch(increment(id));
  };
  const decreaseAmount = () => {
    dispatch(decrement(id));
  };
  const addMeal = () => {
    dispatch(add({ id, name, unitPrice }));
  };
  const removeMeal = () => {
    dispatch(removeSelectedMeal(id));
  };

  return (
    <li className="meal" key={id}>
      <img src={imageUrl} className={soldOut ? "soldMeal" : undefined} />
      <div className="name-ingredients-price">
        <h2>{name}</h2>
        <div className="ingridients">
          {ingredients.map((ingredient: string, index: number) => {
            return (
              <h3
                key={index}
              >{`${ingredient}${ingredients.length - 1 > index ? "," : ""}`}</h3>
            );
          })}
        </div>

        {soldOut ? (
          <h4 className="sold-out">Sold out</h4>
        ) : (
          <h4 className="unit-price">€{unitPrice.toFixed(2)}</h4>
        )}
      </div>
      {!soldOut && (
        <>
          {amount != 0 && (
            <div className="meal-amount">
              <Btn type="button" onClick={decreaseAmount}>
                -
              </Btn>
              {amount}
              {/*  */}
              <Btn type="button" onClick={increaseAmount}>
                +
              </Btn>
            </div>
          )}
          {amount != 0 ? (
            <Btn type="button" onClick={removeMeal}>
              Delete
            </Btn>
          ) : (
            <Btn type="button" onClick={addMeal}>
              Add to cart
            </Btn>
          )}
        </>
      )}
    </li>
  );
};
export default Meal;
