import express from 'express';
// import User from './models/user';

const app = express();

app.get(3000, function(req, res) {
    res.json({ message: 'Hello, world!' });
    alert("Hello!");
  });
  

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send('Invalid request body');
      return;
    }

    const user = await user.findOne({ email, password });

    if (user) {
      res.send('Login successful');
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});



// app.post('/signup', async (req, res) => {
//   try {
//     const { email, password, name, address, phone } = req.body;

//     if (!email || !password) {
//       res.status(400).send('Invalid request body');
//       return;
//     }

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       res.status(409).send('Email already in use');
//       return;
//     }

//     const newUser = new User({ email, password, name, address, phone });

//     await newUser.save();

//     res.status(201).send('User created successfully');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// });


