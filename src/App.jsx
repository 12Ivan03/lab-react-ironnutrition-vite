
// import AddFoodForm from './components/AddFoodForm';
// import FoodBox from './components/FoodBox';
// import foodsData from './foods.json'
// import { useState } from 'react';
import FoodList from "./components/FoodList";
import "./App.css";

function App() {
  // const [food, setFood] = useState(foodsData)
  // //const [addFood, setAddFood] = useState(foodsData) 

  // const addFoodFun = (addNewFood) => {
  //   const addedFood = [...food, addNewFood].reverse()

  //   setFood(addedFood)
  // };

  // const deleteFood = (Foodid) => {
  //   const filterDelFood = food.filter(foods => {
  //     return foods.id !== Foodid
  //   })
  //   setFood(filterDelFood)
  // };

  return (
    <div className="App">
      <FoodList />
    </div>
  );
}

export default App;
