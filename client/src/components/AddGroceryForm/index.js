import React from "react";
import { Checkbox, Form, Input, Button, Col, Row, List, Layout } from 'antd';

// input names are required to parse from body req in our server
//value is set to whatever value was saved in state for grocery
function AddGroceryForm(props) {

    return (
        <div>
                   <h1>ADD ITEM TO GROCERY LIST</h1>
               <Form>
                 <Input onChange={props.handleChange} name="item" value={props.grocery.item}></Input>
                 <Input onChange={props.handleChange} name="amount" value={props.grocery.amount}></Input>
                 <Input onChange={props.handleChange} name="category" value={props.grocery.category}></Input>
                 <Button onClick={props.addGrocery}>ADD ITEM</Button>
               </Form> 

        </div>
   
    )

}

export default AddGroceryForm


