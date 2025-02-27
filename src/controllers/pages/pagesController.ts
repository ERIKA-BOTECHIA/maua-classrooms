import { Request, Response } from "express";



export const getPage0 = async (req: Request, res: Response) => {
  res.status(200).sendFile("page-0.html", { root: "build/views" });
};

