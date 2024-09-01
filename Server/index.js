const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoModel = require('./Models/Todo');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB:", err));


app.get("/get", (req, res) => {
    const task = req.body.task;
    todoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));
  })

app.put("/update/:id",(req,res)=>{
    const {id}=req.params;
    todoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>console.log(err))
})

app.post("/add", (req, res) => {
  const task = req.body.task;
  todoModel.create({
    task: task
  })
  .then(result => res.json(result))
  .catch(err => res.json(err));
});

app.delete('/delete/:id', (req,res)=>{
    const {id}=req.params;
    todoModel.findByIdAndDelete({_id:id})
    .then(result => res.json(result))
  .catch(err => res.json(err));

})

app.listen(3010, () => {
  console.log("Server is running on port 3010");
});