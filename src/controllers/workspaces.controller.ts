import { Request, Response } from "express";
import prisma from "../config/prismaClient.js";

export const createWorkspace = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const userId = (req.user as any).id;

  const workspace = await prisma.workspace.create({
  data: {
    name,
    ownerId: userId,
    members: {
      create: {
        userId,
        role: "ADMIN",
      },
    },
  },
  include: { members: true },
});

    return res.status(201).json(workspace);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: "Failed to create workspace" });
  }
};

export const listWorkspaces = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any).id;

    const memberships = await prisma.membership.findMany({
      where: { userId },
      include: { workspace: true }
    });

    const workspaces = memberships.map((m:any) => m.workspace);
    return res.json(workspaces);
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: "Failed to fetch workspaces" });
  }
};
