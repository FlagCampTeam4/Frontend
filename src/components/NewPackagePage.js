import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Divider,
  DatePicker,
} from 'antd';
 
 
class NewPackagePage extends React.Component {
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    
    /* eslint-disable no-template-curly-in-string */
    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };
    /* eslint-enable no-template-curly-in-string */
    
    const onFinish = () => {
      console.log("submitted");
    };
    
    const { Option } = Select;

    function onChange(date, dateString) {
      console.log(date, dateString);
    }

    return (
        <Form {...layout} className="OrderInfo" onFinish={onFinish} validateMessages={validateMessages} labelCol={{ span: 7 }} wrapperCol={{ span: 8 }}>
          <div>Sender</div>
          <Divider />
          <Form.Item name={['sender', 'name']} label="Name" rules={[{ required: true }]}>
              <Input/>    
          </Form.Item>
          <Form.Item name={['sender', 'phone']} label="Phone" rules={[{ required: true }]}>
          <Input.Group compact >
              <Select style={{ width: '25%' }}>
                <Option value="1">+1</Option>
                <Option value="86">+86</Option>
              </Select>
              <Input style={{ width: '75%' }}/>
              </Input.Group>
          </Form.Item>
          <Form.Item name={['sender', 'address']} label="Address" rules={[{ required: true }]}>
              <Input/>
             
          </Form.Item>

          <p>Recipient</p>
          <Divider />
          <Form.Item name={['recipient', 'name']} label="Name" >
            <Input />
          </Form.Item>
          <Form.Item name={['recipient', 'phone']} label="Phone" >
            <Input.Group compact >
              <Select style={{ width: '25%' }}>
                <Option value="1">+1</Option>
                <Option value="86">+86</Option>
              </Select>
              <Input style={{ width: '75%' }}/>
              </Input.Group>
          </Form.Item>
          <Form.Item name={['recipient', 'address']} label="Address" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <p>Object</p>
          <Divider />
          <Form.Item name={['object', 'weight']} label="Weight" rules={[{ required: true }]}>
            <InputNumber addonAfter="lb"/>
          </Form.Item>
          <Form.Item name={['object', 'length']} label="Length" rules={[{ required: true }]}>
            <InputNumber addonAfter="in"/>
          </Form.Item>
          <Form.Item name={['object', 'width']} label="Width" rules={[{ required: true }]}>
            <InputNumber addonAfter="in" />
          </Form.Item>
          <Form.Item name={['object', 'height']} label="Height" rules={[{ required: true }]}>
            <InputNumber addonAfter="in" />
          </Form.Item>
          <Form.Item name={['object', 'shippingDate']} label="Shipping Date" rules={[{ required: true }]}>
            <DatePicker onChange={onChange} />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    );
  };
}
 
export default NewPackagePage;
