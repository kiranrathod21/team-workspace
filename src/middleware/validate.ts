import type { Request, Response, NextFunction } from "express";
import { ZodObject } from "zod";
import type { ZodRawShape } from "zod";

export const validate =
  (schema: ZodObject<ZodRawShape>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (err: any) {
      return res.status(400).json({ error: err.errors ?? err.message });
    }
  };
