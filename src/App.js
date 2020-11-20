import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './Components/MenuComponent';
import './App.css';
import {DISHES} from './Shared/dishes';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes: DISHES
    };
  }
// function App() {
  render(){
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */ }
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Reisotorante Con Fusion</NavbarBrand>
      </div>
      </Navbar> 
      <Menu dishes={this.state.dishes} />  
    </div>
  );
}
}
export default App;
