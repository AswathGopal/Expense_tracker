const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const port= process.env.PORT;
app.use(express.json());
app.use(cors())

app.use('/auth/login',LoginRouter);
app.use("/auth/signin",SignInRouter);
app.get('/test',(req,res)=>{
    res.send("testing");
})






app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`)
})