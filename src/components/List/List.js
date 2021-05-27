import './List.css';

function List() {

    return (
        <div className="list">
            <div className="sort-controls">
                <button type="button">Sort by entry</button>
                <button type="button">Sort alphabetically</button>
                <button type="button">Clear List</button>
            </div>
            <div className="list-items">
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
            </div>
        </div>
    );

}

export default List;