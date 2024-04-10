import React from 'react';
import WiseHeader from '../components/WiseHeader';
import Products from '../components/Products';
import About from '../components/About';
import WiseFooter from '../components/WiseFooter';

const Index = () => (
  <div className='d-flex flex-column'>
      <WiseHeader banner={true}/>
      <Products/>
      <About/>
      <WiseFooter/>
  </div>

)

export default Index;