import  React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import GroceryList from "./pages/GroceryList";
import NavBar from "./components/NavBar";
import NoMatch from "./pages/NoMatch";
import './App.css';
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
        <NavBar />
        </Header>
        <Content style={{ minHeight: '900px'}}>
        <Switch>
          
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/groceryList" component={GroceryList} />
          <Route component={NoMatch} />
          
        
        </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', position: "sticky", background: '#fff' }} > Developed by Catalina Williams www.hirecatalina.com </Footer>
      </Layout>
    </Router>
  )
}

export default App;

