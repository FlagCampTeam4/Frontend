import React from "react";
import { message, Tabs, List, Typography } from "antd";
import { getReservations } from "../utils";
 
const { TabPane } = Tabs;
const { Text } = Typography;
 
class MyOrders extends React.Component {
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
      const resp = await getReservations();
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
        style={{ width: 1000, margin: "auto" }}
        loading={this.state.loading}
        dataSource={this.state.data}
        renderItem={(item) => (
          <List.Item actions={[]}>
            <List.Item.Meta
              title={<Text>{item.orderID}</Text>}
              description={
                <>
                  <Text>Checkout Date: {item.deliveryTime}</Text>
                  <br />
                  <Text>Checkout Date: {item.orderStatus}</Text>
                </>
              }
            />
          </List.Item>
        )}
      />
    );
  }
}

export default MyOrders;
