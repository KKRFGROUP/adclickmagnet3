// app/api/contact/route.ts
import { NextResponse } from "next/server";
import mongoose from "mongoose";

// Define the contact schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String},
  phoneNumber: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Get the Contact model (creates it if it doesn't exist)
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

// Connect to MongoDB
const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(MONGODB_URI, {
        dbName: "contactUs",
      });
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export async function POST(request: Request) {
  try {
    // Connect to database
    await connectDB();

    // Parse the request body
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email", "message"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Create new contact document
    const contact = await Contact.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      companyName: body.companyName,
      phoneNumber: body.phoneNumber,
      message: body.message,
    });

    return NextResponse.json(
      { success: true, data: contact },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}