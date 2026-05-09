import type { Request, Response } from "express-serve-static-core";
import jwt from "jsonwebtoken";
import userModel from "../models/user/userModel.ts";


const createToken = (id: string, username: string) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }

  return jwt.sign({ userId: id, username }, secret, { expiresIn: "21d" });
};

const GenerateToken = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId, username } = req.body;

    if (!userId || !username) {
      return res.json({ success: false, message: "Invalid data" });
    }

    const token = createToken(userId, username);

    return res.json({ success: true, token });

  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

const LoginUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username: username.toLowerCase() });
    if (!user) {
      return res.json({ success: false, message: "User does not exist" });
    }

    // const isMatch = await bcrypt.compare(password, user.password);

    if (password != user.password) {
      return res.json({ success: false, message: "Wrong password" });
    }

    const token = createToken(user._id, user.username);
    return res.json({ success: true, token });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export { GenerateToken, LoginUser }