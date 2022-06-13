import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import ProductTable from './ProductTable';
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";
import AddProduct from './AddProduct';

class Manage extends Component {

    
    render(){
      return (
        <Grid container spacing={0} marginTop={5} >
          <Grid item xs={12} md={12}>
            <h1>Product</h1>
          </Grid>
          <Grid item xs={12} md={12}>
            <Link to="/Manage/Add" element={<AddProduct />}>
              <Button variant="contained" color="success" >
                <AddIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                Add
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12} md={12} marginTop={3}>
            <ProductTable />
          </Grid>
        </Grid>
      );
  }
}

export default Manage;

