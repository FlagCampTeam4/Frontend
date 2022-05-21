import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Divider,
  DatePicker,
  message,
} from 'antd';
import {uploadPackage} from "../utils"; 
 
class NewPackagePage extends React.Component {
  formRef = React.createRef();
    state = {
      authed: false,
      loading: false,
    };

    handleSubmit = async (values) => {
      const formData = new FormData();
      const formInstance = this.formRef.current;

      formData.append("weight", values.weight);
      formData.append("height", values.height);
      formData.append("length", values.length);
      formData.append("width", values.width);
      formData.append("pickup_address", values.pickupaddress);
      formData.append("delivery_address", values.deliveryaddress);
      formData.append("pick_up_time", values.pickuptime);
   
      try {
        await formInstance.validateFields();
      } catch (error) {
        return;
      }
   
      this.setState({
        loading: true,
      });
   
      try {
        await uploadPackage(formData);
        message.success("Submit Successfully");
      } catch (error) {
        message.error(error.message);
      } finally {
        this.setState({
          loading: false,
        });
      }
    };
 
 
    render() {
      const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
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
      
      const onFinish = () => {
        console.log("submitted");
      };
      
      const { Option } = Select;
  
      function onChange(date, dateString) {
        console.log(date, dateString);
      }
  
      const prefixSelector = (
        <Form.Item name='prefix' noStyle>
          <Select style={{ width: 70 }}>
            <Option value="1">+1</Option>
            <Option value="86">+86</Option>
          </Select>
        </Form.Item>
      );
  
      return (
          <Form {...layout} className="OrderInfo" ref={this.formRef} onFinish={this.onFinish} validateMessages={validateMessages} labelCol={{ span: 7 }} wrapperCol={{ span: 8 }}>
            <div>Sender</div>
            <Divider />
            <Form.Item name={['sender', 'name']} label="Name" rules={[{ required: true }]}>
                <Input/>    
            </Form.Item>
            <Form.Item name={['sender', 'phone']}  label="Phone" rules={[{ required: true }]}>
                  <Input addonBefore={prefixSelector} style={{ width: '100%' }}/>
            </Form.Item>
            <Form.Item name='pickupaddress' label="Address" rules={[{ required: true }]}>
                <Input/>
               
            </Form.Item>
  
            <p>Recipient</p>
            <Divider />
            <Form.Item name={['recipient', 'name']} label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['recipient', 'phone']} label="Phone" >
              <Input.Group compact >
                <Form.Item noStyle name={['recipient','prefix']}>
                    <Select style={{ width: 70 }}>
                      <Option value="1">+1</Option>
                      <Option value="86">+86</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item noStyle name={['recipient','phoneNo']}>
                    <Input style={{ width: '89%' }}/>
                  </Form.Item>
              </Input.Group>
            </Form.Item>
            <Form.Item name='deliveryaddress' label="Address" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
  
            <p>Object</p>
            <Divider />
            <Form.Item name='weight' label="Weight" rules={[{ required: true }]}>
              <InputNumber addonAfter="lb"/>
            </Form.Item>
            <Form.Item name='length' label="Length" rules={[{ required: true }]}>
              <InputNumber addonAfter="in"/>
            </Form.Item>
            <Form.Item name='width' label="Width" rules={[{ required: true }]}>
              <InputNumber addonAfter="in" />
            </Form.Item>
            <Form.Item name='height' label="Height" rules={[{ required: true }]}>
              <InputNumber addonAfter="in" />
            </Form.Item>
            <Form.Item name='pickuptime' label="Shipping Date" rules={[{ required: true }]}>
              <DatePicker onChange={onChange} />
            </Form.Item>
  
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" onClick={this.handleSubmit} disabled={this.state.loading} >
                Submit
              </Button>
            </Form.Item>
          </Form>
      );
    };
  }
 
export default NewPackagePage;
