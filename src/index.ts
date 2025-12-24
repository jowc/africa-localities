import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
import { getAllLocalities, getLocality } from "@services/localities.service.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.get("/:name", async (req: Request, res: Response) => {
  const { name } = req.params;
  console.log(name);
  const locality = await getLocality(name);
  res.json(locality);
});

app.get("/", async (req: Request, res: Response) => {
  const localities = await getAllLocalities();
  res.json(localities);
});

// add not found route
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


export default app;
