const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect to the MongoDB instance
mongoose.connect('http://localhost:3000/register', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Define the user schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

// Create the user model
const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle user registration
app.post('/register', (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  newUser.save().then(() => {
    console.log('User saved');
    res.json({ success: true });
  }).catch(err => {
    console.error('Error saving user', err);
    res.status(500).json({ error: 'Could not save user' });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

