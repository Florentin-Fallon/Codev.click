import React from 'react';
import { Avatar, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CardHome = ({
    imgSrc,
    imgAlt,
    imgAvatar,
    title,
    description,
    button,
    url
}) => (
    <div className='transition duration-300 transform hover:scale-110'>
        <Card
            style={{
             width: 300,
             marginTop: 40,
             marginBottom: 16,
            }}
    cover={
      <img
        alt={imgAlt}
        src={imgSrc}
      />
    }
  >
    <Meta
      avatar={<Avatar src={imgAvatar} />}
      title={title}
      description={description}
    />
    <Link to={url}><button className='bg-indigo-500 hover:bg-indigo-300 text-white w-full py-2 mt-4 rounded-lg'>{button}</button></Link>
  </Card>
    </div>
  
);
export default CardHome;