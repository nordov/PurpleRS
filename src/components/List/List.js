import './List.css';

function List({list, clearList}) {

    return (
        <div className="list">
            <div className="list-items">
                {
                    list.map((item, idx) => {
                        return <li key={idx}>{item.value}</li>;
                    })
                }
            </div>
        </div>
    );

}

export default List;