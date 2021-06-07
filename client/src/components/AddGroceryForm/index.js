import React from "react";
import { Checkbox, Form, Input, Button, Col, Row, List, Layout } from 'antd';


const { Header, Footer, Sider, Content } = Layout;
// input names are required to parse from body req in our server
//value is set to whatever value was saved in state for grocery
function AddGroceryForm(props) {

    return (
     
                
               <Form layout="inline">
                  <Form.Item>
                  <Input onChange={props.handleChange} name="item" value={props.grocery.item}></Input>
                      </Form.Item> 
                 
                 
                 <Form.Item>
                 <Input onChange={props.handleChange} name="amount" value={props.grocery.amount}></Input>
                 </Form.Item>
                 
                 
              <Form.Item>
              <Input onChange={props.handleChange} name="category" value={props.grocery.category}></Input> 
              </Form.Item>
                 
                
                <Form.Item>
                <Button onClick={props.addGrocery}>ADD ITEM</Button>

                </Form.Item>
                 
              
                 
               </Form> 
              
       
   
    )

}

export default AddGroceryForm


