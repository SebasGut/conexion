import { Router } from "express";
import { getStudents } from "../handlers/students/handlers.js";

const router = Router();

// req, res
router.route('/list').get(getStudents);

export default router;
