import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Axios from 'axios';
import {useParams} from "react-router-dom";


const EditProduct = (props) => {
    const {id} = useParams();
    console.log(id)
    console.log(props)

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

    const getProduct = (id) => {
        Axios
            .get(`http://localhost:8000/${id}`,)
            .then(res => 
                console.log(res.data)
                // setImage(res.product_image),
                // setName(res.product_name),
                // setPrice (res.product_price)
            )
            .catch(err => {
                console.error(err);
            });
    };

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
                            <Button variant="contained" color="success" >
                                Save
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </form>
    )
}

export default EditProduct;

