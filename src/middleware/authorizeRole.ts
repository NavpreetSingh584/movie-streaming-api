import { Response, NextFunction } from "express";
import { AuthRequest } from "./authenticateToken";

const authorizeRole = (allowedRole: string) => {
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
        if (!req.user) {
            res.status(401).json({
                message: "Unauthorized"
            });
            return;
        }

        if (req.user.role !== allowedRole) {
            res.status(403).json({
                message: "Forbidden: insufficient role"
            });
            return;
        }

        next();
    };
};

export default authorizeRole;