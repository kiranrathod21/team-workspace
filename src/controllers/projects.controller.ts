import { Request, Response } from "express";
import prisma from "../config/prismaClient.js";

export const createProject = async (req: Request, res: Response) => {
  const { name, workspaceId } = req.body;
  const userId = (req.user as any).id;
const membership = await prisma.membership.findUnique({
  where: { userId_workspaceId: { userId, workspaceId } },
});
  if (!membership || membership.role !== "ADMIN") {
    return res.status(403).json({ message: "Only admin can create project" });
  }
  const project = await prisma.project.create({
    data: { name, workspaceId }
  });
  return res.status(201).json(project);
};

export const listProjects = async (req: Request, res: Response) => {
  const { workspaceId } = req.query;
  if (!workspaceId) return res.status(400).json({ message: "workspaceId required" });
  const projects = await prisma.project.findMany({ where: { workspaceId: String(workspaceId) } });
  res.json(projects);
};

export const assignMemberToProject = async (req: Request, res: Response) => {
  const { projectId, userId } = req.body;
  const user = (req.user as any);
  const project = await prisma.project.findUnique({ where: { id: projectId }});
  if (!project) return res.status(404).json({ message: "Project not found" });

  const membership = await prisma.membership.findUnique({
    where: { userId_workspaceId: { userId: user.id, workspaceId: project.workspaceId } }
  });
  if (!membership || membership.role !== "ADMIN") return res.status(403).json({ message: "Only admin" });

  const assignment = await prisma.projectAssignment.create({
    data: { projectId, userId }
  });
  res.json(assignment);
};
