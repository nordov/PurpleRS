import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import List from './components/List/List';
import { useState } from 'react';

function App() {

  let [list, setList] = useState([]);
  let [toggleSort, setToggleSort] = useState(false);
  let [toggleTimeStamp, setToggleTimeStamp] = useState(true);

  
  function sortList(){

    let sortedList = [...list];

    sortedList.sort((a,b) => {
      if(a.value.toLowerCase() < b.value.toLowerCase()) return -1;
      if(a.value.toLowerCase() > b.value.toLowerCase()) return 1;
      return 0;
    });

    return sortedList;
  }
  
  function addToList(newItem) {

    setList([...list, newItem]);

  }

  function clearList() {
    setList([]);
  }

  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Code Test</h1>
      </header>
      <Input addToList={addToList} />
      <div className="list-controls">
          <button 
              type="button"
              onClick={() => setToggleSort(!toggleSort)}
          >
              { !toggleSort ? "Sort Alphabetically" : "Sort by entry"}
          </button>

          <button 
              type="button"
              onClick={() => setToggleTimeStamp(!toggleTimeStamp)}
          >
              { toggleTimeStamp ? "Hide Times" : "Show Times"}
          </button>          
          
          <button 
              type="button"
              onClick={clearList}
          >
              Clear List
          </button>
      </div>
      <List 
        list={ !toggleSort ? list : sortList(list) } clearList={clearList}
        hideTimeStamp={toggleTimeStamp}  
      />
    </div>
  );
}

export default App;
