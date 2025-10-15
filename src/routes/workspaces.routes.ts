import { Router } from "express";
import { createWorkspace, listWorkspaces } from "../controllers/workspaces.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.js";
// import { createWorkspaceSchema } from "../validations/workspace.validation";
import {createWorkspaceSchema} from "../validators/workspace.validation.js"

const router = Router();
router.post("/", requireAuth, validate(createWorkspaceSchema), createWorkspace);
router.get("/", requireAuth, listWorkspaces);
export default router;
