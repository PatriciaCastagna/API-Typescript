import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";

const statusRoute = Router();

//app instanciado: coloca valores nele, o que vai fazer
//vai responder 'ok'


statusRoute.get('/users', (req:Request, res:Response, next:NextFunction) =>{

    res.sendStatus(StatusCodes.OK);
});

export default statusRoute;

