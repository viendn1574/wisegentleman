import React from 'react';
import WiseHeader from '../../components/WiseHeader';
import About from '../../components/About';
import WiseFooter from '../../components/WiseFooter';

const Index = () => (
  <div className='d-flex flex-column'>
      <WiseHeader/>
      <br/>
      <h1 color='black'>WISE GENTLEMAN LÀ AI ?</h1>
      <About/>
      <WiseFooter/>
  </div>

)

export default Index;