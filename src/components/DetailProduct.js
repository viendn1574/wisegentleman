'use client';
import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import './DetailProduct.css'
import WiseFooter from './WiseFooter';

export default function DetailProduct(probs) {
    const [header, setHeader] = useState(false);
    const [footer, setFooter] = useState(false);
    const [productDetailHeight, setProductDetailHeight] = useState(200);

    const scrollHeader = () => {
        if (window.scrollY >= 100 || window.innerWidth <= 768) {
            setHeader(true)
        } else {
            setHeader(false)
        }
        setProductDetailHeight(200);
    }

    const resizeWindow = () => {
        if (window.innerWidth <= 768) {
            setHeader(true)
            setFooter(true)
        } else {
            setHeader(false)
            setFooter(footer)
        }
    }
    
    useEffect(()=> {
        window.addEventListener('scroll', scrollHeader)
        window.addEventListener('resize', resizeWindow)
        if (window.innerWidth <= 768) {
            setHeader(true)
            setFooter(true)
        } else {
            setHeader(false)
            setFooter(footer)
        }
        if (probs.parentClick) {
            setProductDetailHeight(200);
        }
    },[probs.parentClick])

    const handleScroll = (event) => {
        setProductDetailHeight(400);
        probs.childClick();
        event.stopPropagation();
    };

    // Calculate the new height based on scroll position
    const calculateHeight = () => {
        return `${productDetailHeight}px`; // Set the height based on scroll position
    };
    return (
        <div className={header ? "sticky d-flex flex-column" : "d-flex flex-column"}
            style={{ height: calculateHeight(), width: '95%', overflowX: 'hidden' }}
            onScroll={handleScroll}
            onClick={handleScroll}
        >
            <h1 className='product-header'>{probs.name}</h1>
            <p className='product-price '>{probs.price}</p>
            <p className='color_title'>COLOR</p>
            <div>
                {probs.items}
            </div>
            <p className='color_title'>SIZE</p>
            <div className='d-flex flex-row'>
                <div className="square">S</div>
                <div className="square">M</div>
                <div className="square">L</div>
            </div>
            <br/>
            <Button variant="contained" className='black-button'> MUA </Button>
            <p className='product-desc'>{probs.desc}</p>
            {footer && <WiseFooter/>}
        </div>
    )
}