const express = require('express');
const app = express();
const notesRoutes = require('./routes/notesRoutes');
const connectDB = require('./config/db');
const { connect } = require('mongoose');
const rateLimiter = require('./middleware/rateLimiter');
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()


const PORT = process.env.PORT || 5001
app.use(cors())
app.use(express.json())
app.use(rateLimiter)
app.use(morgan('dev'))
app.use('/api/notes',notesRoutes)
connectDB().then(()=>{
    app.listen (PORT,()=>{
        console.log("server running on port: ",PORT)
    })

})
