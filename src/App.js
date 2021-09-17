import React from "react";
import { Link, Route } from "react-router-dom";
import PizzaForm from "./components/PizzaForm";
import "./App.css";

const App = () => {



  return (
    <div class='App'>
      <h1>Lambda Eats</h1>
      <Route exact path='/'>
        <Link to='/pizza' style={{style:'inherit'}} id='order-pizza'><button>Order Pizza</button></Link>
      </Route>
      <Route path='/pizza'>
        <PizzaForm/>
      </Route>
    </div>
  );
};
export default App;
