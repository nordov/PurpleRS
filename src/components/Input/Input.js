import './Input.css';
import { useState } from 'react';


function Input({ addToList }){
    
    let [newInput, setNewInput] = useState({ value: ''});

    function addItem() {
        addToList(newInput);
        setNewInput({value: ''});
    }

    return (
        <div className="input">
            <input 
                type="text" 
                name="entry" 
                id="entry" 
                value={newInput.value} 
                onChange={(event) => {setNewInput({value: event.target.value})}}
                placeholder="Enter String Here">
            </input>

            <button 
                type="button"
                onClick={addItem}
            >
                Add to List
            </button>
        </div>
    );
}

export default Input;