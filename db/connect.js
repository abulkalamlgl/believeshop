const mongoose=require('mongoose')



mongoose.connect('mongodb+srv://admin-abulkalam:abulkalam123@clustertest.gvmyx.mongodb.net/believeShopDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connection Successfull')
}).catch((err)=>{
      console.log('Your error'+err)
})