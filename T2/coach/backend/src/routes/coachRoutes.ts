import { Router } from 'express';
import CoachController from '../controllers/coachController';

const routes = Router();

routes.get('/coachs', CoachController.getAllCoach);
routes.post('/coachs', CoachController.createCoach);
routes.put('/coachs/:id', CoachController.updateCoach);
routes.delete('/coachs/:id', CoachController.deleteCoach);

export default routes;
