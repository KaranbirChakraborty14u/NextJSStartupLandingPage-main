

import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://karanbir123:qwertyuiop123@cluster0.vdc9mmq.mongodb.net/test';

const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
}

connect();


interface User {
  email: string;
  password: string;
}

const db = client.db('LMS');

const users = db.collection<User>('users');
