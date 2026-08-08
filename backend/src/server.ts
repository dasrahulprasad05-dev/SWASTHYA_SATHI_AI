import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import apiRouter from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security and utility middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount API routes
app.use('/api', apiRouter);

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    path: req.originalUrl,
  });
});

// Global Error Handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err?.message || 'Unknown error occurred',
  });
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🏥 SWASTHYA SATHI AI BACKEND SERVICE`);
  console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
  console.log(`🔗 API Base: http://127.0.0.1:${PORT}/api`);
  console.log(`====================================================`);
});

export default app;
