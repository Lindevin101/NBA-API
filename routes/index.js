import { Router } from "express"
import playerRoutes from "./nbaplayers.js"
import teamRoutes from "./nbateams.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/nbaplayers", playerRoutes);
router.use("/nbateams", teamRoutes);

export default router