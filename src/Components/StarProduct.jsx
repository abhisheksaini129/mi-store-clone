import React from 'react';
import "../Style/starProduct.css";

const StarProduct = ({product}) => {
  return (
     <div className='starProduct'>
         <div><a href={product[0].url}><img src={product[0].image} alt='1st product'/></a></div>
         <div>
         <div><a href={product[1].url}><img src={product[1].image} alt='2nd product'/></a></div>
         <div><a href={product[2].url}><img src={product[2].image} alt='3rd product'/></a></div>
         <div><a href={product[3].url}><img src={product[3].image} alt='4th product'/></a></div>
         </div>
     </div> 
  )
};

export default StarProduct;
