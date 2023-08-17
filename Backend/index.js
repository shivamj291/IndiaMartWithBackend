const express = require('express')
const app = express();
const cors = require('cors')
const dataRouter = require('./Router/Routes')

const {connectDb} = require('./config/db')

app.use(express.json());
app.use(cors());
app.use('/data',dataRouter);


require("dotenv").config();

const port = process.env.port
  
connectDb().then(()=>{
    
  app.listen(port,()=>{
      console.log("hello ready for run")
  })
})

// 
