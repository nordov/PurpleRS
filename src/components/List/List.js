import './List.css';

function List({list}) {

    let renderedList = "";

    function renerList() {
        list.forEach(item => {

        });
    }

    return (
        <div className="list">
            <div className="sort-controls">
                <button type="button">Sort by entry</button>
                <button type="button">Sort alphabetically</button>
                <button type="button">Clear List</button>
            </div>
            <div className="list-items">
                {list.map((item, idx) => {
                    return <li key={idx}>{item.value}</li>;
                })}
            </div>
        </div>
    );

}

export default List;