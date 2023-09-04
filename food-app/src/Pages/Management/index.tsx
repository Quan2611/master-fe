import { Button, Form } from 'antd'
import { IFood, INewFood } from '../../../type'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import FoodForm from '../../Component/FoodForm';
import { createNewFood, updateInfoFoodById } from '../../API';
import FoodList from '../../Component/FoodList';


function Management() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number|null> (null)
  const [form] = Form.useForm()

  const onClose = () => {
    setIsOpen(false);
    form.resetFields()
    setSelectedItem !== null && setSelectedItem(null);
  } 

  const onSubmit = async (data: INewFood | IFood) => {
    try {
      if (selectedItem) {
        await updateInfoFoodById(data as IFood)
      } else {
        await createNewFood(data as INewFood)
      }
      onClose();
    } catch (error) {
      console.log(__filename, error);
    }
  }
  
  useEffect(() => {
    
  },[])
  return (
    <main>
      <div>
        <Button
        className='add-btn'
        icon ={<PlusCircleOutlined />}
        size="large"
        onClick={() =>setIsOpen(true)}
        >
          Create new dish
        </Button>
      </div>

      <br/>

      <FoodList 
          onEdit={(id: number) => {
          setSelectedItem(id)
          setIsOpen(true)
        }}
      />

      <FoodForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      selectedItem={selectedItem}
      form={form}
    />
    </main>
  )
}
export default Management
