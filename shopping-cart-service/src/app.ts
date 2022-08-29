import express, { Express, NextFunction, Response, Request } from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import dotenv from "dotenv"
import nocache from "nocache"
import bodyParser from "body-parser"
import compression from "compression"
dotenv.config()
import { router } from "./routes"
import { AppErrorHandeller } from "./middleware/error-handeller.middleware"


export const app: Express = express()
app.use(cors())
app.use(helmet())
app.use(nocache())
app.use(morgan('dev'))
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Root route */
app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Welcome to app shopping cart service.")
})


/* Integrate API routes */
app.use("/api/v1", router)

/* Handelling 404 route */
app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        status: false,
        errors: {
            message: "Sorry, Route not found."
        }
    })
})

/* Error handelling middleware registration */
app.use(AppErrorHandeller)
