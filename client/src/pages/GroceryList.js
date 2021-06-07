import { React, useState, useEffect } from "react";
import axios from "axios";
import { Checkbox, Form, Input, Button, Col, Row, List, Layout } from 'antd';


import ViewAll from "../components/ViewAll";
import AddGroceryForm from "../components/AddGroceryForm"
const { Header, Content, Footer } = Layout;
const GroceryList = () => {

     //HERE WE ARE USING STATE WHICH AT FIRST IS EMPTY BUT 
    // WILL BE USED TO STORE DATA COLLECTED FROM MONGODB ATLAS 
    // NOTE THE ARRAY OF OBJECTS
  const [groceries, setGroceries] = useState([
    {
      item: " ",
      amount: " ",
      category: " "
    }
  ]);

  //SAVES DATA INTENDED TO BE STORED IN THE DB 
  //NOTE THE SINGLE OBJECT
  const [grocery, setGrocery] = useState(
    {
      item: " ",
      amount: " ",
      category: " ",
    }
  );

  //FETCH THE MONGODB DATA FROM THE ROUTE AND SET THE 
  //RESPONSE IN JSON FORMAT
  useEffect(() => {

    fetch('/groceries').then(res => {

        if(res.ok) {

            return res.json()

        }

    //SET STATE 'grocerys' EQUAL TO JSON RESPONSE
    }).then(jsonRes => setGroceries(jsonRes))

  });

    //handleChange TRACKS WHAT IS BEING TYPED
    // 'e' HAS TWO PEICES OF DATA, name AND value OF TEXT INPUT
    function handleChange(e) {

        const {name, value} = e.target;

        setGrocery(prevInput => {

            return (

                {

                ...prevInput,
                [name]: value

                }

            );

        });

    };

    function addGrocery(e) {

        e.preventDefault();

        alert("grocery added");

        //GETS VALUES FROM STATE VARIABLE 'grocery'
        const newGrocery = {

            item: grocery.item,
            amount: grocery.amount,
            category: grocery.category

        };

        //SEND POST REQUEST TO BACKEND CONTAINING THE DATA IN newGrocery
        axios.post('/newGrocery', newGrocery);

    };

    //THIS FUNCTION SENDS A DELETE REQUEST TO THE BACKEND CONTAINING 
    //THE SPECIFIC ID OF THE DELETE BUTTON BEING CLICKED
    function deleteGrocery(id) {

        axios.delete('/delete/' + id);

        alert("grocery deleted");

    };

 

    return (
        <Layout className="layout">
             <Header>
              <h1>Grocery List</h1>
             
             </Header>
             <Content style={{ padding: '0 50px' }}>
             <Row>
               <Col>
             
        <AddGroceryForm 
      
        grocery={grocery} 
        handleChange={handleChange}
        addGrocery={addGrocery}
        
        />

   
      
            
               </Col>
        
               <Col>
             
               <ViewAll 
       
        groceries={groceries}
        deleteGrocery={deleteGrocery}
        
        />
  
          
                       {/* <List
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
                */}
                </Col>
               </Row>
             </Content>
             <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
           </Layout>
    )
};

export default GroceryList