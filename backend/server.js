import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import mechRouter from './routes/mechRoute.ts';
import characterRouter from './routes/characterRoute.ts';

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


app.use(cors())
app.use(express.json())

// API endpoints
app.use('/api/mech', mechRouter);
app.use('/api/character', characterRouter)

app.get('/', (req, res) => {
  res.send("API is Working")
})

app.listen(port, () => console.log("Server started on Port : " + port));