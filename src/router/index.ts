import { Router } from 'express';
import * as homeController from '../controllers/homeController';
import * as crudController from '../controllers/crudController';

const router = Router();

router.get('/', homeController.allNote);

router.get('/completed', homeController.completedNote);

router.get('/addNoteForm', crudController.addNoteForm);

router.post('/addNote', crudController.addNote);

router.get('/editNote', crudController.editNote);

router.get('/delNote', crudController.delNote);

export default router;