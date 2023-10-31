import { Router } from "express"
import playerRoutes from "./nbaplayers.js"
import teamRoutes from "./nbateams.js"
import statRoutes from "./seasonavgs.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/nbaplayers", housesRoutes);
router.use("/nbateams", charactersRoutes);
router.use("/seasonavgs",statRoutes);

export default router