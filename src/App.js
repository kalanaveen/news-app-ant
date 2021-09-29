import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { Switch, Route, Link } from 'react-router-dom';
import {useState} from 'react';
import { Layout, Typography, Space } from 'antd';
import alanBtn from "@alan-ai/alan-sdk-web";

const { Title } = Typography;
function App() {
  const[newsCategory,setNewsCategory] = useState("India");


  return (
    <div className="app">
       <div className="navbar"><Navbar/></div>
       <div className="main">
          <Layout>
            <div className="routes">
               <Switch>
                 <Route exact path="/">
                 <Title level={3} className="route-heading">Latest News of India</Title>
                 <HomePage newsCategory="India"/>
                 </Route>

                 <Route exact path="/World">
                 <Title level={3} className="route-heading">Latest News of World</Title>
                 <HomePage newsCategory="World"/>
                 </Route>
                
                 <Route exact path="/Politics">
                 <Title level={3} className="route-heading">Latest News of Politics</Title>
                 <HomePage newsCategory="Politics"/>
                 </Route>

                 <Route exact path="/Business">
                 <Title level={3} className="route-heading">Latest News of Business</Title>
                 <HomePage newsCategory="Business"/>
                 </Route>

                 <Route exact path="/ScienceAndTechnology">
                 <Title level={3} className="route-heading">Latest News of Science And Technology</Title>
                 <HomePage newsCategory="ScienceAndTechnology"/>
                 </Route>
                 
                 <Route exact path="/Sports">
                 <Title level={3} className="route-heading">Latest News of Sports</Title>
                 <HomePage newsCategory="Sports"/>
                 </Route>

                 <Route exact path="/Entertainment">
                 <Title level={3} className="route-heading">Latest News of Entertainment</Title>
                 <HomePage newsCategory="Entertainment"/>
                 </Route>

                 
                 <Route exact path="/LifeStyle">
                 <Title level={3} className="route-heading">Latest News of LifeStyle</Title>
                 <HomePage newsCategory="LifeStyle"/>
                 </Route>

               </Switch>
            </div>
          </Layout>

          <div className="footer">
          <Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            <Link to="/">
              News India Inc.
            </Link><br />
            All Rights Reserved
          </Title>
          <Space>
            <Link to="/">WORLD</Link>
            <Link to="/Politics">POLITICS</Link>
            <Link to="/Business">BUSINESS</Link>
            <Link to="/Sports">SPORTS</Link>
            <Link to="/LifeStyle">LIFESTYLE</Link>
          </Space>
        </div>
       </div>
    </div>
  );
}

export default App;
