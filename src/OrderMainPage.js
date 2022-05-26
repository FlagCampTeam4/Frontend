import { Layout, Dropdown, Menu, Button, Card, Row } from "antd";
import { Tabs } from "antd";
import React from "react";
import NewPackagePage from './components/NewPackagePage';
import background02 from './image/background02.jpg';
 


class OrderMainPage extends React.Component{
  render(){

    const { Header, Content } = Layout;
    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }

    return (
      // <Layout style={{ height: "100vh" }}>
       <Card bordered={false}
       style={{backgroundImage:`url(${background02})`, height:"calc(100%)", overflow: "auto"}}
      >
         <Tabs  tabBarStyle={{color:"white", fontWeight:500}} defaultActiveKey="1" onChange={callback}>
            <TabPane  tab="Order" key="1">
               <NewPackagePage/>;
            </TabPane>
            <TabPane  tab="Status" key="2">
               Content of Tab Pane 2
            </TabPane>
          </Tabs>
       </Card>
    // </Layout>

    );
  }
  
}

export default OrderMainPage;
