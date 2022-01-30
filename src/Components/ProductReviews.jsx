import React from 'react';
import ProductReviewCard from '../Components/ProductReviewCard.jsx';
import '../Style/ProductReviews.css';
const ProductReviews = ({ProductReviews}) => {
  return (
  <div className='Productreviews'>
      {
          ProductReviews.map((item,index)=>(
            <ProductReviewCard image={item.image} key={index} review={item.review} name={item.name} price={item.price}/>
          ))
      }
  </div>
  );
};

export default ProductReviews;
