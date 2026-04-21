import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import users from "../auth/users";

const router: Router = Router();

const JWT_SECRET = "mysecretkey";

router.post("/login", async (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({
            message: "Username and password are required"
        });
        return;
    }

    const user = users.find((u) => u.username === username);

    if (!user) {
        res.status(401).json({
            message: "Invalid credentials"
        });
        return;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        res.status(401).json({
            message: "Invalid credentials"
        });
        return;
    }

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            role: user.role
        },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.status(200).json({
        message: "Login successful",
        token
    });
});

export default router;