import {
    Tabs,
    List,
    Card,
    Button,
    Tooltip,
    Menu, 
    Dropdown,
    Space,
    Modal,
  } from "antd";
import Text from "antd/lib/typography/Text";
import InfoCircleOutlined from '@ant-design/icons/InfoCircleOutlined';
import {adminStatus, adminOps } from "../utils";
import React from "react";

const { TabPane } = Tabs;  

export class OrderInfoButton extends React.Component {
  state = {
      modalVisible: false,
    };
    
    openModal = () => {
      this.setState({
        modalVisible: true,
      });
    };
    
    handleCancel = () => {
      this.setState({
        modalVisible: false,
      });
    };    
  
  
  render() {
    const { order } = this.props;
    const { orderNumber, address, weight} = order;
    const { modalVisible } = this.state;
    return (
      <>
        <Tooltip title="View Order Details">
          <Button
            onClick={this.openModal}
            style={{ border: "none" }}
            size="large"
            icon={<InfoCircleOutlined />}
          />
        </Tooltip>
        {modalVisible && (
          <Modal
            centered={true}
            visible={modalVisible}
            closable={false}
            footer={null}
            onCancel={this.handleCancel}
          >
            <Space direction="vertical">
              <Text strong={true}>Order Number</Text>
              <Text type="secondary">{orderNumber}</Text>
              <Text strong={true}>Address</Text>
              <Text type="secondary">{address}</Text>
              <Text strong={true}>Weight</Text>
              <Text type="secondary">{weight}</Text>
            </Space>
          </Modal>
        )}
      </>
    );
  }
}


class PickedUpButton extends React.Component {
  state = {
      loading: false,
  };

  handleOrderPickUp = () => {
    
  };
    
  render() {
    return (
      <Button
        loading={this.state.loading}
        onClick={this.handleOrderPickUp}
        danger={true}
        shape="round"
        type="primary"
      >
        Order Picked Up
      </Button>
    );
  }
}
// class ShippedButton extends React.Component {
//     state = {
//         loading: false,
//       };
     
//       render() {
//         return (
//           <Button
//             loading={this.state.loading}
//             onClick={this.handleOrderShipped}
//             danger={true}
//             shape="round"
//             type="secondary"
//           >
//             Order Shipped
//           </Button>
//         );
//       }
//     }

class DeliveredButton extends React.Component {
  state = {
      loading: false,
  };

  handleOrderDelivered = () => {
    
  };
    
  render() {
    return (
      <Button
        loading={this.state.loading}
        onClick={this.handleOrderDelivered}
        danger={true}
        shape="round"
        type="secondary"
      >
        Order Delivered
      </Button>
    );
  }
}


class ActionButton extends React.Component {
  state = {
      loading: false,
  };
    
  render() {
    const {onMenuClick} = (e) => {
        console.log('click', e);
      };
      
      const menu = (
        <Menu
          onClick={onMenuClick}
          items={[
            {
              key: '1',
              label: 'Order Shipped',
            },
            {
              key: '2',
              label: 'Order Picked Up',
            },
            {
              key: '3',
              label: 'Order Delivered',
            },
          ]}
        />
      );
    return (
        <Dropdown.Button overlay={menu} >
        Actions
      </Dropdown.Button>
    );
  }
}

class Orders extends React.Component {
  state = {
    loading: false,
    data: [],
  };
  
  componentDidMount() {
    this.loadData();
  }
  
  loadData = async () => {
    this.setState({
      loading: true,
    });
  
    try {
      const resp = await adminStatus();
      this.setState({
        data: resp,
      });
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
  };
  
  render() {
    return (
      <List
        loading={this.state.loading}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 3,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        dataSource={this.state.data}
        renderItem={(item) => (
          <List.Item>
            <Card
              key={item.id}
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Text ellipsis={true} style={{ maxWidth: 150 }}>
                    {item.name}
                  </Text>
                  <OrderInfoButton order={item} />
                </div>
              }
              actions={<ActionButton order={item} />}
            >
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

class AdminPage extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1"  destroyInactiveTabPane={false}>
        <TabPane tab="Order List" key="1" >
        <Orders/>
        </TabPane>
      </Tabs>
    );
}
}
 
export default AdminPage;