import React from "react";
import { Form, Input, Button } from 'antd';



// input names are required to parse from body req in our server
//value is set to whatever value was saved in state for grocery
function AddGroceryForm(props) {

    return (
     
                
        <Form layout="inline">

            <Form.Item>

                <Input  onChange={props.handleChange} name="item" value={props.grocery.item}></Input>
                
            </Form.Item> 
            <Form.Item>

                <Input type="number" onChange={props.handleChange} name="price" value={props.grocery.price}></Input>

            </Form.Item> 
                 
                 
                
                 
                
                    <Form.Item>
                    <Button onClick={props.addGrocery}>ADD ITEM</Button>

                    </Form.Item>
                 
              
                 
               </Form> 
              
       
   
    )

}

export default AddGroceryForm


