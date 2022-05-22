import { Layout, Dropdown, Menu, Button } from "antd";
import { Tabs } from "antd";
import React from "react";
import NewPackagePage from './components/NewPackagePage';
import background01 from './image/background01.jpg';
 


class OrderMainPage extends React.Component{
  render(){

    const { Header, Content } = Layout;
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }

    return (
      <Layout style={{ height: "100vh" }}>
      <Header style={{ display: "flex", justifyContent: "space-between", color:"black"}}>
        <div style={{ fontSize: 16, fontWeight: 600, color: "purple" }}>
          Robot Delivery
        </div>
      </Header>
      <Content
      style={{backgroundImage:`url(${background01})`, height: "calc(100% - 64px)", margin: 10, overflow: "auto"}}
      >
         <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Order" key="1">
               <NewPackagePage/>;
            </TabPane>
            <TabPane tab="Status" key="2">
               Content of Tab Pane 2
            </TabPane>
          </Tabs>
      </Content>
    </Layout>

    );
  }
  
}

export default OrderMainPage;
