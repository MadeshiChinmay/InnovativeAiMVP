const express=require('express')
const app=express()
const {MongoClient}=require('mongodb')
const bodyParser = require('body-parser');
const cors=require('cors')
const path=require('path')
app.use(cors())

const MONGO_URL="mongodb+srv://innovativeAi:000@innovativeaiwebsite-3kw9l.mongodb.net/test?retryWrites=true&w=majority"


app.use(express.static(path.resolve(__dirname, '../build')));
app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname, '../build','index.html'))
})
//Parses every type of request into json
app.use(bodyParser.json({type:'*/*'}))


//=========MONGO_DB SETUP========
MongoClient.connect(MONGO_URL,(err,client)=>{
    if(err) {throw err}

    console.log("MONGO_DB STARTED")
    
    
})
//===============================

app.post('/subscribe',(req,res)=>{
    console.log("subscribe called")
    console.log(req.body)
    MongoClient.connect(MONGO_URL,(err,client)=>{
        const userdb=client.db("userdb")
        const emails=userdb.collection("emails")
        emails.insertOne({
            email:req.body.email
        }).then((results)=>{
            console.log("Got The Email")
        }).catch((e)=>{
            console.log(e)
        })
    })
})

//Below Route will CHeck if the User has been identified with the company or not
app.post('/isUser',(req,res)=>{
    console.log(req.body.email)
    MongoClient.connect(MONGO_URL,(err,client)=>{
        const userdb=client.db("userdb")
        const users=userdb.collection("auth_users")
        users.findOne({email:req.body.email}).then((results)=>{
            if(results==null)
            {
                res.send("Not Found");
            }
            else
            {
                res.send("Found");
            }
        }).catch((e)=>{
            console.log(e)
        })
    })
})

app.get('/questions',(req,res)=>{
    console.log('Hit Questions')
    let question_arr=[]
    MongoClient.connect(MONGO_URL,(err,client)=>{
        if(err)
        {
            throw err;
        }
        const userdb=client.db('userdb')
        const questions=userdb.collection('question_bank')
        questions.aggregate([{$sample:{size:3}}]).forEach((result)=>{
            console.log(result)
            question_arr.push(result.question)
        }).then(()=>{
            res.send(question_arr)
        })
    })
    
    
})

//Below request will be changed to post request and will be processed for the userinfo details form submission
app.post('/sendinfo',(req,res)=>{
    console.log("post request received")
    MongoClient.connect(MONGO_URL,(err,client)=>{
        if(err){throw err}
        const userdb=client.db('userdb')
        const users=userdb.collection('users')

        users.insertOne({
            username:req.body.username,
            institute:req.body.institute,
            address:req.body.address,
            email:req.body.email
        }).then((err,results)=>{
            if(err){throw err}
            res.send(results);
        })
    })
    res.send(req.body)
    
})

//Below Request will respond with the User Details finding the details in the db with the help of username key (GET REQUEST)
app.post('/getuserinfo',(req,res)=>{
    console.log(req.body)
    MongoClient.connect(MONGO_URL,(err,client)=>{
        if(err){throw err}
        const userdb=client.db("userdb")
        const users=userdb.collection("users")
        users.findOne({username:req.body.username}).then((result)=>{
            console.log(result)
            res.send(result)
        }).catch((e)=>{
            console.log(e)
        })
    })
})




const PORT=process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log("Server Started At http://localhost:4000/")
})