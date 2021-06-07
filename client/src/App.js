import  React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GroceryList from "./pages/GroceryList";
import NavBar from "./components/NavBar";
import NoMatch from "./pages/NoMatch";
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/groceryList" component={GroceryList} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;

