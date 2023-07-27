import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { UserOutlined, LogoutOutlined, MenuOutlined } from '@ant-design/icons';
import "../components/Header.css"

const { Header } = Layout;

const DummyHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const showSidebarHandler = () => {
    setShowSidebar(true);
  };

  const hideSidebarHandler = () => {
    setShowSidebar(false);
  };

  return (
    <Header>
      <div className="logo">
        {/* Dummy logo */}
      </div>
      <div className="desktop-menu">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Contact</Menu.Item>
          <Menu.Item key="4"> <div className="user-actions">
          {isLoggedIn ? (
            <>
              <Button type="primary" shape="round" icon={<UserOutlined />}>
                Profile
              </Button>
              <Button
                type="primary"
                shape="round"
                icon={<LogoutOutlined />}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              type="primary"
              shape="round"
              icon={<UserOutlined />}
              onClick={handleLogin}
            >
              Login
            </Button>
          )}
        </div></Menu.Item>
        </Menu>
       
      </div>
      <div className="mobile-menu" >
      <Menu theme="dark" mode="horizontal"  >
      <Menu.Item key="1" >
              Logo
            </Menu.Item>
      <Menu.Item key="2" >
        <Button icon={<MenuOutlined />} onClick={showSidebarHandler} />
              
            </Menu.Item>


      </Menu>

           

        <Drawer
          placement="left"
          closable={false}
          onClose={hideSidebarHandler}
          open={showSidebar}
          className="mobile-drawer"
        >
          <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<LogoutOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </Header>
  );
};

export default DummyHeader;
