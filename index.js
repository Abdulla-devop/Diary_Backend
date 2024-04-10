import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db.js';
import postRoutes from './Routes/post.js'
import cors from "cors"
import { userRouter } from './Routes/user.js';
import { isAuthenticated } from './Auth/auth.js';
// configuration
dotenv.config();
const PORT = process.env.PORT
// initialize a server 
const app = express()
//middlewares
app.use(express.json());
app.use(cors());

//connecting DB
connectDB();
//initializing routes
app.use('/app/post/',isAuthenticated, postRoutes)
app.use('/app/user/',userRouter)

app.listen(PORT,()=>{
  console.log(`Server listening in the port ${PORT}`)
})