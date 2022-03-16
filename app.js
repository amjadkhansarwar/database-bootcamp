const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.set('view engine', 'ejs')

const fs = require('fs')

app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(8000)