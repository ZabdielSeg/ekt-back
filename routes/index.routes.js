import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send('Api en funcionamiento')
})

export default router;