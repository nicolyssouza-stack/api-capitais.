import express, { Request, Response } from "express";
import { capitaisBrasil } from "./data/capitais.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/estados/:sigla", (req: Request, res: Response): any => {
  const sigla = String(req.params.sigla).toUpperCase();
  const capital = capitaisBrasil[sigla];

  if (!capital) {
    return res.status(404).json({
      erro: "Estado não encontrado."
    });
  }

  return res.status(200).json({
    sigla: sigla,
    capital: capital
  });
});

app.listen(PORT, () => {
  console.log(`⚡ Servidor executando em http://localhost:${PORT}`);
});