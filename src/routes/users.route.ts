import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req:Request, res:Response, next:NextFunction) =>{

    const users = [{UserName: 'Joao'}];
    res.status(StatusCodes.OK).send(users);

});

//No request voce coloca como instring e ele faz autocomplit no params

usersRoute.get('/users/:uui', (req:Request<{uuid: string}>, res:Response, next:NextFunction) =>{
    const uuid = req.params.uuid;
    //bancoDeDados.getUserByUUid(uuid)
    res.status(StatusCodes.OK).send({uuid});

});

usersRoute.post('/users', (req:Request, res:Response, next:NextFunction) =>{

    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);

});

usersRoute.put('/users/:uuid', (req:Request<{uuid: string}>, res:Response, next:NextFunction) =>{

    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    res.status(StatusCodes.OK).send({modifiedUser});

});

usersRoute.delete('/users/:uuid', (req:Request<{uuid: string}>, res:Response, next:NextFunction) =>{

    res.sendStatus(StatusCodes.OK);

})




export default usersRoute;