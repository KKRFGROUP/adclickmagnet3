// pages/api/analyze/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Simulated analysis progress tracking
const progressTracker: { [key: string]: number } = {};
const statusMessages: { [key: string]: string } = {};

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const url = body.url;

    // Validate URL
    if (!url) {
      return NextResponse.json({ 
        error: 'URL is required' 
      }, { status: 400 });
    }

    // If this is the first request for this URL, initialize progress
    if (!progressTracker[url]) {
      progressTracker[url] = 0;
      statusMessages[url] = 'Initializing analysis...';

      // Simulate analysis process
      const simulateAnalysis = async () => {
        const stages = [
          { threshold: 25, status: 'Scanning website structure...' },
          { threshold: 50, status: 'Analyzing performance metrics...' },
          { threshold: 75, status: 'Generating detailed report...' },
          { threshold: 100, status: 'Analysis complete!' }
        ];

        while (progressTracker[url] < 100) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          progressTracker[url] = Math.min(progressTracker[url] + 10, 100);

          // Update status message based on current progress
          const currentStage = stages.findLast(stage => progressTracker[url] >= stage.threshold);
          if (currentStage) {
            statusMessages[url] = currentStage.status;
          }
        }
      };

      // Start analysis in background
      simulateAnalysis();
    }

    // Return current progress
    return NextResponse.json({
      progress: progressTracker[url],
      status: statusMessages[url]
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ 
      error: 'Failed to process request' 
    }, { status: 500 });
  }
}

// Optional GET handler for retrieving progress
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json({ 
        error: 'URL is required' 
      }, { status: 400 });
    }

    return NextResponse.json({
      progress: progressTracker[url] || 0,
      status: statusMessages[url] || 'Not started'
    });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ 
      error: 'Failed to process request' 
    }, { status: 500 });
  }
}