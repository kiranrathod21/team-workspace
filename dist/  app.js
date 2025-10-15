import express from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import morgan from 'morgan';
// import swaggerUi from 'swagger-ui-express';
// import swaggerSpec from './config/swagger';
// import authRoutes from './routes/auth';
// import workspaceRoutes from './routes/workspace';
const app = express();
// app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(morgan('dev'));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use('/api/auth', authRoutes);
// app.use('/api/workspaces', workspaceRoutes);
// ... other routes
export default app;
//# sourceMappingURL=%20%20app.js.map