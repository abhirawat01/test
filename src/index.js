const express = require('express')
const {PORT} = require('./Config/serverConfig')

const app = express()

const PrepareAndStartServer = ()=>{

    app.listen(PORT , ()=>{
        console.log(`Server Start on PORT ${PORT}`);
    })
}

PrepareAndStartServer()