import express from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//Sempre add estas duas extenções abaixo quando trabalhar com express:
//interpretar json
app.use(express.json());
//para suportar objetos conforme json trabalha
app.use(express.urlencoded({ extended:true}));


//app use o que foi importado
app.use(usersRoute);


app.use(statusRoute);

//para responder a req tem que atrelar a uma porta
app.listen(3000, () => {

    console.log('app executando porta 3000');

})