import React from "react";
import { Checkbox, Form, Input, Button, Col, Row, List, Layout, Card, Typography} from 'antd';

const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;
function ViewAll(props) {
    
    return(
       
            <List
                 
                 size="large"
                
                 bordered
                 dataSource={props.groceries}
                 renderItem={item => (
                   <List.Item>
                        <Title>{item.item}</Title>
                    
                     
                       <Checkbox onChange={() => props.deleteGrocery(item._id)}></Checkbox>
                    
                   </List.Item>
                    )}
                    />
       
        
    )
}

export default ViewAll