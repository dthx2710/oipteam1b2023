// backend/src/app.ts
import express, { Request, Response, NextFunction } from 'express';
import * as admin from 'firebase-admin';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// Initialize Firebase Admin SDK with your service account key
const serviceAccount = require('../serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://oip1a-daa77.firebaseio.com'
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoints
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Team 1B Express Server' });
});

// app.get('/api/data', async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     // Access Firestore data
//     const db = admin.firestore();
//     const docRef = db.collection('your-collection').doc('your-document');
//     const doc = await docRef.get();

//     if (!doc.exists) {
//       res.status(404).json({ message: 'Document not found' });
//     } else {
//       res.json(doc.data());
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
