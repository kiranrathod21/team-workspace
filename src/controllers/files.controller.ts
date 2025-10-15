import { Request, Response } from "express";
import multer from "multer";
import prisma from "../config/prismaClient.js"
const upload = multer({ dest: "uploads/" });

export const uploadMiddleware = upload.single("file");

export const uploadFile = async (req: Request, res: Response) => {
  const file = req.file;
  const { projectId } = req.body;
  const uploaderId = (req.user as any).id;

  if (!file) return res.status(400).json({ message: "file required" });

  const url = `${process.env.SERVER_BASE_URL}/uploads/${file.filename}`;

  const dbFile = await prisma.file.create({
    data: {
      projectId,
      uploaderId,
      filename: file.originalname,
      url,
      mimeType: file.mimetype,
      size: file.size
    }
  });

  res.status(201).json(dbFile);
};

export const listFiles = async (req: Request, res: Response) => {
  const { projectId } = req.query;
  if (!projectId) return res.status(400).json({ message: "projectId required" });
  const files = await prisma.file.findMany({ where: { projectId: String(projectId)}});
  res.json(files);
};
