import React,{Component} from 'react';
import Grid from '@mui/material/Grid';
import ProductList from './ProductList';
import Products from '../data/Products'
import axios from 'axios';

class Home extends Component {
    state = {
        products: []
    }
    // const productElements = Products.map((products, index) =>{
    //     return <ProductList key={index} name={products.name} image={products.image} price={products.price}/>;
    // });
    componentDidMount() {
        axios.get(`http://localhost:8000/`)
        .then(res => {
            const products = res.data;
            this.setState({ products });
        }).then(() => {
            console.log(this.state.products);
        })
    }

    render() {
        return (
            <Grid container spacing={2} marginTop={2}>
                {/* {productElements} */}
                {
                    this.state.products
                        .map(res =>
                            <ProductList key={res.product_id} name={res.product_name} image={res.product_image} price={res.product_price}/>
                        )
                }
            </Grid>
            )
    }
}

export default Home;

