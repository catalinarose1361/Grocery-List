import React from "react";
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

function NavBar() {

  return (

    <Menu mode="horizontal">
      
      <Menu.Item icon={<HomeOutlined />}>

        <a href="/" >

          Home Page

        </a>

      </Menu.Item>

    </Menu>

  )
  
}

export default NavBar