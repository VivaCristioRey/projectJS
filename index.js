require('dotenv').config()
const exp = require('express');
const app = exp();
const logger = require('morgan');
app.use(logger('dev'));
app.use(exp.urlencoded({extended:false}));
app.use(exp.json());
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor escuchando en http:localhost:${process.env.PORT}`)
})