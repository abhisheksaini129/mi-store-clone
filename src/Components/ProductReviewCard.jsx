import React from 'react';
import '../Style/ProductReviewCard.css'
const ProductReviewCard = ({key,image,price,name,review}) => {
  return (
      <div className="ProductReviewCard">
          <img src={image} alt="" />
          <h5>{review}</h5>
          <span>{name}</span>
          <b>{price}</b>
      </div>
  )
};

export default ProductReviewCard;
