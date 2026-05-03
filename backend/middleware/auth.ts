import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

const authUser = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.json({ success: false, message: "Not authorized. Log in again" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    req.body.userId = (decoded as any).userId;
    next();
  } catch (error) {
    if (error instanceof Error) {
      res.json({ success: false, message: error.message });
    } else {
      res.json({ success: false, message: "Auth error" });
    }
  }
};

export default authUser;