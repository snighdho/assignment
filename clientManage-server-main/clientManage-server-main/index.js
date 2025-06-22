

const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://ziamnoun05:NyI2uQ5GDZp52K3z@cluster0.nkyts2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}
run();

//  users collection
const usersCollection = client.db("profileDB").collection("users");

// Route to get user profile by Firebase UID
app.get('/api/users/:uid', async (req, res) => {
  const uid = req.params.uid;
  try {
    const user = await usersCollection.findOne({ uid });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to fetch user profile' });
  }
});

// Route to update user profile by Firebase UID
app.put('/api/users/:uid', async (req, res) => {
  const uid = req.params.uid;
  const updateData = req.body;

  try {
    const result = await usersCollection.updateOne(
      { uid },
      { $set: updateData },
      { upsert: true } // Create new document if none found
    );
    res.send({ message: "Profile updated", result });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to update user profile' });
  }
});

// Route to create user (register) with uid
app.post('/api/users', async (req, res) => {
  const userData = req.body;
  try {
    // Ensure uid field exists
    if (!userData.uid) {
      return res.status(400).send({ error: "UID is required" });
    }

    // Insert user if does not exist
    const existingUser = await usersCollection.findOne({ uid: userData.uid });
    if (existingUser) {
      return res.status(409).send({ error: "User already exists" });
    }

    const result = await usersCollection.insertOne(userData);
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to create user' });
  }
});

//All user info
 app.get('/api/users', async (req, res) => {
  try {
    const users = await usersCollection.find().toArray();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Failed to fetch users' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
