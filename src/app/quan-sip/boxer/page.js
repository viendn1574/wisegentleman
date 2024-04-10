import React from 'react';
import WiseHeader from '../../../components/WiseHeader';
import WiseFooter from '../../../components/WiseFooter';
import { Row, Col } from 'react-bootstrap';
import DetailProduct from '@/components/DetailProduct';


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

const ImageGallery = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {items.map((item, index) => (
        <img key={index} src={item.Image} alt={item.Alt} className='image_color' />
      ))}
    </div>
  );
}

const Index = () => {
  const description = "Được chế tác từ các vật liệu cao cấp và co giãn tốt, quần sịp boxer của chúng tôi không chỉ mang lại sự thoải mái tối đa mà còn đảm bảo sự hỗ trợ tốt nhất cho cơ thể của bạn. Dù bạn đang tập luyện, làm việc hoặc thư giãn, quần sịp boxer của chúng tôi sẽ luôn đồng hành và giúp bạn tự tin bước đi mỗi ngày."
  return (
    <div className='d-flex flex-column'>
      <WiseHeader banner={false} />
      <div className='product_container'>
        <Col className='col-lg-8 col-md-8 col-12'>
          <div className='d-flex flex-column align-items-center'>
            {items.map((item, index) => (
              <img key={index} src={item.Image} alt={item.Alt} className='d-inline-block product_image' />
            ))}
          </div>
        </Col>
        <Col className='product_info'>
          <DetailProduct className='sticky-btn-wrapper' name='WISE BOXER' price='100.000 VND' items={<ImageGallery/>} desc={description}/>
        </Col>
      </div>
      <WiseFooter/>
    </div>
  )
}

export default Index;