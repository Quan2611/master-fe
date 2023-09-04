import { Button, List, Form } from 'antd'
import { IFood, INewFood } from '../../../type'
import FoodItem from '../../Component/FoodItem'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useCallback, useEffect, useState } from 'react';
import FoodForm from '../../Component/FoodForm';
import { createNewFood, getFood, updateInfoFoodById } from '../../API';
import { LIMIT_DISPLAY_ITEM_PER_PAGE } from '../../ultils/constants';



function Management() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number|null> (null)
  const [foodData, setFoodData] = useState<IFood[]>([])
  const [total, setTotal] = useState(0)
  const [skip, setSkip] = useState(0)
  const [form] = Form.useForm()

  const onGetFoodData = useCallback(() => {
    getFood(skip)
      .then(resp => {
        setFoodData(resp.data)
        setTotal(resp.total)
      })
  }, [skip])

  useEffect(() => {
    onGetFoodData()
  }, [onGetFoodData])

  const onClose = () => {
    setIsOpen(false);
    setSelectedItem !== null && setSelectedItem(null);
  } 

  const onSubmit = async (data: INewFood | IFood) => {
    try {
      let resp;
      if (selectedItem) {
        resp = await updateInfoFoodById(data as IFood)
      } else {
        resp = await createNewFood(data as INewFood)
      }
      onGetFoodData()
      setIsOpen(!resp);
      form.resetFields()
    } catch (error) {
      console.log(__filename, error);
    }
  }
  
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
      <List
      grid={{
        gutter: 16,
        column: 5,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      dataSource={foodData}
      renderItem={(item) => (
        <List.Item>
          <FoodItem
          onClick={(id:number) =>{
            setSelectedItem(id);
            setIsOpen(true)
          }} 
          data= {item}
          />
        </List.Item>
      )}
      pagination={{
        total: total,
        pageSize: LIMIT_DISPLAY_ITEM_PER_PAGE,
        position: 'bottom',
        onChange: (newPage: number) => {
          setSkip((newPage - 1) * LIMIT_DISPLAY_ITEM_PER_PAGE)
        }
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
