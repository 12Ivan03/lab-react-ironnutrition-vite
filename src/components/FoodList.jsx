
import SearchFood from './SearchFood';
import './FoodList.css'
import AddFoodForm from './AddFoodForm';
import FoodBox from './FoodBox';
import foodsData from '../foods.json'
import { useState } from 'react';

function FoodList() {

const [food, setFood] = useState(foodsData)
const [searchFood , setSearchFood] = useState(foodsData)


        //update the "DB"
  const addFoodFun = (addNewFood) => {
    const addedFood = [...food, addNewFood]
    const searchAllFood = [...searchFood, addNewFood]

    setFood(addedFood);
    setSearchFood(searchAllFood);
  };

        // find and delete item with ID
  const deleteFood = (foodId) => { 
    const filterDelFood = food.filter(foods => {
      return foods.id !== foodId
    })
    setFood(filterDelFood)
  };

        // search and update the "DB"
  const searchFoodFun = (str) => {
    console.log(" From inside teh FoodList searchFoodFun ===> the str? is ...? ===> ", str);

    let foundFood;

    if(str === 'All' || str.length === 0){
      foundFood = searchFood;
    } 
    // else if (str.length === 1) {
    //   foundFood = searchFood.filter((food) => {
    //     return food.name[0].toLowerCase() === str.toLowerCase()
    //   });
    // } 
    else if (str.length >= 1) {
      //console.log('from the else if str.length > 1 ===>',str)
      foundFood = searchFood.filter((food) => {
        //console.log('food that is passed from the filter ', typeof(food.name))
        return food.name.toLowerCase().includes(str.toLowerCase())
      })
    }

    setFood(foundFood);
  }

  const optionFood = [...foodsData];

  return (
    <div className='food-list-container'>
        <div>
          <div className='add-food-container'>
              <SearchFood searchFoodFunPass={searchFoodFun} foodOption={optionFood}/>
              <br />
              <AddFoodForm addFoodPass={addFoodFun} />    
          </div>
        </div>
        <div className='food-box-container'>
            
            <FoodBox foodPass={food} deleteFoodPass={deleteFood}/>
        </div>
    </div>
  )
}

export default FoodList;