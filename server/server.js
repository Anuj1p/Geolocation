const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const dotenv  = require('dotenv')
const routes = require('./routes')
const cors = require('cors')
const {posts } = require('./model.js')
const PORT = process.env.PORT || 4000

console.clear()
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, {
  useCreateIndex : true,
  useNewUrlParser : true,
  useUnifiedTopology : true
}, () => console.log("Database connected successfully"))

app.get('/', async (req, res) => {
  try {
    const pos = await posts.find();
    res.send(pos);
  } 
  catch (e) {
    res.status(400).send(e);
  }
})


app.use(express.json())
app.use(cors())
app.use('/app', routes)
app.listen(PORT, () => {
  console.log(`Server is running /`);
});