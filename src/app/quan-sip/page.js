import React from 'react';
import WiseHeader from '../../components/WiseHeader';
import Products from '../../components/Products';
import WiseFooter from '../../components/WiseFooter';

const Index = () => (
  <div className='d-flex flex-column'>
      <WiseHeader/>
      <br/>
      <h1>WISE GENTLEMAN</h1>
      <Products/>
      <WiseFooter/>
  </div>

)

export default Index;