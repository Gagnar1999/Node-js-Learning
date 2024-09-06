const express = require("express")
const colors = require("colors")
const cors = require("cors")
const morgan = require("morgan")
const env = require("dotenv")


//configuration of dotenv
env.config()

//creating rest object

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const PORT = process.env.PORT || 3000

app.use('/api/v1/test', require("./routes/routes"))

app.get("/", function(req, res){
    res.status(500)
    re
    res.contentType("application/json")
    var data = {"msg": "Hacking Code Running"}
    res.send(data)
})


app.listen(PORT, ()=> console.log(`Server Working ${PORT} `.green.bgWhite))