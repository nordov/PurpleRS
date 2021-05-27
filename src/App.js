// import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import List from './components/List/List';

function App() {
  return (
    <div className="App" style={{border: 'solid 1px red'}}>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Purple Rock Scissors Code Test</h1>
      </header>
      <Input />
      <List />
    </div>
  );
}

export default App;
