import { MongoClient } from 'mongodb';


export async function handler(req, res){

  // if (req.method === "DELETE"){

  // }
    // Fetch data from API
    console.log(req.query)
    const feedbackId = req.query.feedbackId;
    console.log(feedbackId)
    const client = await MongoClient.connect(
        'mongodb+srv://meetups:marvinsroom@cluster0.psbon9s.mongodb.net/meetups?retryWrites=true&w=majority'
      );
      const db = client.db();
      const helpersCollection = db.collection('helpers');
  
      const result = await helpersCollection.find(feedbackId).toArray()
  
      console.log(result);
      client.close()
  
    // return {}
}

// async function handler(req, res) {
//     if (req.method === 'POST') {
//       const data = req.body;
  
//       const client = await MongoClient.connect(
//         'mongodb+srv://meetups:marvinsroom@cluster0.psbon9s.mongodb.net/meetups?retryWrites=true&w=majority'
//       );
  
//       const db = client.db();
//       const helpersCollection = db.collection('helpers');
//       const result = await helpersCollection.insertOne(data);
  
//       console.log(result);
  
//       client.close();
//       res.status(201).json({ message: 'Helper inserted!' });
//     }
//   }
  
  export default handler;