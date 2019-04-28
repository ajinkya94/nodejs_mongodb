const path = require('path')

const expressEdge = require('express-edge')

const express = require('express')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')

const Post = require('./database/models/Post')

const app = new express()

mongoose.connect('mongodb://localhost/node-js-blog', {useNewUrlParser: true})


app.use(express.static('public'))

app.use(expressEdge)

app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/index', (req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/post',(req,res)=>{
    res.render('post')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.get('/posts/new',(req,res)=>{
    res.render('create')
})

app.post('/posts/store',(req,res)=>{ 
    Post.create(res.body,(error,post)=>{
        res.redirect('/')
    })
    res.redirect('/')
    console.log(req.body)
    
})

app.listen(1337,()=>{
    console.log('Application listening on port 1337')
})
 