import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const protect = (req: any, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};
