import { Button, List } from 'antd'
import { IFood } from '../../../type'
import FoodItem from '../../Component/FoodItem'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useState } from 'react';
import FoodForm from '../../Component/FoodForm';

const food: IFood[] = [
  {
    id: 1,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
    image: "/assets/SpicySeasonadSeafoodNoddle.svg",
    discount_amount: 0,
    tag: "Hot Dish"
  },
  {
    id: 2,
    name: "Salted Pasta with mushroom sauce",
    price: 2.69,
    quantity: 30,
    image: "/assets/SaltedPasta.svg",
    discount_amount: 0,
    tag: "Hot Dish"
  },
  {
    id: 3,
    name: "Beef dumpling in hot and sour soup",
    price: 2.99,
    quantity: 16,
    image: "/assets/SaltedPasta.svg",
    discount_amount: 0,
    tag: "Hot Dish"
  },
  {
    id: 4,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
    image: "/assets/SpicySeasonadSeafoodNoddle.svg",
    discount_amount: 0,
    tag: "Hot Dish"
  },
  {
    id: 5,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
    image: "/assets/SpicySeasonadSeafoodNoddle.svg",
    discount_amount: 0,
    tag: "Hot Dish"
  },
]


function Management() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number|null> (null)
  const onClose = () => {
    setIsOpen(false);
    setSelectedItem !== null && setSelectedItem(null);
  } 

  const onSubmit = () => {
    setIsOpen(false);
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
      dataSource={food}
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
    />

    <FoodForm
    isOpen={isOpen}
    onClose={onClose}
    onSubmit={onSubmit}
    selectedItem={selectedItem}
    />
    </main>
  )
}
export default Management
