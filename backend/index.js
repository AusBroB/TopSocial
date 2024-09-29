//npm init
//npm install axios cors express json-server
//npm i nodemon concurrently -D

const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const {handleErrors} = require('./middleware/errorMiddleware')

const app = express()

app.use(cors())
//前端在body中向后端发数据，需要解析body数据，否则是undefined
app.use(express.json())


app.use('/api', router)
//use error middleware at the end
app.use(handleErrors)

const PORT = 80
app.listen(PORT,function(){
    console.log('Server is running on http://localhost')
})

//npm run server
//npm run jason:server
//npx nodemon index.js
//npx json-server --port 8000 --watch db.json
