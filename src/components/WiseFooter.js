import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { IconButton } from '@mui/material';
import './WiseFooter.css'

const WiseFooter = () => {
    return (
        <footer className="text-dark footer" style={{borderTopWidth: '1px'}}>
            <div className='container'>
                <Row className='footer-row-1'>
                    {/* Cột 1 */}
                    <Col className="col-9">
                        <Row>
                            <Col>
                                <div className='d-flex flex-column footer-menu'>
                                    <a href="#" className="text-dark title">VẬN CHUYỂN</a>
                                    <a href="#" className="text-dark title">ĐỔI TRẢ</a>
                                    <a href="#" className="text-dark title">HỎI ĐÁP - FAQs</a>
                                </div>

                            </Col>
                            <Col>
                                <div className='d-flex flex-column footer-menu'>
                                    <a href="#" className="text-dark title">ĐỊA CHỈ</a>
                                    <a href="#" className="text-dark title">HOTLINE</a>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                    {/* Cột 3 */}
                    <Col className='col-logo'>
                        <img src="https://wisegentleman.vn/Footer_logo.png" alt="Logo" className="footer-logo" />
                    </Col>
                </Row>
                <Row>
                    <div className='d-flex container justify-content-center' style={{marginBottom:'10px'}}>
                    <IconButton className='icon-button'>
                        <img src="https://wisegentleman.vn/facebook_icon.png" alt="Facebook Wise Gentleman" style={{ width: '100%', height: '100%' }}/>
                    </IconButton>
                    <IconButton className='icon-button'>
                        <img src="https://wisegentleman.vn/insta_icon.png" alt="Instagram Wise Gentleman" style={{ width: '100%', height: '100%' }}/>
                    </IconButton>
                    <IconButton className='icon-button'>
                        <img src="https://wisegentleman.vn/tiktok_icon.png" alt="Tiktok Wise Gentleman" style={{ width: '100%', height: '100%' }}/>
                    </IconButton>

                    </div>

                </Row>
            </div>
        </footer>
    );
}

export default WiseFooter;