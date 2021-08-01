import React from "react";
import { Checkbox, List, Layout, Typography} from 'antd';

const { Title, Text} = Typography;

function ViewAll(props) {
    
    return (
       
        <List  
         
            size="large"
            bordered
            dataSource={props.groceries}
            renderItem={item => (

            <List.Item>

                <Title>{item.item}</Title>

                <Text type="warning">Est. Price: ${item.price}</Text>
                    
                <Checkbox onChange={() => props.deleteGrocery(item._id)}></Checkbox>
                    
            </List.Item>

        )}

        />
        
    )
}

export default ViewAll