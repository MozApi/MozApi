import express, { response } from 'express';
import path from 'path';
import cors from 'cors';
import "dotenv/config";

import 'express-async-errors';


import routes from './routes/routes';
import errorHandler from './errors/handler';
const app= express();

// Constants
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static(__dirname + "/public"));
app.use('/uploads',express.static(path.join(__dirname, '..','uploads')))
app.use(errorHandler);

app.listen( PORT);

console.log(`Server Is On`);