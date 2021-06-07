import React from "react";
import { Checkbox, Form, Input, Button, Col, Row, List, Layout } from 'antd';

function ViewAll(props) {
    
    return(
        <List
                 className="demo-loadmore-list"
               
                 itemLayout="vertical"
                
                 dataSource={props.groceries}
                 renderItem={item => (
                   <List.Item>
                    
                       <List.Item.Meta
                       
                         title={item.item}
                         description={item.amount}
                       />
                       <Checkbox onChange={() => props.deleteGrocery(item._id)}></Checkbox>
                    
                   </List.Item>
                    )}
                    />
    )
}

export default ViewAll