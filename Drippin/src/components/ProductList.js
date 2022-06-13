import React from "react";
import Product from "./Product";
import Grid from '@mui/material/Grid';

const ProductList = (props) => {
    const {image, name, price} = props;
    return (
        <Grid item xs={6} md={3}>
            <Product image={image} name={name} price={price}/>
        </Grid>
    )
}

export default ProductList;