import React from 'react';
import VideoCard from '../Components/VideoCard.jsx';
import "../Style/video.css";
const Videos = ({videos}) => {
  return( 
  <div className='videos'>
      {
          videos.map((item,index)=>(
              <VideoCard key={index} image={item.image} name={item.name}/>
          ))
      }
  </div>
  )
};

export default Videos;
