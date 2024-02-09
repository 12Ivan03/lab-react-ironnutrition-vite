
import './SearchFood.css'
import { useState } from "react";

function SearchFood({ searchFoodFunPass, foodOption }) {

//search strings
    const [ input, setInput ] = useState('');
    const handleInput = e => setInput(e.target.value);

    const handleSubmite = (e) => {
        e.preventDefault();
            //  console.log('handleSubmite from the search food ===> ', input)
        searchFoodFunPass(input);
        setInput('');
    };

// search alphabetical letter menu 
    const [ selectedLetter, setSelectedLetter] = useState('');
    const handleAlphabet = e => {
        setSelectedLetter(e.target.value);
            //console.log("e.target.value from inside teh searchFood", e.target.value);
        searchFoodFunPass(e.target.value);
    };

    const alphabet = foodOption.reverse()
    //"abcdefghijklmnopqrstuvwxyz".split(''); // split makes it an arr.

// button for opening and closing
    const [ searchMenu , setSearchMenu ] = useState('close-search')
    const [ btnMenu , setBtnMenu ] = useState('Search Menu')

    const handleClick = () => {
        console.log('searchMenu =>', searchMenu)
        if(searchMenu === 'close-search') {
            setSearchMenu('open-search');
            setBtnMenu('Close menu');
        } else {
            setSearchMenu('close-search');
            setBtnMenu('Search Manu');
        }
        
    }

    return(
        <div>
            <div>
                <button onClick={handleClick}>{btnMenu}</button>
            </div>


            <div className={searchMenu}>
                <h2>Search Food</h2>
                <form onSubmit={handleSubmite}>
                    <label>
                        <input type="search" name="search" value={input} onChange={handleInput} placeholder="Search..."/>
                    </label>
                    <button type="submit">Search</button>
                </form>
                <br />
                <label> All Foods:
                    <select value={selectedLetter} onChange={handleAlphabet}>
                        <option key='All' value='All'>All</option>
                        {alphabet.map((letter) => {
                            return(
                                <option key={letter.name} value={letter.name}>{letter.name.toUpperCase()}</option>
                            )
                        })}
                    </select>
                </label>
            </div>
        </div>
    );
}

export default SearchFood;