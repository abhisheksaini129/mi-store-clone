import React from 'react';
import "../Style/HotItemCard.css";
const HotItemCard = ({name,price,image,key,index}) => {
  return (
  <div className='HotItemCard'>
      <img src={image} alt={`${index} product`}/>
      <p>{name}</p>
      <span>{price}</span>
  </div>
  )
};

export default HotItemCard;
