const mongoose = require('mongoose')

const Post = require('./database/models/Post')

// MongoClient.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true })
mongoose.connect('mongodb://localhost/node-js-test-blog',{ useNewUrlParser: true })

// Post.create({
// title:'my first blog post',
// description: 'Blog post desc',
// content: 'Lorem ipsum content.'
// },(error, post)=> {
//     console.log(error,post)
// })

// Post.find({},(error,posts)=>{
//     console.log(error,posts)
// })

// Find by id
Post.findById("5cb54d3c76d8823d945b89b6",(error,post)=>{
    console.log(error,post)
})

// Post.findByIdAndUpdate("5cb54d3c76d8823d945b89b6",{
//     title: 'My first blog post but updated nowww'
// }, (error,post) => {
//     console.log(error,post)
// })