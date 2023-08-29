import { Button, List } from 'antd'
import { IFood } from '../../../type'
import FoodItem from '../../Component/FoodItem'
import { PlusCircleOutlined } from '@ant-design/icons'

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
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
    image: "/assets/SpicySeasonadSeafoodNoddle.svg",
    discount_amount: 0,
    tag: "Hot Dish"
  },
  {
    id: 3,
    name: "Spicy seasoned seafood noodles",
    price: 2.29,
    quantity: 20,
    image: "/assets/SpicySeasonadSeafoodNoddle.svg",
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
  return (
    <main>
      <div>
        <Button
        className='add-btn'
        icon ={<PlusCircleOutlined />}
        size="large"
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
          <FoodItem data= {item}/>
        </List.Item>
      )}
    />
    </main>
  )
}
export default Management
