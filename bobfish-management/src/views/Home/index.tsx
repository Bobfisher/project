import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '/home/page1', <PieChartOutlined />),
  getItem('Option 2', '/page2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([''])
  const {token: { colorBgContainer },} = theme.useToken();
  const navigateTo = useNavigate()

  const localtion = useLocation()

  const menuClick = (e:{key:string}) =>{
    navigateTo(e.key)
  }

  const handleOpenChange = (keys:string[]) => {
    setOpenKeys([keys[keys.length -1]])
  }
  
  useEffect(() => {
    console.log(localtion);
    return () => {}
  }, [])
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="h-8 m-4 bg-white" />
        <Menu theme="dark" defaultSelectedKeys={['/home/page1']} mode="inline" items={items} onClick={menuClick} onOpenChange={handleOpenChange} openKeys={openKeys}/>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Breadcrumb className='m-4'>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content className='m-4 h-full'>
          <div className='p-6 min-h-360 h-full' style={{ background: colorBgContainer }}>
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer className='text-center'>Bobfish Management ©2023 Created by Bobfish</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;