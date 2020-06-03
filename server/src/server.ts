import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors'

const app = express();

app.use(cors()) //controle de quais urls porderão utilizar a API da aplicação
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes);

app.listen(3333);