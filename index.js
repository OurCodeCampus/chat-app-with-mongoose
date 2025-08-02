const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const Chat = require("./models/chats");
const methodOverride = require("method-override");

const port = process.env.PORT||5000;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));



const uri = "mongodb+srv://surajkumardevops98:testing%24%24%24password@cluster0.uc2uewi.mongodb.net/chatApp?retryWrites=true&w=majority";

async function connectDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
}

connectDB();


app.get("/", async (req, res) => {
  let chats = await Chat.find();
  res.render("mini_whatapps", { chats });
});

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  res.send(chats);
});

// create new chat
app.get("/chats/new", (req, res) => {
  res.render("new_chat");
});

app.post("/chats", (req, res) => {
  let { sender, message, receiver } = req.body;
  let newChat = new Chat({
    from: sender,
    message: message,
    to: receiver,
    created_at: new Date(),
  });

  newChat
    .save()
    .then((res) => {
      console.log("chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/");
});

// edit chat route

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit_chat", { chat });
});

// update route

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message: newMsg } = req.body;
  console.log(newMsg);
  let updatedChat = await Chat.findByIdAndUpdate(
    id,
    { message: newMsg },
    { runValidators: true, new: true }
  );
  console.log(updatedChat);
  res.redirect("/");
});

// destroyed route

app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deleteChat = await Chat.findByIdAndDelete(id);
  console.log(deleteChat);
  res.redirect("/");
});
// new create chat

// const chat1 = new Chat({
//     from : "antu singh",
//     to : "suraj kumar developer",
//     message : "Hi suraj kumar, How are you?",
//     created_at : new Date(),
// });

// Chat.insertMany([
//     {from : "rahul kumar",to:"sourabh kumar",message : "Don't wait for the right moment . Take the moment and make it right!",created_at : new Date()},
//     {from : "mohit kumar",to:"balmukund kumar singh",message : "kya haal hai bhai? Bahut do ho gaye, milte hain kabhi chai pe",created_at : new Date()},
//     {from : "rohit raj",to:"naresh kumar",message : "Dear Sir/Madam , I hope this message finds you well. I am writing to follow up on our previous conversation",created_at : new Date()},
//     {from : "kartik kumar",to:"rajuranjan kumar",message : "Tumhara ek message din bana deta hai... imagine tum khud saamne hoti toh kya hot ❤",created_at : new Date()},
//     {from : "sunil kumar sah",to:"niraj kumar",message : "Success is not final, failure is not fatal: It is the courage to continue that counts.",created_at : new Date()},
//     {from : "manish kuamr",to:"abhimanyu kumar",message : "Good Morning ! Have a productive and positive day ahead",created_at : new Date()},
//     {from : "deepak",to:"antu singh",message : "Bro kal movive dekhne cahlte? Ek dum mast wali aayi hai!!",created_at : new Date()},
//     {from : "sarvjit kumar",to:"manish kumar",message : "Har din ek naya chance hota kuch behtar karne ka. Tayar ho?",created_at : new Date()},

// ]);

// chat1.save().then((res)=>{console.log(res)})

app.listen(port, () => {
  console.log(`server running at port : ${port}`);
});
