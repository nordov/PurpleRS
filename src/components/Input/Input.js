import './Input.css';
import { useState } from 'react';


function Input({ addToList }){
    
    let [newInput, setNewInput] = useState({ value: '', timeStamp: ''});

    function addItem() {

        let itemTimeStamp = new Date();
        
        itemTimeStamp.getTime();
        
        newInput.timeStamp = itemTimeStamp.toLocaleTimeString('en-US');

        addToList(newInput);
        setNewInput({value: ''});
    }

    return (
        <div className="item-input">
            <input 
                type="text" 
                name="entry" 
                id="entry" 
                value={newInput.value} 
                onChange={(event) => {setNewInput({value: event.target.value})}}
                placeholder="Enter String Here">
            </input>

            <input 
                type="submit"
                className="add-item"
                onClick={addItem}
                value="+">
            </input>
        </div>
    );
}

export default Input;