
import express, { Router } from 'express';
import CoachController from '@modules/coach/controller';
import CoachService from '@modules/coach/service';

const router: Router  = express.Router();
const coachController = new CoachController();

// Rota para coaches
router.get('/', coachController.getAll.bind(coachController));
router.post('/', coachController.create.bind(coachController));
router.get('/:id', coachController.getCoachById.bind(coachController));
router.put('/:id', coachController.update.bind(coachController));
router.delete('/:id', coachController.delete.bind(coachController));

export default router;
