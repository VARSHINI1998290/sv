import Header from './components/Header';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { ShoppingOutlined , ShoppingCartOutlined } from '@ant-design/icons';
import * as data from './components/values.json';

function App(){
  const { SubMenu } = Menu;
const {  Sider,Content } = Layout;
const data = require('./components/values.json')
  return(
    <div className="App">
    <Header></Header>
    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<ShoppingOutlined />} title="VEGETABLES">
              <Menu.Item key="1">TOMATO</Menu.Item>
              <Menu.Item key="2">POTATO</Menu.Item>
              <Menu.Item key="3">BRINJAL</Menu.Item>
              <Menu.Item key="4">CARROT</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ShoppingCartOutlined  />} title="FRUITS">
              <Menu.Item key="5">APPLE</Menu.Item>
              <Menu.Item key="6">ORANGE</Menu.Item>
              <Menu.Item key="7">GUAVA</Menu.Item>
              <Menu.Item key="8">PAPAYA</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<ShoppingOutlined />} title="DRESS">
              <Menu.Item key="9">KURTIS</Menu.Item>
              <Menu.Item key="10">SALVAR</Menu.Item>
              <Menu.Item key="11">JEANS</Menu.Item>
              <Menu.Item key="12">TOPS</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        </Layout>
 
    </div>
  )
}
export default App;