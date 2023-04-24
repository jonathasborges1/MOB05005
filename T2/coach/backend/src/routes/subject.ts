import express from 'express';
import SubjectController from 'controllers/subject';

const router  = express.Router();

// Rota para subject
router.get('/subject', SubjectController.getAll);

export default router;
