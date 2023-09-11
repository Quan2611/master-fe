import { Button, Drawer, Space, Typography, theme } from "antd";
import FoodList from "../../Component/FoodList";
import {useState} from "react"
import OrderItem from "../../Component/OrderItem";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
function Dashboard() {
  const [isOpen,setIsOpen] = useState(false)
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const onSelectDish = () => {

  }
  return (
    <main>
      <div className='flex justify-between mb-5'>
        <Typography.Title level={4}>Choose Dishes</Typography.Title>
        <Button
          icon={isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <FoodList onClick={onSelectDish} type="view" />

      <Drawer
        title={"New Order"}
        width={window.screen.availWidth < 420 ? 320 : 520}
        onClose={() => setIsOpen(!isOpen)}
        open={isOpen}
        bodyStyle={{ paddingBottom: 80 }}
        closeIcon={null}
        footer={(
          <Space>
            <Button size = "large" type="primary" color = {colorPrimary}>Buy</Button>
            <Button size="large">Cancel</Button>
          </Space>
        )}
      >
        <OrderItem/>
      </Drawer>
    </main>
  );
}
export default Dashboard