import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
import {getAllLocalities} from "@services/localities.service"

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 3000

app.get("/", async (req: Request, res: Response) => {
  const localities = await getAllLocalities()
  res.json(localities)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
