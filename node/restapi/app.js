let express = require('express')
let app = express();
const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;
//const mongoUrl = "mongodb://localhost:27017"
const mongoUrl="mongodb+srv://grocery:snigdha17@cluster0.a9yt6.mongodb.net/groceryintern?retryWrites=true&w=majority"
const dotenv=require('dotenv')
dotenv.config();
const bodyParser=require('body-parser')
const cors=require('cors')
let port=process.env.PORT || 1217;
var db;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

//get

app.get('/',(req,res)=>{
    res.send('welcome to grocery store')
})

app.get('/category',(req,res)=>{
    db.collection('categories').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//products as per categories
app.get('/products',(req,res)=>{
    let catId=Number(req.query.category_id);
    let query={};
    if(catId){
        query={category_id:catId}
    }
    console.log(">>>catId",catId)
    db.collection('catdata').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//details of products and menu wrt categories
app.get('/productDetails/:id',(req,res)=>{
    let productId=Number(req.params.id);
    db.collection('catdata').find({_id:productId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//menuproducts wrt categories
app.get('/menu/:id',(req,res)=>{
    let productId=Number(req.params.id);
    db.collection('categorymenu').find({category_id:productId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


//filters
app.get('/filter/:catId',(req,res)=>{
    let sort={cost:1}
    let catId=Number(req.params.catId)
    let skip=0;
    let limit=10000000000000;
    let lcost=Number(req.query.lcost)
    let hcost=Number(req.query.hcost)
    let query={}
    if(req.query.sort){
        sort={cost:req.query.sort}
    }
    if(req.query.skip && req.query.limit){
        skip=Number(req.query.skip);
        limit=Number(req.query.limit);
    }
    if(lcost&hcost){
        query={$and:[{cost:{$gt:lcost,$lt:hcost}}],"category_type.category_id":catId}
    }
    db.collection('catdata').find(query).sort(sort).skip(skip).limit(limit).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//get all orders
app.get('/orders',(req,res)=>{
    let email=req.query.email;
    let query={};
    if(email){
        query={"email":email}
    }
    db.collection('orders').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//place order(post)
app.post('/placeorder',(req,res)=>{
    //console.log(req.body)
    db.collection('orders').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('order Added')
    })
})
//menu on basis of user selection
app.post('/menuItem',(req,res)=>{
    console.log(req.body)
    db.collection('categorymenu').find({id:{$in:req.body}}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.delete('/deleteorder',(req,res)=>{
    db.collection('orders').remove({},(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.put('/updateorder/:id',(req,res) => {
    let oId = mongo.ObjectId(req.params.id)
    let status = req.query.status?req.query.status:'Pending'
    db.collection('orders').updateOne(
        {_id:oId},
        {$set:{
            "status":status,
            "bank_name":req.body.bank_name,
            "bank_status":req.body.bank_status
        }},(err,result)=>{
            if(err) throw err;
            res.send(`Status Updated to ${status}`)
        }
    )
})

MongoClient.connect(mongoUrl,(err,connection)=>{
    if(err) console.log("error while connecting")
    db = connection.db('groceryintern')
    app.listen(port,()=>{
        console.log(`listening to the port ${port}`)
    })
})