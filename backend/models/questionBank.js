const {MongoClient} = require('mongodb')
//const faker=require('faker')
const MONGO_URL="mongodb+srv://innovativeAi:000@innovativeaiwebsite-3kw9l.mongodb.net/test?retryWrites=true&w=majority"

MongoClient.connect(MONGO_URL, (err, client) => {
  if (err) {
    throw err
  }

  const userdb = client.db("userdb")
  const questions = userdb.collection("question_bank")
  questions.insertMany([{
      question:"Question 1"
     },
     {
      question:"Question 2"
     },
     {
      question:"Question 3"
     },
     {
      question:"Question 4"
     },
     {
      question:"Question 5"
     },
     {
      question:"Question 6"
     },
     {
      question:"Question 7"
     },
     {
      question:"Question 8"
     },
     {
      question:"Question 9"
     },
     {
      question:"Question 10"
     }
    ], (err, result) => {
    if (err) {
      throw err;
    }
    console.log("DATA OF USERS INSERTED")
  })
})