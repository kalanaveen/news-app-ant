import { Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetNewsQuery } from '../services/newsApi';
import moment from 'moment';
import Loader from './Loader';
const { Text, Title } = Typography;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const HomePage = ({newsCategory}) => {
      const{data,isFetching} = useGetNewsQuery({newsCategory});
      if (isFetching) return <Loader/>;
    return (
        <Row gutter={[24,24]}>
            {data?.value.map((news,i)=>(
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                       <a href={news.url} target="_blank" rel="noreferrer">
                           <div className="news-image-container">
                               <Title className="news-title" level={4}>{news.name}</Title>
                               <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news image"/>
                           </div>
                           <p>{news.description.substr(0,150)}</p>
                           <div className="provider-container">
                               <div>
                               <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage}/>
                                   <Text className="provider-name">{news.provider[0]?.name}</Text>
                               </div>
                               <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                           </div>
                       </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default HomePage
