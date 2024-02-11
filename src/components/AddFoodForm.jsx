
import { v4 as uuidv4 } from 'uuid';
import './AddFoodForm.css';
import { useState } from "react";

function AddFoodForm({ addFoodPass }) {

        //.Name.Image.Calories.Servings + btn  => set the input names... 
    const [ name, setName ] = useState('');
    const [ image, setImage ] = useState('');
    const [ calories, setCalories ] = useState('');
    const [ servings, setServings ] = useState('');
            //button
    const [ btnName, setBtnName ] = useState(false);

        //.Name.Image.Calories.Servings + btn  => update the input names...
    const handleName = e => setName(e.target.value);
    const handleImage = e => setImage(e.target.value);
    const handleCalories = e => setCalories(e.target.value);
    const handleServings = e => setServings(e.target.value);
            // button
    const handleCreateFood = () => setBtnName(!btnName);

                        //2.handle submit form... the value of the input is taken 
                        //      from step 1. not from the input itself,
                        //      that's a difference between HTML and React...
    const handleSubmit = (e) => {
        e.preventDefault();  

        const id = uuidv4();
                        //This variable acts as /./'Module' in Express/./ only as a concept => 
                        //  it takes the valus from the updated set... not form the input itself! 
        const newFood = {
            id,
            name,
            image,
            calories,   
            servings
        };
            // sets the set...
        setName('');
        setImage('');
        setCalories('');
        setServings('');
                        //Evoke the addFoodFun through the build PROPS-'window' of 
                        //      {addFoodPass} to add the newFood.
        addFoodPass(newFood);
    };



    return(
        <div>
            <div>
                <button onClick={handleCreateFood}>{btnName ? 'Close' : 'Create Food'}</button>
            </div>
            {btnName && <div>
                            <h2>Create your favorite Food:</h2>
                            <form className="formAdd" action="" onSubmit={handleSubmit}>
                                <label> Name:
                                    <input type="text" name="name" placeholder='Salad, Fries, Drink...' value={name} onChange={handleName}/>
                                </label>
                                <br />
                                <label> Image:
                                    <input type="text" name="image" placeholder='http://...' value={image} onChange={handleImage} />
                                </label>
                                <br />
                                <label> Calories:
                                    <input type="number" name="calories" placeholder='0' value={calories} onChange={handleCalories}  />
                                </label>
                                <br />
                                <label>Servings:
                                    <input type="number" name="servings" placeholder='1' value={servings} onChange={handleServings} />
                                </label>
                                <br />
                                <button type="submit">Create</button>      
                            </form>
                        </div>
            }
        </div>
    )
}

export default AddFoodForm;