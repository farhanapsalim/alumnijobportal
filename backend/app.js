
const express=require("express");
const productData=require('./src/model/ProductData');
// const cors=require('cors');
//const bodyParser = require('body-parser');
// const jwt=require('jsonwebtoken');
const port = process.env.PORT || 3300;

const app=new express();

 app.use(express.urlencoded({extended: true})); 
 app.use(express.json()); 
//app.use(bodyParser.json());
// app.use(cors());

// username="admin";
// password="12345";



// function verifyToken(req,res,next)
// {
//     console.log("inside verify");       
//     if(!req.headers.authorization)
//     {
//         console.log("inside verify first if"); 

//         return res.status(401).send('unauthorized request');
//     }
//     let token=req.headers.authorization.split(' ')[1]
//     if(token=='null')
//     {
//         console.log("inside verify second if"); 

//         return res.status(401).send('unauthorized request');
 
//     }
//     let payload =jwt.verify(token,'secretKey')
//     console.log("here");

//     console.log(payload);
//     if(!payload)
//     {
//         console.log("inside verify third if"); 

//         return res.status(401).send('unauthorized request');
//     }
//    req.userId=payload.subject;
//     next()


// }


//login

// app.post('/login',(req,res)=>
// {
//     let UserData=req.body;

//     if(username!=UserData.username)
//     {
//         res.status(401).send('invalid username');
//     }
//     else if(password!=UserData.password)
//     {

//         res.status(401).send('invalid password');
//     }
//     else
//     {
//         let payload={subject:username+password}
//         let token =jwt.sign(payload,'secretKey')
//         res.status(200).send({token});
//     }
    
// })






//get all products
// app.get('/products',function(req,res)
// {
//     res.header("Access-Control-Allow-Origin","*")
//     res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS')
//     productData.find()
//          .then(function(products){
//              res.send(products);
//          });
//         });


        //insert a product
//   app.post('/insert',verifyToken,function(req,res)
// {
//     console.log("insert")
//     res.header("Access-Control-Allow-Origin","*")
//     res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS')
//     console.log(req.body);
//     var product={
//         productId:req.body.item.productId,
//         productName:req.body.item.productName,
//         productCode:req.body.item.productCode,

//         releaseDate:req.body.item.releaseDate,

//         description:req.body.item.description,
//         price:req.body.item.price,

//         starRating:req.body.item.starRating,

//         imageUrl:req.body.item.imageUrl,
//     }
//     var product=new productData(product);
//     product.save();
//   });

  //get a product
//   app.get('/:id',  (req, res) => {
  
//     const id = req.params.id;
//     productData.findOne({"_id":id})
//       .then((product)=>{
//           res.send(product);
//       });
//   })
  

  //update a product
    //   app.put('/update',(req,res)=>{
    //     console.log(req.body)
    //     id=req.body._id,
    //     productId= req.body.productId,
    //     productName = req.body.productName,
    //     productCode = req.body.productCode,
    //     releaseDate = req.body.releaseDate,
    //     description = req.body.description,
    //     price = req.body.price,
    //     starRating = req.body.starRating,
    //     imageUrl = req.body.imageUrl
    //     productData.findByIdAndUpdate({"_id":id},
    //                                 {$set:{"productId":productId,
    //                                 "productName":productName,
    //                                 "productCode":productCode,
    //                                 "releaseDate":releaseDate,
    //                                 "description":description,
    //                                 "price":price,
    //                                 "starRating":starRating,
    //                                 "imageUrl":imageUrl}})
    //    .then(function(){
    //        res.send();
    //    })
    //  })


  //delete
//   app.delete('/remove/:id',(req,res)=>{
   
//     id = req.params.id;
//     productData.findByIdAndDelete({"_id":id})
//     .then(()=>{
//         console.log('success')
//         res.send();
//     })
//   })



// app.listen(3000,function()
// {
//     console.log('listening to port 3000');
// });

app.listen(port,()=>{console.log("Server Ready at" +port)});
