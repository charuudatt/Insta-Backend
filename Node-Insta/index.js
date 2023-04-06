const express = require('express')
const app = express()
const conn = require('./Connection/Conn')
const router = require('./Routes/Route')

conn()

app.use("/", router)

app.listen(3001, () => {
    console.log("Server is up and running at port 3001")
})