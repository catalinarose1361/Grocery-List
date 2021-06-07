import React from "react";
import { Checkbox, Form, Input, Button, Col, Row, List, Layout, Card } from 'antd';



const { Header, Footer, Sider, Content } = Layout;
function ViewAll(props) {
    
    return(
       
            <List
                 className="demo-loadmore-list"
                 grid={{ gutter: 9, column: 2 }}
                
                
                 dataSource={props.groceries}
                 renderItem={item => (
                   <List.Item>
                    <Card title={item.item}>
                    quantity needed:  {item.amount}
                    category: {item.category}
                    </Card>
                       <List.Item.Meta
                       
                         
                        
                       />
                       <Checkbox onChange={() => props.deleteGrocery(item._id)}></Checkbox>
                    
                   </List.Item>
                    )}
                    />
       
        
    )
}

export default ViewAll