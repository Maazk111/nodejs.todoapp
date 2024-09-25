import express from "express";
import {
    getMyProfile,
    login,
    logout,
    register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);


router.get("/me", isAuthenticated, getMyProfile);

// Dynamic Route | Try to keep it below the code cuz of the error
// router.get("/userid/:id", getUserDetails);

// router.put("/userid/:id", updateUser);

// router.delete("/userid/:id", deletesUser);

export default router;
