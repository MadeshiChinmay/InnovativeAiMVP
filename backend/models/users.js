const {MongoClient} = require('mongodb')
//const faker=require('faker')
const MONGO_URL="mongodb+srv://innovativeAi:000@innovativeaiwebsite-3kw9l.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) {
    throw err
  }

  const userdb = client.db("userdb")
  const users = userdb.collection("auth_users")
  users.insertMany([{
      name:"Jasneet",
      email:"jasneetutube@gmail.com"
     }
    ], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("DATA OF USERS INSERTED")
  })
})