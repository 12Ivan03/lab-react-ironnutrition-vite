
import AddFoodForm from './AddFoodForm';
import FoodBox from './FoodBox';
import foodsData from '../foods.json'
import { useState } from 'react';

function FoodList() {

const [food, setFood] = useState(foodsData)
  //const [addFood, setAddFood] = useState(foodsData) 

  const addFoodFun = (addNewFood) => {
    const addedFood = [...food, addNewFood].reverse()

    setFood(addedFood)
  };

  const deleteFood = (Foodid) => {
    const filterDelFood = food.filter(foods => {
      return foods.id !== Foodid
    })
    setFood(filterDelFood)
  };


  return (
    <div>
        <AddFoodForm addFoodPass={addFoodFun} />
        <FoodBox foodPass={food} deleteFoodPass={deleteFood}/>
    </div>
  )
}

export default FoodList;