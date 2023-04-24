import express from 'express';
import CoachController from 'controllers/coach';

const router  = express.Router();
const coachController = new CoachController();

// Rota para coaches
router.get('/coachs', coachController.getAll);
router.post('/coachs', coachController.create);
router.get('/coachs/:id', coachController.getCoachById);
router.put('/coachs/:id', coachController.update);
router.delete('/coachs/:id', coachController.delete);

export default router;




