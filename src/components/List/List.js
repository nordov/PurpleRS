import './List.css';

function List({list, hideTimeStamp}) {

    return (
        <div className="list">
            <div className="list-items">
                {
                    list.map((item, idx) => {
                        return (
                            <li key={item.timeStamp}>
                                <span className="timestamp">
                                    { hideTimeStamp && item.timeStamp}
                                </span>
                                {item.value}
                            </li>
                        );
                    })
                }
            </div>
        </div>
    );

}

export default List;