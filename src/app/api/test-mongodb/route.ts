// app/api/test-mongodb/route.ts
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    // Log the MongoDB URI (remove password for security)
    const uri = process.env.MONGODB_URI || '';
    console.log('Connecting to:', uri.replace(/(?<=:\/\/[^:]+:)[^@]+(?=@)/, '****'));

    // Force close any existing connections
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }

    // Connect with basic options
    const conn = await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: 'contactUs'
    });

    // Test the connection and safely access properties
    const isConnected = mongoose.connection.readyState === 1;
    const dbName = conn.connection?.db?.databaseName || 'unknown';

    if (!isConnected) {
      throw new Error('Failed to establish connection');
    }

    return NextResponse.json({
      success: true,
      message: "MongoDB Connected Successfully",
      connectionState: mongoose.connection.readyState,
      database: dbName
    });

  } catch (error: any) {
    console.error('Connection Error Details:', {
      name: error.name,
      message: error.message,
      code: error.code
    });

    return NextResponse.json({
      success: false,
      error: error.message,
      errorName: error.name,
      errorCode: error.code
    }, { status: 500 });
  } finally {
    // Log final connection state
    console.log('Final connection state:', mongoose.connection.readyState);
  }
}