import cors from 'cors';
import express from 'express';
import assignamentRoute from './assignament/route/v1/assignamentRoute';
import userRoute from './user/route/v1/userRoute';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRoute);
app.use('/api/v1/assignaments', assignamentRoute);

export default app;
