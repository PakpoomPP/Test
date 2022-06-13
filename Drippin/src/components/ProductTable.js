import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Axios from 'axios';
import {Link} from "react-router-dom";
import { Button } from '@mui/material';


class ProductTable extends React.Component {
    state = {
        products: []
    }
    componentDidMount() {
        Axios.get(`http://localhost:8000/`)
        .then(res => {
            const products = res.data;
            this.setState({ products });
        }).then(() => {
            console.log(this.state.products);
        })
    }
    deleteProduct = (id) => {
      Axios.delete(`http://localhost:8000/DeleteDrippin/${id}`).then((response) => {
          console.log(id);
          const products = [...this.state.products];
          products.splice(id, 1);
          this.setState(products); 
        })
      };
    render(){
      return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Price&nbsp;($)</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.products.map((res) => (
                <TableRow
                  key={res.product_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row"  align="center">
                    <img src={res.product_image} width="100" alt={res.product_name}></img>
                  </TableCell>
                  <TableCell align="center">{res.product_name}</TableCell>
                  <TableCell align="center">{res.product_price}</TableCell>
                  <TableCell align="center">
                    <Link to={`/Manage/Edit/${res.product_id}`} params={{ name: res.product_name, price:res.product_price }}>
                      <Button variant="contained" color="warning" >
                        Edit
                      </Button>
                    </Link>
                    <Button variant="contained" color="error" onClick={() => {this.deleteProduct(res.product_id)}}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    );
  }
}

export default ProductTable;