import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.psbon9s.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  
    const client = await MongoClient.connect(
      connectionString
    );

    const db = client.db();
    const helpersCollection = db.collection('helpers');
    const result = await helpersCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: 'Helper inserted!' });
  }
}

export default handler;