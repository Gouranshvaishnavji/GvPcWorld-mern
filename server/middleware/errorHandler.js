import { logger } from '../util/logger.js';

export default function errorHandler(err, req, res, next) {
  logger.error(`${err.message} - ${req.method} ${req.originalUrl}`);

  const statusCode = err.statusCode || 500; //200: success,201: created,202: accepted, 400: bad request, 401: unauthorized, 403: forbidden, 404: not found, 500: internal server error, 502: bad gateway, 503: service unavailable, 504: gateway timeout

  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    error: message
  });
}