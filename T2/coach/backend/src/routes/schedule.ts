import express, { Router } from 'express';
import ScheduleController from '@modules/schedule/controller';

const router: Router  = express.Router();
const scheduleController = new ScheduleController();

router.get('/', scheduleController.findById.bind(scheduleController));

export default router;