// import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import List from './components/List/List';
import { useState } from 'react';

function App() {

  let [list, setList] = useState([]);

  function addToList(newItem) {

      setList([...list, newItem]);
      console.log(list);

  }

  return (
    <div className="App" style={{border: 'solid 1px red'}}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Purple Rock Scissors Code Test</h1>
      </header>
      <Input addToList={addToList} />
      <List list={list}/>
    </div>
  );
}

export default App;
