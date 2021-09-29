import { Button, Menu, Typography, Avatar } from 'antd';
import { GlobalOutlined, MoneyCollectOutlined, GroupOutlined, SkinOutlined, BulbOutlined, RadarChartOutlined, MenuOutlined, TrophyOutlined } from '@ant-design/icons';
import icon from "../images/icon.png";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 760) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">News India</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)} ><MenuOutlined /></Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<GlobalOutlined />} key="World">
            <Link to="/World">WORLD</Link>
          </Menu.Item>
          <Menu.Item icon={<GroupOutlined />} key="Politics">
            <Link to="/Politics">POLITICS</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} key="Business">
            <Link to="/Business">BUSINESS</Link>
          </Menu.Item>
          <Menu.Item icon={<RadarChartOutlined />} key="ScienceAndTechnology">
            <Link to="/ScienceAndTechnology" >SCIENCEANDTECHNOLOGY</Link>
          </Menu.Item>
          <Menu.Item icon={<TrophyOutlined />} key="Sports">
            <Link to="/Sports">SPORTS</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} key="Entertainment">
            <Link to="/Entertainment" >ENTERTAINMENT</Link>
          </Menu.Item>
          <Menu.Item icon={<SkinOutlined />} key="LifeStyle">
            <Link to="/LifeStyle" >LIFESTYLE</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  )
}

export default Navbar;

