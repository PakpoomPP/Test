import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Product = (props) => {
    return (
         <Card sx={{ maxWidth: 345 }} variant="outlined" className="card-todoLis">
            <CardMedia
                component="img"
                image={props.image}
                alt={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                ${props.price}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Product;