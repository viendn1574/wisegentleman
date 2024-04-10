'use client';
import React from 'react';
import CardSlider from './CardSlider';
import './Products.css'

export default function Products() {

        return (
            <div className='d-flex flex-column'>
                <div className="text-center">
                    <h2 className="product-title">SẢN PHẨM</h2>
                </div>
                <CardSlider/>
            </div>
        )
}