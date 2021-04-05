import express, { response } from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';


import routes from './routes/routes';
import errorHandler from './errors/handler';
const app= express();

// Constants
const PORT = 8080;
const HOST ='0.0.0.0';

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static(__dirname + "/public"));
app.use('/uploads',express.static(path.join(__dirname, '..','uploads')))
app.use(errorHandler);

app.listen( PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);