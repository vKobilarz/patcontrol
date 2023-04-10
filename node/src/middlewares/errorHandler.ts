import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/AppError';

const errorHandler = (error: Error, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof AppError) {
        response
            .status(error.statusCode)
            .json({ status: 'error', message: error.message });
    }

    console.error(error);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
};

export default errorHandler;