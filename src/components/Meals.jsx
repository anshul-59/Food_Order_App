import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
  const [leadedMeals, setleadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //...
      }
      const meals = await response.json();
      setleadedMeals(meals);
    }

    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {leadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
