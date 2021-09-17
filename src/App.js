import React from "react";
import { Link, Route } from "react-router-dom";
import PizzaForm from "./components/PizzaForm";

const App = () => {



  return (
    <>
      <h1>Lambda Eats</h1>
      <Route exact path='/'>
        <Link to='/pizza' style={{style:'inherit'}} id='order-pizza'><button>Order Pizza</button></Link>
      </Route>
      <Route path='/pizza'>
        <PizzaForm/>
      </Route>
    </>
  );
};
export default App;
