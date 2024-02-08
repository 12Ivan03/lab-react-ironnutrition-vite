
import FoodBox from './components/FoodBox';
import foodsData from './foods.json'
import { useState } from 'react';
import "./App.css";

function App() {
  const [food, setFood] = useState(foodsData)

  const deleteFood = (Foodid) => {
    const filterDelFood = food.filter(foods => {
      return foods.id !== Foodid
    })
    setFood(filterDelFood)
  }

  return (
    <div className="App">
      <p> Done with 1, 2, 3 and 4 go throught the videos of last night and do the rest of the LAB</p>
      <FoodBox foodPass={food} deleteFoodPass={deleteFood}/>
    </div>
  );
}

export default App;
