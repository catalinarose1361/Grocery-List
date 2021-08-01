import React from "react";
import { Form, Input, Button } from 'antd';

function AddGroceryForm(props) {

    return (
           
        <Form>

            {/* INPUT NAMES ARE REQUIRED TO PARSE FROM BODY REQ IN OUR SERVER */}
            {/* VALUE IS SET TO WHATEVER VALUE WAS SAVED IN STATE FOR GROCERY */}
            <Input  onChange={props.handleChange} name="item" value={props.grocery.item}></Input>
                
            <Input onChange={props.handleChange} name="price" value={props.grocery.price} ></Input>
                
            <Button onClick={props.addGrocery}>ADD ITEM</Button>    
                 
        </Form> 

    )

}

export default AddGroceryForm


