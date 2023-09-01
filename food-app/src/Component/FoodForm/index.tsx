import './foodFormStyle.scss'
import {useState} from "react"
import { Button, DatePicker, Drawer, Form, Input,Select} from 'antd';
import { CATEGORY_LiST as listCategory } from '../../ultils/constants';
const { Option } = Select;

interface IProps {
  isOpen : boolean;
  onClose : () => void;
  onSubmit : () => void;
  selectedItem : number | null
}
function FoodForm({isOpen, onClose, onSubmit,selectedItem} : IProps) {
  return (
    <>
      <Drawer
        title={ selectedItem ? "Update food information" : "Create a new food"}
        width={window.screen.availWidth < 420 ? 320 : 520}
        onClose={onClose}
        open={isOpen}
        bodyStyle={{ paddingBottom: 80 }}
        closeIcon={null}
      >
        <Form layout="vertical" onFinish={onSubmit}>
          <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter food name' }]}
          >
            <Input style={{width:"100%"}} size='large' />
          </Form.Item>
       
          <Form.Item
                name="image"
                label="Image"
                rules={[{ required: true, message: 'Please enter food image url' }]}
          >
            <Input
                style={{ width: '100%' }}
                size='large'
                addonBefore="http://"
            />
          </Form.Item>
          
          <Form.Item
                name="price"
                label="Price"
                rules={
                  [
                    { required: true, message: 'Please enter food price' },
                    { type : 'number', min: 0 , message:'Invalid food price'}
                  ]
                }
          >
            <Input
                style={{ width: '100%' }}
                size='large'
                addonBefore="$"
                type='number'
                min={0}
            />
               
          </Form.Item>

          <Form.Item
                name="quantity"
                label="Quantity"
                rules={
                  [
                    { required: true, message: 'Please enter food quantity' },
                  ]
                }
          >
            <Input
                style={{ width: '100%' }}
                size='large'
                addonAfter="Bowl(s)"
                type='number'
                min={0}
            />
          </Form.Item>

          <Form.Item
            name="discount_amount"
            label="Discount amount"
            rules={
              [
                { required: true, message: 'Please enter discount amount' },
                { type : 'number', min: 0 , message:'Invalid amount'}
              ]
            }
          >
            <Input
              style={{ width: '100%' }}
              size='large'
              addonBefore="$"
              type='number'
              min={0}
            />
          </Form.Item>

          <Form.Item
                name="tag"
                label="Tag"
                rules={[{ required: true, message: 'Please select a food tag' }]}
              >
                <Select size='large'>
                  {
                    listCategory.map((_item)=>{
                      return (
                        <Option index ={_item} value={_item}>{_item}</Option>
                      )
                    })
                  }
                </Select>
          </Form.Item>
          
          <Form.Item>
            <Button
            size='large'
            type="primary"
            htmlType='submit'
            >
              Submit
            </Button>
          </Form.Item>
             
        </Form>
      </Drawer>
    </>
  );
};


export default FoodForm