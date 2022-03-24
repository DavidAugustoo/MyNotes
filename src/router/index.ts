import { Router } from 'express';
import * as homeController from '../controllers/homeController';
import * as crudController from '../controllers/crudController';

const router = Router();

router.get('/', homeController.allNote);

router.get('/completed', homeController.completedNote);

router.get('/addNoteForm', crudController.addNoteForm);

router.post('/addNote', crudController.addNote);

router.post('/editNote/:id', crudController.editNote);

router.get('/editNoteForm/:id', crudController.editNoteForm);

router.get('/completeNote/:id', crudController.completeNote);

router.get('/delNote/:id', crudController.delNote);

export default router;