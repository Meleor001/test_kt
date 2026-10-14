import logo from './images/MegaMart.png';
import burger from './images/Group 2.png';
import poisk from './images/Search.png';
import list from './images/list.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={burger}/>
          <img src={logo}/> 
          <div className='Poisk'>
          <input type="text" className="search" placeholder="Search essentials, groceries and more..." />
          </div>
      </header>
    </div>
  );
}

export default App;
