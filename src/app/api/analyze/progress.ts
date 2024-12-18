// pages/api/analyze/progress.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //const { url } = req.query;

  // Set headers for SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Simulate progress (replace with actual analysis logic)
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    
    // Send progress update
    res.write(`data: ${JSON.stringify({
      progress,
      status: getStatusMessage(progress)
    })}\n\n`);

    if (progress >= 100) {
      clearInterval(interval);
      res.end();
    }
  }, 1000);

  // Clean up on client disconnect
  req.on('close', () => {
    clearInterval(interval);
    res.end();
  });
}

function getStatusMessage(progress: number): string {
  if (progress < 25) return 'Initializing analysis...';
  if (progress < 50) return 'Scanning website structure...';
  if (progress < 75) return 'Analyzing performance metrics...';
  if (progress < 100) return 'Finalizing results...';
  return 'Analysis complete!';
}