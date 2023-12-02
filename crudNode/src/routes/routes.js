import { Router } from "express";
import SelectionController from "../app/controllers/SelectionController.js";
const router = Router();

// Rotas
router.get("/selecoes", SelectionController.index);
router.get("/selecoes/:id", SelectionController.show);
router.post("/selecoes", SelectionController.store);
router.put("/selecoes/:id", SelectionController.update);
router.delete("/selecoes/:id", SelectionController.delete);

export default router;
