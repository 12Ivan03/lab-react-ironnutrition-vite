
import './FoodBox'

function FoodBox({ foodPass, deleteFoodPass }) {

    const foodPassReverse = [...foodPass].reverse()
    //const { food } = props
    return(
        <div className='in-food-box-container'>
            <div className="titel-food-box">
                <h1>Food Box</h1>
            </div>

            {foodPassReverse.length === 0 ? <div> <p>No food avilable.</p> <p>You have delete all the food!</p> </div> : <p></p>}

            {foodPassReverse.map((x) => {

                return(
                    <div key={x.id}>
                        <p>{x.name}</p>

                        <img style={{height: "8em"}} src={x.image} />

                        <p>Calories: {x.calories}</p>
                        <p>Servings {x.servings}</p>

                        <p>
                            <b>Total Calories: {x.servings * x.calories} </b> kcal
                        </p>

                        <button onClick={() => deleteFoodPass(x.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FoodBox