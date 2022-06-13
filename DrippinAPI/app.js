var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//connection configurations 
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'drippin'
});

// connect to database dbconn.connect();
dbConn.connect();

app.get('/',(req, res) => {
    dbConn.query('SELECT * FROM product', (error, results, fields) => {
        if (error) throw error;
        return res.send(results);
    });
});

app.get('/:id',(req, res) => {
    var product_id = req.params.id;

    dbConn.query('SELECT * FROM product WHERE product_id = ?',product_id, (error, results, fields) => {
        if (error) throw error;
        return res.send(results);
    });
});

app.post('/AddDrippin', function (req, res) {
    var product = req.body
    if (!product) {
        return res.status(400).send({ error: true, message: 'Please provide product ' });
    }
    dbConn.query("INSERT INTO product SET ?", product, function (error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
});

app.put('/UpdateDrippin/:id', function (req,res) {
    var product_id = req.params.id;
    var product = req.body
    if (!product_id || !product){
        return res.status(400).send({ error: true, message: 'Please provide product id and product data'});
    }
    dbConn.query('UPDATE product SET ? WHERE product_id = ?', [product, product_id], function(error, results,fields) {
        if (error) throw error;
        return res.send({ error: false, message: 'product has been updated seccessfully'});
    });
})

app.delete('/DeleteDrippin/:id', function(req,res){
    var product_id = req.params.id;
    if (!product_id){
        return res.status(400).send({ error: true, message:"Please provide product id"});
    }
    dbConn.query('DELETE FROM product WHERE product_id = ?',product_id, function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, message: 'product has been deleted' });
    });
})

 
app.listen(8000, function () {
    console.log('Node app is running on port 8000');

});

module.exports = app;