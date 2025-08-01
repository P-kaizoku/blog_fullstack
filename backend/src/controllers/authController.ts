import { Response, Request, NextFunction } from "express";
import User from "../models/User";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatarUrl: user.avatarUrl,
      bio: user.bio,
      role: user.role,
    });
  } catch (error) {
    next(error);
    return;
  }
};

export const loginUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      msg: "Login successful",
    });
  } catch (error) {
    next(error);
    return;
  }
};

export const adminLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }
    if (user.role !== "admin") {
      res.status(403).json({ message: "Access denied" });
      return;
    }
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      msg: "Login successful",
    });
  } catch (error) {
    next(error);
    return;
  }
};
