import { Request, Response } from "express";

export function indexResponse(req: Request, res: Response) {
  const data = { title: "Programacion web" };
  return res.render("index", data);
}



export function mainResponse(req: Request, res: Response): Response {
  const html = 
  '<h1> Spu un titutlo </h1> <input>';
  return res.send(html);
}

export function main2Response(req: Request, res: Response):Response{
  return res.send("Hola, ¡Soy el main 2!")
}

export function sumaParametrosResponse(req: Request, res: Response): Response {
  const argumentos = req.query;
  const { numeroA, otroNumero } = argumentos;
  if (numeroA !== undefined && otroNumero !== undefined) {
    const suma = Number(numeroA) + Number(otroNumero);
    return res.status(200).send(`Soy la suma ${suma}`);
  } else {
    return res.status(400).send("No puedo Marta");
  }
}

export function sumaParametrosFijosResponse(req: Request, res: Response): Response {
  const argumentos = req.params;

  const { numeroA, numeroB } = argumentos;
  if (numeroA !== undefined && numeroB !== undefined) {
    const suma = Number(numeroA) + Number(numeroB);
    return res.status(200).send(`Soy la suma ${suma}`);
  } else {
    return res.status(400).send("No puedo Marta");
  }
}