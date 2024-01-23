const express = require("express");
const {MongoClient} = require('mongodb')
const app = express();
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"))
const React = require('react')
const ReactDOMServer = require('react-dom/server');

let db;

app.get("/", (req, res)=>
{
  res.render("admin")

})

async function db_start()
{
  const client = new MongoClient('mongodb+srv://aminofab:26426336@cluster0.hywl3km.mongodb.net/PesalyDB')
 //connects to the database
  await client.connect() //waits for the connection to finish
  db = client.db()//returns the database
  console.log('database connected')
  app.listen(3000, ()=> console.log("server started"))

}

app.get("/api/users", async(req, res)=>{
const allUsers = await db.collection("users").find().toArray()
res.json(allUsers)
})


db_start()


