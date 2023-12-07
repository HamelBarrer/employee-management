import cors from 'cors';
import express from 'express';
import userRoute from './user/route/v1/userRoute';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRoute);

export default app;
