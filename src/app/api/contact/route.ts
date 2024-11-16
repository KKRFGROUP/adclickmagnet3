import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from 'next'
const mongoUrl = process.env.MONGODB_URI; 
// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

// Define Schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
});

// Create Model
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  
  res.status(200).json({ message: "API route is working!" });
  //if (req.method === "POST") {
  //  try {
  //    await connectDB();
//
  //    // Save the submitted form data
  //    const newContact = new Contact(req.body);
  //    await newContact.save();
//
  //    res.status(200).json({ success: true, message: "Form submitted successfully!" });
  //  } catch (error) {
  //    res.status(500).json({ success: false, error: "Failed to submit form" });
  //  }
  //} else {
  //  res.status(405).json({ success: false, message: "Method not allowed" });
  //}
}
