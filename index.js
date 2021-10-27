const express=require('express')
const app=express()
const bodyParser=require('body-parser')
require('./db/connect')
const User=require('./db/model')
const port=process.env.port || 3000;


app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
   res.render('home')
})


app.post('/',(req,res)=>{
     const newUserData=new User({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        message:req.body.text,
     })

     newUserData.save()

   res.render('submit')

})










app.listen(port)