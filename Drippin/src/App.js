import React from 'react';
// import TodoList from './components/TodoList';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Navbar from './components/NavBar';
import Container from '@mui/material/Container';
import Manage from './components/Manage';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  // const [productList, setProductList] = useState(["test"]);
  // const [text, setText] = useState("");
  // const [user, setUser] = useState({
  //   name : "",
  //   status : null
  // });

  // const onTextChange = ({target:{value}}) =>{
  //   setText(value)
  // };

  // const addTask = () => {
  //   setTodoList([
  //     ...todoList,
  //     text
  //   ])
  // }
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Container>
          <Routes>
            <Route path="/Manage" element={<Manage />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Manage/Add" element={<AddProduct />}></Route>
            <Route path="/Manage/Edit/:id" element={<EditProduct />}></Route>
          </Routes>
        </Container>
        


        {/* <div>
          <TextField type="text" id="standard-basic" label="Input Something" variant="standard"  value={text} onChange={ onTextChange }/> 
          <Button type="button" onClick={ addTask } variant="contained" color="success">Add</Button>
        </div>

        <TodoList todoList={todoList}/> */}

      </div>
    </Router>
  );
}

export default App;
