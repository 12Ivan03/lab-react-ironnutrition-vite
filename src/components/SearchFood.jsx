
import './SearchFood.css'
import { useState } from "react";

function SearchFood({ searchFoodFunPass, foodOption }) {

//search strings + search alphabetical letter menu + button for opening and closing
    const [ input, setInput ] = useState('');
    const [ selectedLetter, setSelectedLetter] = useState('');
    const [ btnMenu , setBtnMenu ] = useState(false);

//search strings + search alphabetical letter menu + button for opening and closing
    const handleInput = e => {
        setInput(e.target.value);
        searchFoodFunPass(e.target.value);
    }
    const handleOptions = e => {
        setSelectedLetter(e.target.value);
        searchFoodFunPass(e.target.value);
    };
    const handleClick = () => setBtnMenu(!btnMenu);

    //reverse search option menu
    const optionSearchfood = foodOption.reverse();   //"abcdefghijklmnopqrstuvwxyz".split(''); // split makes it an arr.

    return(
        <div>
            <div>
                <button onClick={handleClick}>{btnMenu ? 'Close menu' : 'Search Manu' }</button>
            </div>

            {btnMenu && <div>
                            <h2>Search Food</h2>
                            <label>
                                <input type="search" name="search" value={input} onChange={handleInput} placeholder="Search..."/>
                            </label>
                            <br />
                            <br />
                            <label> All Foods:
                                <select value={selectedLetter} onChange={handleOptions}>
                                    <option key='All' value='All'>All</option>
                                    {optionSearchfood.map((letter) => {
                                        return(
                                            <option key={letter.name} value={letter.name}>{letter.name.toUpperCase()}</option>
                                        )
                                    })}
                                </select>
                            </label>
                        </div>
            }
        </div>
    );
}

export default SearchFood;