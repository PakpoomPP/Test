import React from "react";
import Card from '@mui/material/Card';

const Todo = ({value}) => {
    return (
        <Card variant="outlined" className="card-todoLis">
            {value}
        </Card>
    )
}

export default Todo;