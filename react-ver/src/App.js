import Header from './components/Header';
import Menu from './components/Menu';
import Orders from './components/Orders.js';
import {menu} from "./MenuInfo.js";
//import './App.css';

function SelectPageHandler(submenu){
  return Object.entries(menu);
}



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Menu menupage={SelectPageHandler}></Menu>
      <Orders></Orders>
    </div>
  );
}

export default App;
