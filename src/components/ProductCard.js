import React from "react";
import {
    CardMedia,
    Typography,
    Box,
} from '@mui/material';
import  "./ProductCard.css";


export default function ProductCard(props) {
    return (
        <div className="product_card">
            <CardMedia
                className="Media"
                image={props.product.Image}
                title={props.product.Alt}
            />
            <Typography className="MediaCaption">
                    {props.product.Alt}
            </Typography>
        </div>
    )
}