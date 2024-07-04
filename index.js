const express= require('express');
const app= express();
const bodyParser = require('body-parser'); // Import body-parser
const mongoose=require('mongoose');
const cors=require('cors');

const User= require('./User');
// const { default: Users } = require('./src/project/Users');



app.use(cors({
    origin: 'http://localhost:5173',credentials:true}));
  app.use(bodyParser.json('body-parser')); 
  app.use(express.urlencoded({extended:true}));


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/task');
}


app.post('/frm',async(req,res)=>{
let{frmState}= req.body;
 let user=new User(frmState);
 await user.save();
res.json({fm:"okk"});
})

app.get('/filter/:state',async(req,res)=>{
  // console.log(req.params);
  let {state}=req.params;
  let data=await User.find({state:state});
  res.json({data:data});
})

app.get('/getUsers',async(req,res)=>{
  let data=await User.find({});
  console.log(data);
  res.json({data:data});
})


app.listen(8080,()=>{
  console.log("app list");
})