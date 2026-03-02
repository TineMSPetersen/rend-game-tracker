import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import comicRouter from './routes/comicRoute.ts';
import userRouter from './routes/userRoute.ts';
import connectCloudinary from './config/cloudinary.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


app.use(cors())
app.use(express.json())

// API endpoints
app.use('/api/comic', comicRouter);
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send("API is Working")
})

app.listen(port, () => console.log("Server started on Port : " + port));