import './Input.css';

function Input(){
    return (
        <div className="input">
            <input type="text" name="entry" id="entry" value="" placeholder="Enter String Here"></input>
            <button type="button">Add to List</button>
        </div>
    );
}

export default Input;