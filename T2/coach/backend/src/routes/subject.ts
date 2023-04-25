import express, { Router } from 'express';
import SubjectController from '@modules/subject/controller';

const router: Router  = express.Router();
const subjectController = new SubjectController();

// Rota para subject
router.get('/', subjectController.getAll.bind(subjectController));

export default router;
