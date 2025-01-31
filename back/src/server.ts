import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'
import { db } from './config/db'
import authRouter from './routes/authRouter'
import { corsConfig } from './config/cors'
import { initializeAdmin } from './utils/initializeAdmin'


async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log( colors.blue.bold('Conexión exitosa a la BD'));
        await initializeAdmin()
    } catch (error) {
        // console.log(error);
        console.log(colors.red.bold('Falló la conexión a la BD'));
    }
}
connectDB()
const app = express()

app.use(cors(corsConfig))

app.use(morgan('dev'))

app.use(express.json())

app.use('/api/auth', authRouter)

export default app