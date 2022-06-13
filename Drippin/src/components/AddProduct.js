import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Axios from 'axios';

const AddProduct = () => {
    const center = {
        alignItem: "center",
        textAlign: "center"
    }
    const InputH = styled('input')({
        display: 'none'
    });
    const [image, setImage] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    // const [product, setProduct] = useState({
    //     product_image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png",
    //     product_name: "",
    //     product_price: ""
    // });
    const addProduct = () => {
        Axios
            .post('http://localhost:8000/AddDrippin', {
                product_image: image,
                product_name: name,
                product_price: price
            })
            .then(() => console.log('Product Created'))
            .catch(err => {
                console.error(err);
            });
    };
    // const onProductChange = (value,key) => {
    //     setProduct(prev => ({
    //         ...prev,
    //         [key] : value,
    //     }))
    // }
    // const onNameChange = ({target:{value}}) =>{
    //     setName(value)
    //     console.log(name)
    // };
    // const onPriceChange = ({target:{value}}) =>{
    //     setPrice(value);
    //     console.log(price)
    // };
    // const onImageChange = ({target:{value}}) =>{
    //     setPrice(value);
    //     console.log(price)
    // };

    return (
            <form action="">
                <h1 style={center}>Product</h1>
                    <Grid container spacing={0} marginTop={1} >
                    <Grid item xs={12} md={5} style={center}>
                        <img src={image} alt="" width="50%"/>
                        <div>
                            <label htmlFor="contained-button-file">
                                <InputH accept="image/*" id="contained-button-file" multiple type="file" onChange={(e) => {setImage(e.target.value)}}/>
                                <Button variant="contained" component="span">
                                    Upload
                                </Button>
                            </label>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5} style={center}>
                        <div>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-name-input"> Name of Product</InputLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    // onChange={d('amount')}
                                    type="text"
                                    value={name} 
                                    onChange={(e) => {setName(e.target.value)}}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                                <InputLabel htmlFor="standard-name-input"> Price of Product</InputLabel>
                                <Input
                                    id="price"
                                    name="price"
                                    // onChange={handleChange('amount')}
                                    type="text"
                                    value={price} 
                                    onChange={(e) => {setPrice(e.target.value)}}
                                />
                            </FormControl>
                        </div>
                        <div margin={10} >
                            <Button variant="contained" color="success" onClick={addProduct}>
                                Save
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
    )
}

export default AddProduct;

