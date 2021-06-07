import React from "react";
import { Empty, Button } from 'antd';

const NoMatch = () => {

    return (

        <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        404 PAGE NOT FOUND
      </span>
    }
  >
    <Button href="/groceryList" type="primary">Return To Grocery List</Button>
  </Empty>


             

       

          
          
      
    
    )
}

export default NoMatch

//<Heading alignSelf="center" margin="none">404 Page Not Found</Heading>