const express = require("express")
const app = express()
require("./db/config")
const cors = require("cors")
const Users=require("./db/users")

app.use(cors())
app.use(express.json())

app.get("/",async(req,resp)=>{
    let result = await Users.find()
    resp.send(result)
})

app.listen(5000)