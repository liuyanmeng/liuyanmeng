import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout,  theme,Button } from 'antd';
import {Outlet, useNavigate} from 'react-router-dom'
import MenuView from '@/components/MainMenu';
const { Header, Content, Footer, Sider } = Layout;
const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo"/>
        <MenuView />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0,background: 'rgb(255,255,255,0)' }} >
          <Breadcrumb style={{ margin: '16px',background:'#ccc',lineHeight:'64px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content style={{ margin: '30px 16px',background:'#ccc',marginBottom:0}}>
          
          <div style={{ padding: 24, minHeight: 360 }}>
           {/*中间部分 */}
              <Outlet/>
          </div>
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  );
};

export default App;
