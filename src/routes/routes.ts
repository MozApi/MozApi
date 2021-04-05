import {Router} from 'express';
import CustomersController from '../controllers/provinceController'

const routes = Router();

routes.get('/provincias',CustomersController.index);

routes.get('/provincias/:id',CustomersController.show);

export default routes;