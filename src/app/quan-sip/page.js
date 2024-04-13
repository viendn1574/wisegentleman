import React from 'react';
import WiseHeader from '../../components/WiseHeader';
import ProductCard from '../../components/ProductCard';
import WiseFooter from '../../components/WiseFooter';

const items = [
  {
      Color: "Black",
      Image: "https://wisegentleman.vn/products/boxer/boxer_den.jpg",
      Alt: "Quần sịp WISE Boxer đen"
  },
  {
      Color: "Gray",
      Image: "https://wisegentleman.vn/products/boxer/boxer_xam.jpg",
      Alt: "Quần sịp WISE Boxer xám"
  },
  {
      Color: "Blue",
      Image: "https://wisegentleman.vn/products/boxer/boxer_xanh.jpg",
      Alt: "Quần sịp WISE Boxer xanh"
  }
];

const Index = () => {
  const aaa =   {
    Color: "Blue",
    Image: "https://wisegentleman.vn/products/boxer/boxer_xanh.jpg",
    Alt: "Quần sịp WISE Boxer xanh"
};
  return (
    <div className='d-flex flex-column'>
    <WiseHeader/>
    <div className='container product'>
      <ProductCard product={items[0]}/>
      <ProductCard product={items[1]}/>
        <ProductCard product={items[2]}/>
    </div>
    <WiseFooter/>
  </div>
  )
}


export default Index;