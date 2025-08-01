import { Request, Response, NextFunction } from "express";

export const adminMiddleware = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const user = req.user as { role?: string }; // coming from authMiddleware attaching `req.user`

  if (!user || user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

  next();
};
