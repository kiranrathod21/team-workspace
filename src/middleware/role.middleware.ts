import { Request, Response, NextFunction } from "express";
import  prisma  from "../config/prismaClient.js";

export const requireWorkspaceAdmin = (workspaceIdParam = "workspaceId") => async (req: Request, res: Response, next: NextFunction) => {
  const userId = (req.user as any)?.id;
  const workspaceId = req.params[workspaceIdParam] ?? req.body.workspaceId;
  if (!userId || !workspaceId) return res.status(403).json({ message: "Missing info" });

  const membership = await prisma.membership.findUnique({
    where: { userId_workspaceId: { userId, workspaceId } }
  });

  if (!membership || membership.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin only" });
  }
  next();
};
