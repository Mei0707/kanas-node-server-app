import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";

const app = express();
UserRoutes(app);
app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000']
}
));
app.use(express.json());
// Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000, () => console.log('Server listening on port 4000'));