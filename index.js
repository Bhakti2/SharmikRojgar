const express = require('express');
const app = express()
const cors = require('cors');
let bodyParser = require("body-parser")
const { postRouter } = require("./routes/post.route");
const { jobRouter } = require("./routes/job.route");
const {getConnection} = require('./Connection/mongodb.connection');
const { userRouter } = require('./routes/user.route');
app.use(bodyParser.json())
app.use(cors())
getConnection();
const PORT = 3000;


app.use('/posts', postRouter);
app.use('/jobs', jobRouter);
app.use('/user', userRouter);


app.get("/", (req, res) => {
  res.send("Hello,world");
})

app.listen(PORT, () => {
  console.log("Working");
})
