import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Checkbox, Form, Input, Button, Col, Row, List, Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  const [groceries, setGroceries] = useState([
    {
      item: '',
      amount: '',
      category: '',
    }
  ])

  const [grocery, setGrocery] = useState(
    {
      item: '',
      amount: '',
      category: '',
    }
  )

    //fetch the data from the route and return a json
    useEffect(() => {
      fetch('/groceries').then(res => {
        if(res.ok) {
          return res.json()
        }
        //take json response and set state equal to the json response
      }).then(jsonRes => setGroceries(jsonRes))
    })
   
    function handleChange(e) {
      //deconstruct the event
      const {name, value} = e.target;

      setGrocery(prevInput => {
        return(
          {
            ...prevInput,
            [name]: value
            
          }
        )
      })
    }

  function addGrocery(e) {
    e.preventDefault();

    const newGrocery = {
      item: grocery.item,
      amount: grocery.amount,
      category: grocery.category
    }

    axios.post('/newgrocery', newGrocery)
    alert("Grocery Item Added To List");
  }

  function deleteGrocery(id) {
    axios.delete('/delete/' + id);
    alert("Grocery Item Deleted From List")
  }

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (

    <Layout className="layout">
    <Header>
     <h1>Grocery List</h1>
     
    </Header>
    <Content style={{ padding: '0 50px' }}>
    <Row>
      <Col>
      <h1>ADD ITEM TO GROCERY LIST</h1>
      <Form>
        <Input onChange={handleChange} name="item" value={grocery.item}></Input>
        <Input onChange={handleChange} name="amount" value={grocery.amount}></Input>
        <Input onChange={handleChange} name="category" value={grocery.category}></Input>
        <Button onClick={addGrocery}>ADD ITEM</Button>
      </Form>
      </Col>

      <Col>
  
              <List
        className="demo-loadmore-list"
       
        itemLayout="vertical"
        
        dataSource={groceries}
        renderItem={item => (
          <List.Item>
            
              <List.Item.Meta
               
                title={item.item}
                description={item.amount}
              />
              <Checkbox onChange={() => deleteGrocery(item._id)}></Checkbox>
            
          </List.Item>
           )}
           />
      </Col>
      </Row>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  
    
  );
}

export default App;
