import { NextFunction, Request, Response } from 'express';

type HandledError = Error | TApiError | TCrudError;

const serviceErrorHandler = (
  err: HandledError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  // Log the error
  console.error(`[ERROR] ${req.method} ${req.originalUrl}:`, err);

  // Determine status code
  const status = (err as any)?.status || 500;

  // Send JSON response
  res.status(status).json({
    api: process.env.APP_NAME,
    message: err?.message || 'Something went wrong',
    endpoint: req.originalUrl,
    stack:
      process.env.NODE_ENV !== 'production'
        ? process.env.LOG_LEVEL === 'debug'
          ? err?.stack
          : undefined
        : undefined,
    traceId: req.headers['x-request-id'] || null,
  });
};

export default serviceErrorHandler;
