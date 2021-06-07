import  React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GroceryList from "./pages/GroceryList";
import NavBar from "./components/NavBar";
import NoMatch from "./pages/NoMatch";
import './App.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Router>
      <Layout>
        <Header>
        <NavBar />
        </Header>
        <Content>
        <Switch>
          
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/groceryList" component={GroceryList} />
          <Route component={NoMatch} />
          
        
        </Switch>
        </Content>
        <Footer></Footer>
      </Layout>
    </Router>
  )
}

export default App;

