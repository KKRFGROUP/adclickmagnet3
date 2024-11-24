// /pages/api/blogs.js
import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next'
const uri = process.env.MONGODB_URI; // Replace with your MongoDB URI
const dbName = process.env.MONGODB_DB; // Replace with your database name

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db(dbName);
      const blogs = await db.collection('blogs').find({}).toArray();
      client.close();

      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch blogs', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
