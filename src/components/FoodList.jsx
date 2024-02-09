
import './FoodList.css'
import AddFoodForm from './AddFoodForm';
import FoodBox from './FoodBox';
import foodsData from '../foods.json'
import { useState } from 'react';

function FoodList() {

const [food, setFood] = useState(foodsData)
  //const [addFood, setAddFood] = useState(foodsData) 

  const addFoodFun = (addNewFood) => {
    const addedFood = [...food, addNewFood]

    setFood(addedFood)
  };

  const deleteFood = (Foodid) => {
    const filterDelFood = food.filter(foods => {
      return foods.id !== Foodid
    })
    setFood(filterDelFood)
  };


  return (
    <div className='food-list-container'>
        <div className='add-food-container'>
            <AddFoodForm addFoodPass={addFoodFun} />    
        </div>
        <div className='food-box-container'>
            <FoodBox foodPass={food} deleteFoodPass={deleteFood}/>
        </div>
    </div>
  )
}

export default FoodList;