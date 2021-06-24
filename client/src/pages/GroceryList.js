import { React, useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Typography } from 'antd';



import ViewAll from "../components/ViewAll";
import AddGroceryForm from "../components/AddGroceryForm"
const { Text } = Typography
const GroceryList = () => {

     //HERE WE ARE USING STATE WHICH AT FIRST IS EMPTY BUT 
    // WILL BE USED TO STORE DATA COLLECTED FROM MONGODB ATLAS 
    // NOTE THE ARRAY OF OBJECTS
  const [groceries, setGroceries] = useState([
    {
      item: '',
      price: ''
    }
  ]);

  //SAVES DATA INTENDED TO BE STORED IN THE DB 
  //NOTE THE SINGLE OBJECT
  const [grocery, setGrocery] = useState(
    {
      item: '',
      price: ''
    }
  );

  const priceTotal = groceries.reduce(function(prev, cur) {
    return prev + cur.price;
  }, 0);


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
            price: grocery.price

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
       
            
             
           <Row>
         
           <Col span={12}>

               
             
        <AddGroceryForm 
      
        grocery={grocery} 
        handleChange={handleChange}
        addGrocery={addGrocery}
        
        />
      <Text>Budget Total: {priceTotal}</Text>

        </Col>  

   
      
            
           <Col span={12}>
             
               <ViewAll 
       
        groceries={groceries}
        deleteGrocery={deleteGrocery}
        
        />
  
          
  </Col>    
  </Row>
              
          
             
          
    )
};

export default GroceryList